<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Auth\AuthController;

Route::group([
    'middleware' => ['guest']
], function(){
    Route::view('login', 'auth.login')->name('loginForm');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::view('register', 'auth.register')->name('registerForm');
    Route::post('/register', [AuthController::class,'register'])->name('register');
});

Route::group([
    'middleware' => ['auth']
],function(){
    Route::post('logout',[AuthController::class, 'logout'])->name('logout')->middleware('auth');

    Route::get('/', function () {
        return view('welcome');
    })->name('welcome');
});


