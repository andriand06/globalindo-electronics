<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Collections;
class CollectionsController extends Controller
{
    public function all(Request $request){
        $id = $request->input('id');
        $limit = $request->input('limit',6);
        $name = $request->input('name');
        $routename = $request->input('routename');
        $title =$request->input('title');

        if($id){
            $collection = Collections::with('items')->find($id);
            if($collection)
                return ResponseFormatter::success($collection, 'Data Koleksi berhasil diambil');
            else 
                return ResponseFormatter::error(null,'Data Koleksi tidak ada',404);
        }
        $collection = Collections::with('items');

        if($name)
        $collection->where('name','like','%' . $name . '%');

        if($routename)
        $collection->where('routename','like','%' . $routename . '%');

        if($title)
        $collection->where('title','like','%' . $title . '%');

        return ResponseFormatter::success(
            $collection->paginate($limit),
            'Data Koleksi berhasil diambil'
        );
    }
}
