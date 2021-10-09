<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class TransactionDetails extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $incrementing = false;
    protected $table = 'transactiondetails';
    protected $fillable = [
        'transactions_id',
        'collections_id',
        'items_id',
        'quantity'
    ];

    public function transactions()
    {
        return $this->belongsTo(Transactions::class,'transactions_id','id');
    }
    public function collections()
    {
        return $this->belongsTo(Collections::class,'collections_id','id');
    }
    public function items()
    {
        return $this->belongsTo(CollectionItems::class,'items_id','id');
    }
}
