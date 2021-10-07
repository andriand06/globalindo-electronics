<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use function PHPUnit\Framework\returnSelf;

class Transactions extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'address',
        'total',
        'status'
    ];
    public function collections()
    {
        return $this->hasMany(Collections::class,'collections_id');
    }
    public function items()
    {
        return $this->hasMany(CollectionItems::class,'items_id');
    }
}
