<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CollectionItems;

class CollectionItemsController extends Controller
{
    public function all(Request $request)
    {
        $collections_id = $request->input('collections_id');
        $limit = $request->input('limit');
        $price_from = $request->input('price_from');
        $price_to = $request->input('price_to');
        $base_price_from = $request->input('base_price_from');
        $base_price_to = $request->input('base_price_to');
        $quantity = $request->input('quantity');

        if($collections_id)
        {
            $items = CollectionItems::with('collections')->find($collections_id);
        }
    }
}
