<?php

namespace App\Http\Controllers\HR;

use App\Models\Department;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class DepartmentController extends Controller
{
    
    public function index(){
        $allDepartments = Department::all();

        return view('HR.Departments.index', compact('allDepartments'));
    }

    public function store(Request $request){
        //dd($request->all());
        $validated = Validator::make($request->all(),[
            'department_name' => ['required','min:4','unique:departments,department_name'],
        ]);

        if($validated->fails()){
            return response()->json([
                'error' =>'Atenção aos erros de validação.',
                'errors' => $validated->errors(),
            ]);
        }

        Department::create([
            'department_name' => $request->department_name,
        ]);

        return response()->json([
            'redirect' => route('hr.departments'),
            'message' => "Departamento criado com sucesso!"
        ]);
    }
}
