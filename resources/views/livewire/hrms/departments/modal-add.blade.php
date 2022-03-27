<div wire:ignore.self id="add_department" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Adicionar Departamento</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" wire:click="close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form wire:submit.prevent="save" autocomplete="off">
                    <div class="form-group">
                        <label>Nome departamento<span class="text-danger">*</span></label>
                        <input wire:model.defer="department_name" name="department_name" class="form-control @error('department_name') is-invalid @enderror" type="text" required>
                        @error('department_name')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="submit-section">
                        <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>