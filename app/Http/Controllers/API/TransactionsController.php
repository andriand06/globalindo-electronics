<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Transactions;
use Illuminate\Http\Request;

class TransactionsController extends Controller
{
    public function get(Request $request)
    {
     
        return ResponseFormatter::success(
            'Data Koleksi berhasil disimpan'
        );
    }
    public function store(Request $request)
    {
        $data = [
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
}
