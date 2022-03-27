<div id="edit_department" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Department</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form name="edit_department" action="{{ route('hr.department.update') }}" autocomplete="off">
                    <div class="form-group">
                        <label>Department Name <span class="text-danger">*</span></label>
                        <input name="department_name" class="form-control" type="text">
                    </div>
                    <div class="submit-section">
                        <button class="btn btn-primary submit-btn">{{ __('message.btn.update') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>