$('form[name="add_department').on('submit',function(event){
    event.preventDefault();
    const form = $(this);
    const action = form.attr('action');
    const department_name = form.find('input[name="department_name"]').val();
    const buttonSubmit = form.find('button[type="submit"]');

    buttonSubmit.text('Aguarde...');
    buttonSubmit.attr('disabled','disabled');

    $.post(action, form.serialize(), function(response){

        if(response.errors){
            let errors = response.errors;
            messages(errors);
            buttonSubmit.removeAttr('disabled').text('Enviar');
            return;
        }

        if(response.redirect){
            //$('#add_department').modal('hide');
            form.find('input[name="department_name"]').val("");
            buttonSubmit.text("Enviar").removeAttr('disabled');

            toastr.success(response.message);
            // setTimeout(()=> { 
            //     //$('#add_department').modal('hide')
            //     window.location.href = response.redirect
            //  },3000);
        }
    },'json');
})