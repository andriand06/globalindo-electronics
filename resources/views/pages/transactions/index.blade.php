@extends('layouts.default');


@section('content')
    <div class="card">
        <div class="card-header">
           Daftar Transaksi Masuk
        </div>
        @if (Session::has('success'))
        <div class="alert alert-success">
            {{ Session::get('success')}}
        </div>
        
    @endif
         <div class="card-body">
                        <div class="table-stats order-table ov-h">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nama</th>
                                        <th>Email</th>
                                        <th>No Telp</th>
                                        <th>Alamat</th>
                                        <th>Total Transaksi</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($data as $i)
                                    <tr>
                                        <td>{{ $i->id}}</td>
                                        <td>{{ $i->name}}</td>
                                        <td>{{ $i->email}}</td>
                                        <td>{{ $i->phone}}</td>
                                        <td>{{ $i->address}}</td>
                                        <td>Rp.{{ $i->total}}</td>
                                        <td>
                                            @if ($i->status == "PENDING")
                                                <span class="badge badge-info">
                                            @elseif ($i->status == 'SUCCESS')
                                                <span class="badge badge-success">
                                            @elseif ($i->status == 'FAILED')
                                                <span class="badge badge-warning">
                                            @else
                                                <span>
                                            @endif
                                            {{ $i->status }}
                                            </span>
                                        </td>
                                        <td>
                                            @if ($i->status == "PENDING")
                                                <a href="{{ route('transactions.status', $i->id) }}?status=SUCCESS" class="btn btn-success btn-sm"><i class="fa fa-check"></i></a>
                                                <a href="{{ route('transactions.status', $i->id) }}?status=FAILED" class="btn btn-danger btn-sm"><i class="fa fa-times"></i></a>
                                            @endif
                                            <a href="{{ route('transactions.show', $i->id)}}" class="btn btn-info btn-sm">
                                                <i class="fa fa-eye"></i>
                                            </a>
                                            <a href="{{ route('transactions.edit', $i->id)}}" class="btn btn-pencil btn-sm">
                                                <i class="fa fa-pencil"></i>
                                            </a>
                                            <form action="{{ route('transactions.destroy', $i->id)}}" method="POST" class="d-inline">
                                                @csrf
                                                @method('delete')
                                                <button class="btn btn-danger btn-sm" onclick="return confirm('hapus data ini?')">
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
@endsection