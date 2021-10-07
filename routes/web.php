<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CollectionsController;
use App\Http\Controllers\CollectionItemsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TransactionsController;
use App\Models\Transactions;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('main');
}); 
Route::get('/dashboard',[DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');
Route::get('/login',[AuthenticatedSessionController::class,'create'])->name('login');
Route::get('/checkoutdetails',[CheckoutController::class,'index'])->name('checkoutdetails');
Route::get('/collections/{id}/items',[CollectionsController::class,'items'])->name('collections.items');
Route::resource('collections',CollectionsController::class);
Route::resource('collectionitems',CollectionItemsController::class);
Route::resource('transactions',TransactionsController::class);
Route::get('/transactions/{id}/set-status',[TransactionsController::class, 'setStatus'])->name('transactions.status');
Route::get('/{path?}',function () {
    return view('main');
})->where('path','product|shop|signin|signup|checkout');
Route::get('/{path?}/{subpath?}',function () {
    return view('main');
})->where('subpath','largehouseholdappliances|smallhouseholdappliances|itequipments|electricaltools|monitoringcontrolinstruments');


require __DIR__.'/auth.php';




