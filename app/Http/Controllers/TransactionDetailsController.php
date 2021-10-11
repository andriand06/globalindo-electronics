<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TransactionDetails;
class TransactionDetailsController extends Controller
{
    public function show($id)
    {
        
        $collections_id = TransactionDetails::with('collections')->findOrFail($id);
        dd($collections_id);
        return view('pages.transactions.show')->with([
            'collections_id' => $collections_id]);
    }
}
