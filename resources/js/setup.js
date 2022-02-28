$.ajaxSetup({
    headers:{
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

window.messages = function(errors){
    let ul = document.createElement('ul');
    let li = document.createElement('li');

    ul.appendChild(li);
    li.innerHTML += "Atenção aos campos abaixo!";

    let br = document.createElement('br');
    ul.appendChild(br);

    for (let [key, value] of Object.entries(errors)) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += value;
    }
    toastr.error(ul);
}