<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CollectionItemsRequest;
use App\Models\CollectionItems;
use App\Models\Collections;
use Illuminate\Support\Facades\DB;

class CollectionItemsController extends Controller
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
    public function index(Request $request)
    {
        $email = '';
        if(session('email'))
        {
          $email = session('email');
        }
        //dd($email);
        $user = DB::table('users')->where('email',$email)->get();
       
        $keyword = $request->input('keyword');
       
        if($keyword != null)
        {   

            $items = CollectionItems::with('collections')
                ->where('name','like',"%$keyword%")
                ->get();
        }
        else
        {
            $items = CollectionItems::with('collections')->get();
        }
        return view('pages.items.index')->with(['items'=>$items, 'user'=>$user]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $collections = Collections::All();
        //user information
        $email = '';
        if(session('email'))
        {
        $email = session('email');
        }
        $user = DB::table('users')->where('email',$email)->get();
        return view('pages.items.create')->with(['collections' => $collections,'user'=>$user]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CollectionItemsRequest $request)
    {
        $data= $request->all();
        $data['image'] = $request->file('image')->store('assets/collections','public');
        
        CollectionItems::create($data);
        session()->flash('success','Berhasil tambah data!');
        return redirect()->route('collectionitems.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id, Request $request)
    {
        if(session('role') == 'Owner')
        {
            $items = CollectionItems::findOrFail($id);
            $collections = Collections::All();
            $email = '';
            if(session('email'))
            {
            $email = session('email');
            }
            $user = DB::table('users')->where('email',$email)->get();
            return view('pages.items.edit')->with(['items'=>$items,'user'=>$user,'collections'=>$collections]);
        }
        else
        {
            return redirect()->route('collectionitems.index');
        }
      
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
        if(session('role') == 'Owner')
        {
            $data = $request->all();
            $data['image'] = $request->file('image')->store('assets/collections','public');
            $items = CollectionItems::findOrFail($id);
            $items->update($data);
            session()->flash('success','Berhasil Update Data!');
            return redirect()->route('collectionitems.index');
        }
        else
        {
            return redirect()->route('collectionitems.index');
        }
     
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $items = CollectionItems::findOrFail($id);
        $items->delete();
        session()->flash('success','Berhasil Hapus Data');
        return redirect()->route('collectionitems.index');
    }
    public function addquantity($id)
    {
      
        $items = CollectionItems::findOrFail($id);
        return view('pages.items.addquantity')->with(['items'=>$items]);
    }
    public function updatequantity(Request $request,$id)
    {
        $update = DB::table('collectionitems')
        ->where('id',$id)
        ->update([
            'quantity' => DB::raw('quantity +' .$request->input('quantity'))
        ]);
        return redirect()->route('collectionitems.index');
    }
}
