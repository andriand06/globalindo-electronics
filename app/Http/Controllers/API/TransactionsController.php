<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Transactions;
use Illuminate\Http\Request;

class TransactionsController extends Controller
{
    public function all(Request $request)
    {
        $id = $request->input('id');
        if($id)
        {
            $transactions = Transactions::findOrFail($id);
            if($transactions)
            {
                return ResponseFormatter::success(
                    $transactions,'Data Transaksi berhasil diambil'
                );
            }
            else
            {
                return ResponseFormatter::error(null,'Data Transaksi tidak ada',404);
            }
        }
       
    }
    public function store(Request $request)
    {
        $data = [
            'id' => $request->input('transactionId'),
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'address' => $request->input('address'),
            'total' => $request->input('total'),
            'status' => $request->input('status'),
        ];
       $transactions = Transactions::create($data);

       if($transactions)
       {
           return ResponseFormatter::success(
               'Data berhasil disimpan'
           );
       }
    }
    public function getStatus(Request $request)
    {
        $id = $request->input('id');
        if($id)
        {
            $transactions = Transactions::findOrFail($id);
            if($transactions)
            {
                return ResponseFormatter::success(
                    $transactions->status,'Status Transaksi berhasil diambil'
                );
            }
            else
            {
                return ResponseFormatter::error(null,'Data Transaksi tidak ada',404);
            }
        }
    }
    public function setStatus(Request $request)
    {
        $id = $request->input('id');
        $status = $request->input('status');
        if($id && $status)
        {
            $transaction = Transactions::findOrFail($id);
            if($transaction)
            {
                $transaction->status = $status;
                $transaction->save();
                return ResponseFormatter::success(
                    $transaction->status,'Status Transaksi berhasil diubah'
                );
            }
            else{
                return ResponseFormatter::error(null,'Data Transaksi tidak ada',404);
            }
        }
    }
}
