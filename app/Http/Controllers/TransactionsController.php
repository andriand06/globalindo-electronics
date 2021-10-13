<?php

namespace App\Http\Controllers;

use App\Models\CollectionItems;
use App\Models\TransactionDetails;
use Illuminate\Http\Request;
use App\Models\Transactions;

class TransactionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Transactions::all();
        return view('pages.transactions.index')->with(['data' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
        $data = Transactions::with('details.items')->findOrFail($id);
        $items = explode(',',$data->details[0]->items_id);
        $collection = explode(',',$data->details[0]->collections_id);
        $quantity = explode(',',$data->details[0]->quantity);
        $item = CollectionItems::whereIn('id',$items)->get();

        // dd($data->details[0]);
        return view('pages.transactions.show')->with([
            'item' => $item,
            'data' => $data,
            'quantity' => $quantity ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $item = Transactions::findOrFail($id);
        return view('pages.transactions.edit')->with(['item' => $item]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->all();
        $item = Transactions::findOrFail($id);
        $item->update($data);
        session()->flash('success','Berhasil Update Data!');
        return redirect()->route('transactions.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = Transactions::findOrFail($id);

        $data->delete();
        session()->flash('success','Berhasil Hapus Data');
        return redirect()->route('transactions.index');
    }
    public function setStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:PENDING,SUCCESS,FAILED'
        ]);

        $item = Transactions::findOrFail($id);
        //dd($item->transaction_status    );
        $item->status = $request->status;
        $item->save();

        return redirect()->route('transactions.index');
    }
}
