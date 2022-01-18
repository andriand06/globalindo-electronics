<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TransactionDetails;
use Illuminate\Support\Facades\DB;
class TransactionDetailsController extends Controller
{
    public function show($id)
    {
        
        $collections_id = TransactionDetails::with('collections')->findOrFail($id);
         //user information
         $email = '';
         if(session('email'))
         {
           $email = session('email');
         }
         //dd($email);
       $user = DB::table('users')->where('email',$email)->get();
        return view('pages.transactions.show')->with([
            'collections_id' => $collections_id,
            'user'=>$user,
        ]);
    }
}
