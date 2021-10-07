<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CollectionsRequest;
use App\Models\Collections;
use App\Models\CollectionItems;
class CollectionsController extends Controller
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
        $collections = Collections::All();

        return view('pages.collections.index')->with(['collections' => $collections]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('pages.collections.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CollectionsRequest $request)
    {
        $data = $request->all();
        $data['image'] = $request->file('image')->store('assets/collections','public');
        Collections::create($data);
        session()->flash('success','Berhasil Tambah Data!');
        return redirect()->route('collections.index');
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
    public function edit($id)
    {
        $collections = Collections::findOrFail($id);

        return view('pages.collections.edit')->with(['collections' => $collections]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CollectionsRequest $request, $id)
    {
        $data = $request->all();
        $data['image'] = $request->file('image')->store('assets/collections','public');
        $collections = Collections::findOrFail($id);
        $collections->update($data);
        session()->flash('success','Berhasil Update Data!');
        return redirect()->route('collections.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $collections = Collections::findOrFail($id);
        $collections->delete();
        CollectionItems::where('collections_id',$id)->delete();
        session()->flash('success','Berhasil Hapus Data');
        return redirect()->route('collections.index');
    }
    public function items($id)
    {
        $collections = Collections::findOrFail($id);
        $items = CollectionItems::where('collections_id',$id)->get();

        return view('pages.collections.items')->with([
            'collections' => $collections,
            'items' => $items
        ]);
    }
}
