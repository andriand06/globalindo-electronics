@extends('layouts.default')


@section('content')
    <div class="card">
        <div class="card-header">
            <strong>Ubah Koleksi</strong>
        </div>
        <div class="card-body card-block">
            <form action="{{ route('collections.update',$collections->id)}}" method="POST" enctype="multipart/form-data">
                @method('PUT')
                @csrf
                <div class="form-group">
                    <label for="name" class="form-control-label">Nama Koleksi</label>
                    <input type="text" class="form-control @error('name')
                        is-invalid
                    @enderror" name="name" value="{{ old('name') ? old('name') : $collections->name}}">
                    @error('name')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="route" class="form-control-label">Route Koleksi</label>
                    <input type="text" class="form-control @error('route')
                        is-invalid
                    @enderror" name="routename" value="{{ old('routename') ? old('routename') : $collections->routename}}">
                    @error('routename')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="title" class="form-control-label">Title Koleksi</label>
                    <input type="text" class="form-control @error('title')
                    is-invalid
                    @enderror" name="title" value="{{ old('title') ? old('title') : $collections->title}}">
                    @error('title')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="image" class="form-control-label">Image Koleksi</label>
                    <input type="file" accept="image/*" class="form-control @error('image')
                    is-invalid
                    @enderror" name="image" value="{{ old('image') ? old('image') : $collections->image}}">
                    @error('image')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="size" class="form-control-label">Size Koleksi</label>
                    <input type="text" class="form-control @error('size')
                    is-invalid
                    @enderror" name="size" value="{{ old('size') ? old('size') : $collections->size}}">
                    @error('size')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
        
                <div class="form-group">
                    <button class="btn btn-primary btn-block" type="submit">
                        Ubah Koleksi
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection