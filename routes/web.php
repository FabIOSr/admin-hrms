<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Auth\AuthController;

Route::view('login', 'auth.login')->middleware('guest')->name('loginForm');
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::view('register', 'auth.register')->middleware('guest')->name('registerForm');

Route::get('/', function () {
    return view('welcome');
});

