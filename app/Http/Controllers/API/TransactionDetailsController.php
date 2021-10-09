<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\TransactionDetails;
use Illuminate\Http\Request;

class TransactionDetailsController extends Controller
{
    public function store(Request $request)
    {
        $data = [
            'transactions_id' => $request->input('transactions_id'),
            'collections_id' => implode(",",$request->input('collections_id')),
            'items_id' => implode(",",$request->input('items_id')),
            'quantity' => implode(",",$request->input('quantity'))
        ];

        $transactiondetails= TransactionDetails::create($data);

        if($transactiondetails)
       {
           return ResponseFormatter::success(
               'Data berhasil disimpan'
           );
       }
    }
}
