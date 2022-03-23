<?php

namespace App\Http\Controllers\HR;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    
    public function index(){
        $allDepartments = Department::all();

        return view('HR.Departments.index', compact('allDepartments'));
    }
}
