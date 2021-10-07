<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class CollectionItems extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'collectionitems';

    protected $fillable = [
        'collections_id',
        'name',
        'price',
        'image',
        'quantity',
        'base_price',
        'is_default'
    ];

    public function collections()
    {
        return $this->belongsTo(Collections::class,'collections_id','id');
    }
    
    public function getImageAttribute($value)
    {
        return url('storage/' . $value);
    }
}
