<table class="table table-bordered">
    {{-- <tr>
        <th>Nama</th>
        <td>{{ $items->name }}</td>
    </tr>
    <tr>
        <th>Email</th>
        <td>{{ $items->email }}</td>
    </tr>
    <tr>
        <th>Nomor</th>
        <td>{{ $items->phone }}</td>
    </tr>
    <tr>
        <th>Alamat</th>
        <td>{{ $items->address }}</td>
    </tr>
    <tr>
        <th>Total Transaksi</th>
        <td>{{ $items->total }}</td>
    </tr>
    <tr>
        <th>Status Transaksi</th>
        <td>{{ $items->status }}</td>
    </tr> --}}
    <tr>
        <th>Pembelian Produk</th>
        <td>
            <table class="table-bordered w-100">
                <tr>
                    <th>Nama Koleksi</th>
                    <th>Nama Items</th>
                    <th>Tipe</th>
                    <th>Kuantitas</th>
                    <th>Harga</th>
                </tr>
                {{-- @foreach ($items->details as $detail)
                    <tr>
                        <td> {{ $detail->name }}</td>
                        <td> {{ $detail->name }}</td>
                        <td> {{ $detail->type }}</td>
                        <td> {{ $detail->quantity }}</td>
                        <td>{{ $detail->price }}</td>
                    </tr>
                @endforeach --}}
            </table>
        </td>
    </tr>
</table>
{{-- <div class="row">
    <div class="col-4">
        <a href="{{ route('transactions.status',$item->id)}}?status=SUCCESS" class="btn btn-success btn-block">
            <i class="fa fa-check"></i> Set Sukses
        </a>
    </div>
    <div class="col-4">
        <a href="{{ route('transactions.status',$item->id)}}?status=FAILED" class="btn btn-warning btn-block">
            <i class="fa fa-times"></i> Set Gagal
        </a>
    </div>
    <div class="col-4">
        <a href="{{ route('transactions.status',$item->id)}}?status=PENDING" class="btn btn-info btn-block">
            <i class="fa fa-spinner"></i> Set Pending
        </a>
    </div>
</div> --}}