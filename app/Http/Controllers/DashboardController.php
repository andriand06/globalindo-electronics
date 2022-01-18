<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transactions;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
          //ambil data transasction dimana transaction_status == SUCCESS lalu sum total transaksinya
          $income = Transactions::where('status','SUCCESS')->sum('total');
          //ambil seluruh data transaksi yang sudah terjadi
          $sales = Transactions::count();
          //ambil data transaksi urutkan berdasarkan id Descending ambil 5 data.
          $items = Transactions::orderBy('id','DESC')->take(5)->get();

          //user information
          $email = '';
          if(session('email'))
          {
            $email = session('email');
          }
          //dd($email);
        $user = DB::table('users')->where('email',$email)->get();

          $pie = [
              'PENDING' => Transactions::where('status','PENDING')->count(),
              'FAILED' => Transactions::where('status','FAILED')->count(),
              'SUCCESS' => Transactions::where('status','SUCCESS')->count()
          ];  
          return view('dashboard')->with([
              'income' => $income,
              'sales' => $sales,
              'items' => $items,  
              'pie' => $pie,
              'user' => $user
          ]);
    }
}
