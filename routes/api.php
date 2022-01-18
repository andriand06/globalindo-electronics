<?php

use App\Http\Controllers\API\CollectionsController;
use App\Http\Controllers\API\TransactionsController;
use App\Http\Controllers\API\TransactionDetailsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/collections',[CollectionsController::class,'all']);
Route::get('/transactions',[TransactionsController::class,'all']);
Route::get('/transactions/getstatus',[TransactionsController::class,'getStatus']);
Route::post('/transactions/store',[TransactionsController::class, 'store']);
Route::post('/transactions/setstatus',[TransactionsController::class, 'setStatus']);
Route::post('/transactiondetails/store',[TransactionDetailsController::class,'store']);

