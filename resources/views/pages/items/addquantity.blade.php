<form action="{{route('collectionitems.updatequantity', $items->id)}}" method="POST">
    @method('PUT')
    @csrf
    <label for="quantity" class="form-control-label mb-3">Stok Ditambahkan</label>
    <input type="number" name="quantity" id="quantity" class="form-control mb-3">
    <button type="submit" class="btn btn-primary">Update</button>
</form>


