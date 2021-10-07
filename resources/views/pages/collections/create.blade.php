@extends('layouts.default')


@section('content')
    <div class="card">
        <div class="card-header">
            <strong>Tambah Koleksi</strong>
        </div>
        <div class="card-body card-block">
            <form action="{{ route('collections.store')}}" method="POST" enctype="multipart/form-data" >
                @csrf
                <div class="form-group">
                    <label for="name" class="form-control-label">Nama Koleksi</label>
                    <input type="text" class="form-control @error('name')
                        is-invalid
                    @enderror" name="name" required value="{{ old('name')}}">
                    @error('name')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="routename" class="form-control-label">Route Koleksi</label>
                    <input type="text" class="form-control @error('routename')
                        is-invalid
                    @enderror" name="routename" required value="{{ old('routename')}}">
                    @error('routename')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="title" class="form-control-label">Title Koleksi</label>
                    <input type="text" class="form-control @error('title')
                    is-invalid
                    @enderror" name="title" required value="{{ old('title')}}">
                    @error('title')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="image" class="form-control-label">Image Koleksi</label>
                    <input type="file" class="form-control @error('image')
                    is-invalid
                    @enderror" name="image" accept="image/*" required value="{{ old('image')}}">
                    @error('image')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="size" class="form-control-label">Size Koleksi</label>
                    <input type="text" class="form-control @error('size')
                    is-invalid
                    @enderror" name="size" value="{{ old('size')}}">
                    @error('size')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" type="submit">
                        Tambah Koleksi
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection