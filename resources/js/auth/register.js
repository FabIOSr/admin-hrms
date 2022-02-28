const { message } = require("laravel-mix/src/Log");

$('form[name="register"]').on('submit',function(event){
    event.preventDefault();
    const form = $(this);
    const action = form.attr('action');
    const registration = form.find('input[name="registration"]').val();
    const name = form.find('input[name="name"]').val();
    const email = form.find('input[name="email"]').val();
    const password = form.find('input[name="password"]').val();
    const password_confirmation = form.find('input[name="password_confirmation"]').val();

    $.post(action, {
        registration,
        name,
        email,
        password,
        password_confirmation
        }, function(response){

        if(response.errors){
            let errors = response.errors;
            messages(errors);
            return;
        }

        if(response.redirect){
            toastr.success(response.message);
            setTimeout(()=> { window.location.href = response.redirect },2000);
        }
    },'json');
})