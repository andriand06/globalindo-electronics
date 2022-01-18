    <?php
    $total = 0;
    ?>
    <div style="display:flex;align-items:center;justify-content:center;flex-direction:column;">
    <h3 style="display:flex;align-items:center;justify-content:center;">Laporan Transaksi {{$id}}</h3>
    <table class="table table-bordered w-100" style="">
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
                            <?php $total = $total + $detail[3]?>
                        </tr>
                    @endforeach
                </table>
            </td>
        </tr>
    </table>
</div>
<script>
    window.onload(window.print());
</script>