<?php

namespace App\Http\Livewire\Hrms\Departments;

use Livewire\Component;
use App\Models\Department;

class Index extends Component
{
    public $dept_id;
    public $department_name;

    public function save(){
        $data = $this->validate([
            'department_name' => ['required','min:3','unique:departments,department_name','string'],
        ]);

        Department::create($data);
        $this->emit('modalClose','#add_department');
        $this->emit('success', 'Departamento adicionado');
        $this->close();

    }

    public function openModalDelete($id){
        $this->dept_id = $id;
    }

    public function close()
    {
        $this->reset();
        $this->resetErrorBag();
    }

    public function delete()
    {
        Department::find($this->dept_id)->delete();
        $this->emit('modalClose', '#delete_department');
        $this->emit('success', 'Departamento removido');
    }

    public function render()
    {
        return view('livewire.hrms.departments.index', [
            'allDepartments' => Department::all(),
        ])->extends('layouts.app');
    }
}
