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
    public $incrementing = false;
    protected $fillable = [
        'id',
        'name',
        'email',
        'phone',
        'address',
        'total',
        'status'
    ];
    public function details()
    {
        return $this->hasMany(TransactionDetails::class,'transactions_id');
    }
}
