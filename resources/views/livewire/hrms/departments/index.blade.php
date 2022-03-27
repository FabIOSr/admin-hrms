<div>
    <x-page-header>
        @slot('title')
        Departments
        @endslot
        <a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_department"><i class="fa fa-plus"></i> Add Department</a>
    </x-page-header>

    <div class="row"> 
        <div class="col-md-12">
            @includeIf('livewire.hrms.departments.table')
        </div>
    </div>

    <!-- Add Department Modal -->
    @includeIf('livewire.hrms.departments.modal-add')
    <!-- /Add Department Modal -->

    <!-- Edit Department Modal -->
    @includeIf('livewire.hrms.departments.modal-edit')
    <!-- /Edit Department Modal -->

    <!-- Delete Department Modal -->
    @includeIf('livewire.hrms.departments.modal-delete')
    <!-- /Delete Department Modal -->

</div>
@includeIf('livewire.hrms.departments.script-local')
@includeIf('livewire.hrms.departments.style-local')