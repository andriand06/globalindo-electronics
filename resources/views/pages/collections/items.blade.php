@extends('layouts.default')


@section('content')
    <div class="orders">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="box-title">Daftar Foto Items <small>{{ $collections->title }}</small></h4>
                    </div>
                    <div class="card-body">
                        <div class="table-stats order-table ov-h">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Image</th>
                                        <th>Quantity</th>
                                        <th>Base Price</th>
                                        <th>Is Default</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($items as $i)
                                    <tr>
                                        <td>{{ $i->id}}</td>
                                        <td>{{ $i->name }}</td>
                                        <td>{{ $i->price }}</td>
                                        <td>
                                            <img src="{{ url($i->image)}}" alt="image">
                                        </td>
                                        <td>{{ $i->quantity }}</td>
                                        <td>{{ $i->base_price}}</td>
                                        <td>{{ $i->is_default ? 'Ya' : 'Tidak'}}</td>
                                        <td>
                                            <form action="{{ route('collectionitems.destroy', $i->id)}}" method="POST" class="d-inline">
                                                @method('delete')
                                                <button class="btn btn-danger btn-sm" onclick="return confirm('hapus data?')">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            </form>
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