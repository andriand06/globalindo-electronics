<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CollectionItemsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'collections_id' => 'required|integer|exists:collections,id',
            'name'=> 'required|max:255',
            'price' => 'required|integer',
            'image'=>'required|image',
            'quantity' => 'required|integer',
            'base_price' => 'required|integer',
            'is_default' => 'boolean'

        ];
    }
}
