<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\HR\DepartmentController;
use App\Http\Livewire\Hrms\Departments\Index;

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

    // Departments
    // Route::get('hrms/departments',[DepartmentController::class, 'index'])->name('hr.departments');
    Route::get('hrms/departments', Index::class)->name('hr.departments');
    Route::post('hr/department/store',[DepartmentController::class, 'store'])->name('hr.department.store');
    Route::post('hr/department/update',[DepartmentController::class, 'update'])->name('hr.department.update');

    Route::get('/', function () {
        return view('welcome');
    })->name('welcome');
});


