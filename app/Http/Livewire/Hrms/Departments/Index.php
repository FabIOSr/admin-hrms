<?php

namespace App\Http\Livewire\Hrms\Departments;

use Livewire\Component;
use App\Models\Department;

class Index extends Component
{
    public $dept_id;
    public string $dept_nome;

    public function openModalDelete($id){
        $this->dept_id = $id;
    }

    public function delete()
    {
        Department::find($this->dept_id)->delete();
        $this->emit('modalClose', '#delete_department');
    }

    public function render()
    {
        return view('livewire.hrms.departments.index', [
            'allDepartments' => Department::all(),
        ])->extends('layouts.app');
    }
}
