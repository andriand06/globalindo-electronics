@extends('layouts.default')


@section('content')
    <div class="card">
        <div class="card-header">
            <strong>Ubah Transaksi</strong>
            <small>{{ $item->id }}</small>
        </div>
        <div class="card-body card-block">
            <form action="{{ route('transactions.update',$item->id )}}" method="POST" >
                @method('PUT')
                @csrf
                <div class="form-group">
                    <label for="name" class="form-control-label">Nama Pemesan</label>
                    <input type="text" class="form-control @error('name')
                        is-invalid
                    @enderror" name="name" value="{{ old('name') ? old('name') : $item->name}}">
                    @error('name')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="email" class="form-control-label">Email</label>
                    <input email="text" class="form-control @error('email')
                        is-invalid
                    @enderror" name="email" value="{{ old('email') ? old('email') : $item->email}}">
                    @error('email')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="phone" class="form-control-label">Nomor Telpon</label>
                    <input type="number" class="form-control @error('phone')
                        is-invalid
                    @enderror" name="phone" value="{{ old('phone') ? old('phone') : $item->phone }}">
                </div>
                <div class="form-group">
                    <label for="address" class="form-control-label">Alamat Pemesan</label>
                    <input type="text" class="form-control @error('address')
                        is-invalid
                    @enderror" name="address" value="{{ old('address') ? old('address') : $item->address }}">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" type="submit">
                        Ubah Transaksi
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection