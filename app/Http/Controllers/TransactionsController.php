<?php

namespace App\Http\Controllers;

use App\Models\CollectionItems;
use App\Models\Collections;
use App\Models\TransactionDetails;
use Illuminate\Http\Request;
use App\Models\Transactions;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
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
         //user information
         $email = '';
         if(session('email'))
         {
           $email = session('email');
         }
         //dd($email);
       $user = DB::table('users')->where('email',$email)->get();
        return view('pages.transactions.index')->with(['data' => $data,'user'=>$user]);
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
        $details = DB::table('transactiondetails')->where('transactions_id',$id)->get();
        //get transaction details data
        $quantityArr = explode(",",$details[0]->quantity);
        $collectionArr = explode(",",$details[0]->collections_id);
        $itemArr = explode(",",$details[0]->items_id);
        $detailslength = count($quantityArr);
        $detailArr = array();
        for($i = 0;$i<$detailslength;$i++)
        {
            $loopCollections = Collections::where('id',$collectionArr[$i])->get();
            $loopItems = CollectionItems::where('id',$itemArr[$i])->get();
            array_push($detailArr,[$loopCollections[0]->name,$loopItems[0]->name,$quantityArr[$i],$loopItems[0]->price]);
        }
        
         //user information
         $email = '';
         $role = '';
         if(session('email'))
         {
           $email = session('email');
         }
         if(session('role'))
         {
             $role = session('role');
         }
         
       $user = DB::table('users')->where('email',$email)->get();
   
        return view('pages.transactions.show')->with([
            'item' => $item,
            'data' => $data,
            'quantity' => $quantity,
            'user' => $user,
            'detailArr'=>$detailArr,
            'id'=>$id
        ]);
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
         //user information
         $email = '';
         if(session('email'))
         {
           $email = session('email');
         }
         //dd($email);
       $user = DB::table('users')->where('email',$email)->get();
        return view('pages.transactions.edit')->with(['item' => $item,'user'=>$user]);
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
        $item->status = $request->status;
        $item->save();
        
        $details = DB::table('transactiondetails')->where('transactions_id',$id)->get();
        //get transaction details data
        $quantityArr = explode(",",$details[0]->quantity);
        $collectionArr = explode(",",$details[0]->collections_id);
        $itemArr = explode(",",$details[0]->items_id);
        $detailslength = count($quantityArr);
        
        for($i = 0;$i<$detailslength;$i++)
        {
            $loopCollections = Collections::where('id',$collectionArr[$i])->get();
            $loopItems = CollectionItems::where('id',$itemArr[$i])->get();
            $newQuantity = $loopItems[0]->quantity - $quantityArr[$i];
            //trigger quantity based on the quantity of the transaction
            $update = DB::table('collectionitems')
                ->where('id',$loopItems[0]->id)
                ->update([
                    'quantity' => DB::raw('quantity - ' . $quantityArr[$i])
                ]);
          
        }
        return redirect()->route('transactions.index');
    }
    public function print($id)
    {
        $data = Transactions::with('details.items')->findOrFail($id);
        $details = DB::table('transactiondetails')->where('transactions_id',$id)->get();
        //get transaction details data
        $quantityArr = explode(",",$details[0]->quantity);
        $collectionArr = explode(",",$details[0]->collections_id);
        $itemArr = explode(",",$details[0]->items_id);
        $detailslength = count($quantityArr);
        $detailArr = array();
        for($i = 0;$i<$detailslength;$i++)
        {
            $loopCollections = Collections::where('id',$collectionArr[$i])->get();
            $loopItems = CollectionItems::where('id',$itemArr[$i])->get();
            array_push($detailArr,[$loopCollections[0]->name,$loopItems[0]->name,$quantityArr[$i],$loopItems[0]->price]);
        }
        
        return view('pages.transactions.print')->with(['data'=>$data,'id'=>$id,'detailArr'=>$detailArr]);
    }
}
