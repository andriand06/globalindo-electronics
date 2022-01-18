@extends('layouts.default')


@section('content')
    <div class="orders">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="box-title">Daftar Foto Items</h4>
                        <form action="" method="GET">
                            @csrf
                            <input type="text" name="keyword" id="keyword" class="form-control mt-3" style="width:200px;display:inline;">
                            <button type="submit" class="fa fa-search btn btn-primary" style="border: 1rem;">Search</button>
                        </form>
                    </div>
                    <div class="card-body">
                        @if (Session::has('success'))
                        <div class="alert alert-success">
                            {{ Session::get('success')}}
                        </div>
                        @endif
                        <div class="table-stats order-table ov-h">
                            <table class="table overflow">
                                <thead>
                                    <tr>
                                        <th>Collections Id</th>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Image</th>
                                        <th>Quantity</th>
                                        @if ($user[0]->role == 'Owner')
                                        <th>Base Price</th>
                                        @endif
                                        <th>Is Default</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($items as $i)
                                    <tr>
                                        <td>{{ $i->collections->id}}</td>
                                        <td>{{ $i->id}}</td>
                                        <td>{{ $i->name}}</td>
                                        <td>{{ $i->price }}</td>
                                        <td>
                                            <img src="{{ url($i->image)}}" alt="image">
                                        </td>
                                        <td>{{ $i->quantity }}</td>
                                        @if ($user[0]->role == 'Owner')
                                        <td>{{ $i->base_price }}</td>
                                        @endif
                                        <td>{{ $i->is_default ? 'Ya' : 'Tidak'}}</td>
                                        <td>
                                            <form action="{{ route('collectionitems.destroy', $i->id)}}" method="POST" class="d-inline">
                                                @csrf
                                                @method('delete')
                                                <button class="btn btn-danger btn-sm" onclick="return confirm('hapus data ini?')">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            </form>
                                            <a href="#mymodal" data-remote="{{ route('collectionitems.addquantity', $i->id)}}" data-toggle="modal" data-target="#mymodal" data-title="Tambah Quantity {{ $i->name}}" class="btn btn-info btn-sm">
                                                <i class="fa fa-plus"></i>
                                            </a>
                                            @if ($user[0]->role == 'Owner')
                                            <a href="{{ route('collectionitems.edit', $i->id)}}" class="btn btn-pencil btn-sm">
                                                <i class="fa fa-pencil"></i>
                                            </a>
                                            @endif
                                        </td>
                                    </tr>
                                    @empty
                                        <tr>
                                            <td colspan="6" class="text-center p-5">
                                                Data tidak tersedia
                                            </td>
                                        </tr>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection