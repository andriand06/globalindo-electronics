@extends('layouts.default')

@section('content')
    <div class="card">
        <div class="card-header">
            <strong>Ubah Items</strong>
        </div>
        <div class="card-body card-block">
            <form action="{{ route('collectionitems.update',$items->id) }}" method="POST" enctype="multipart/form-data">
                @method('PUT')
                @csrf
                <div class="form-group">
                    <label for="collections_id" class="form-control-label">Nama Koleksi</label>
                    <select name="collections_id" required class="form-control @error('collections_id')
                    is-invalid
                    @enderror" >
                    @foreach ($collections as $collection)
                        <option value="{{ $collection->id }}"@if ($collection->id == $items->collections_id)
                        selected="selected"
                        @endif>{{ $collection->name}}</option>  
                    @endforeach
                    </select>
                    <label for="name" class="form-control-label">Nama Items</label>
                    <input type="text" class="form-control @error('name')
                        is-invalid
                    @enderror" name="name" required value="{{ $items->name }}">
                    @error('name')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="price" class="form-control-label">Price Items</label>
                    <input price="text" class="form-control @error('price')
                        is-invalid
                    @enderror" name="price" required value="{{ $items->price}}">
                    @error('price')
                        <div class="text-muted">{{ $message }}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="image" class="form-control-label">Image Items</label>
                    <input type="file" class="form-control @error('image')
                        is-invalid
                    @enderror" name="image" accept="image/*" required value="{{$items->image}}">
                </div>
                <div class="form-group">
                    <label for="quantity" class="form-control-label">Quantity Items</label>
                    <input type="number" class="form-control @error('quantity')
                        is-invalid
                    @enderror" name="quantity" required value="{{$items->quantity}}">
                </div>
                @if ($user[0]->role == 'Owner')
                    <div class="form-group">
                        <label for="base_price" class="form-control-label">Base Price Items</label>
                        <input type="number" class="form-control @error('base_price')
                            is-invalid
                        @enderror" name="base_price" required value="{{$items->base_price}}">
                    </div>
                @endif
               
                <div class="form-group">
                    <label for="is_default" class="form-control-label">Jadikan Default</label>
                    <br>
                    <label for="">
                        <input type="radio" required name="is_default" value="1" class="form-control @error('is_default')
                            is-invalid
                        @enderror" name="is_default" @if ($items->is_default == '1')
                            checked="checked"
                        @endif>
                        Ya
                    </label>
                    <label for="">
                        <input type="radio" name="is_default" value="0" class="form-control @error('is_default')
                            is-invalid
                        @enderror" name="is_default"@if ($items->is_default == '0')
                        checked="checked"
                    @endif>
                        Tidak
                    </label>

                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" type="submit">
                        Tambah Items
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection