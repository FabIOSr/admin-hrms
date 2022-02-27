$('form[name="login').on('submit',function(event){
    event.preventDefault();
    const form = $(this);
    const action = form.attr('action');
    const username = form.find('input[name="username"]').val();
    const password = form.find('input[name="password"]').val();
    const buttonSubmit = form.find('button[type="submit"]');
    buttonSubmit.innerHTML = "Autenticando aguarde...";
    buttonSubmit.attr('disabled','disabled');
    

    $.post(action, {username, password}, function(response){        
        if(response.error){
            toastr.error(response.error);
            buttonSubmit.removeAttr('disabled');
            return;
        }
        if(response.redirect){
            buttonSubmit.innerText = "Autenticado";
            buttonSubmit.text = "Autenticado";
            toastr.success(response.message);
            setTimeout(() => {
                window.location.href = response.redirect;
            }, 2000);
        }
    },'json');
})