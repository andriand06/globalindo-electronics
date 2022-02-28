<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CollectionsController;
use App\Http\Controllers\CollectionItemsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TransactionDetailsController;
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
Route::get('/register',[RegisteredUserController::class,'create'])->name('register');
Route::get('/collections/{id}/items',[CollectionsController::class,'items'])->name('collections.items');
Route::get('/collectionitems/{id}/addquantity',[CollectionItemsController::class,'addquantity'])->name('collectionitems.addquantity');
Route::put('/collectionitems/{id}/updatequantity',[CollectionItemsController::class,'updatequantity'])->name('collectionitems.updatequantity');
Route::resource('collections',CollectionsController::class);
Route::resource('collectionitems',CollectionItemsController::class);
Route::resource('transactions',TransactionsController::class);

Route::get('/transactions/{id}/set-status',[TransactionsController::class, 'setStatus'])->name('transactions.status');
Route::get('/transactions/{id}/print',[TransactionsController::class,'print'])->name('transactions.print');
Route::get('/{path?}',function () {
    return view('main');
})->where('path','product|shop|signin|signup|checkout|payment');
Route::get('/{path?}/{subpath?}',function () {
    return view('main');
});
// Route::get('/{path?}/{subpath?}',function () {
//     return view('main');
// })->where('subpath','largehouseholdappliances|smallhouseholdappliances|itequipments|electricaltools|monitoringcontrolinstruments');

Route::get('/{path?}/{subpath?}/{subsubpath?}',function () {
    return view('main');
});

require __DIR__.'/auth.php';




