<table class="table table-bordered">
    <tr>
        <th>Nama</th>
        <td>{{ $data->name }}</td>
      
    </tr>
    <tr>
        <th>Email</th>
        <td>{{ $data->email }}</td>
    </tr>
    <tr>
        <th>Nomor</th>
        <td>{{ $data->phone }}</td>
    </tr>
    <tr>
        <th>Alamat</th>
        <td>{{ $data->address }}</td>
    </tr>
    <tr>
        <th>Total Transaksi</th>
        <td>{{ $data->total }}</td>
    </tr>
    <tr>
        <th>Status Transaksi</th>
        <td>{{ $data->status }}</td>
    </tr>
    <tr>
        <th>Pembelian Produk</th>
        <td>
            <table class="table-bordered w-100">
                <tr>
                    <th>Nama Koleksi</th>
                    <th>Nama Items</th>
                    <th>Qty</th>
                    <th>Harga</th>
                </tr>
                @foreach ($detailArr as $detail)
                    <tr>
                        <td> {{ $detail[0]}}</td>
                         <td> {{ $detail[1]}}</td>
                       <td> {{ $detail[2] }}</td> 
                        <td>{{ $detail[3] }}</td>
                    </tr>
                @endforeach
            </table>
        </td>
    </tr>
</table>
@if ($user[0]->role == 'Owner')

<a href="{{route('transactions.print',$id)}}" class="btn btn-primary">Print</a>

@endif

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
