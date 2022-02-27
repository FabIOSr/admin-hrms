$('form[name="login').submit(function(event){
    event.preventDefault();
    let form = $(this);
    let action = form.attr('action');
    let username = form.find('input[name="username"]').val();
    let password = form.find('input[name="password"]').val();
    console.log(action, username,password);

    $.post(action, {username:username, password:password}, function(response){
        console.log(response);
        if(response.error){
            toastr.error(response.error);
            return;
        }
        if(response.redirect){
            toastr.success(response.message);
            setTimeout(() => {
                window.location.href = response.redirect;
            }, 2500);
        }
    },'json');
})