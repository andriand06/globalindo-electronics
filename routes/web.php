<?php

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

Route::get('/{path?}',function () {
    return view('main');
})->where('path','product|shop|login|signup|checkout');

Route::get('/{path?}',function () {
    return view('main');
});
Route::get('/{path?}/{subpath?}',function () {
    return view('main');
});

