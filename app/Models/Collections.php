<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Collections extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $fillable = [
        'name',
        'items',
        'routename',
        'title',
        'image',
        'size'
    ];

    public function items()
    {
        return $this->hasMany(CollectionItems::class, 'collections_id');
    }

    public function getImageAttribute($value)
    {
        return url('storage/' . $value);
    }
}
