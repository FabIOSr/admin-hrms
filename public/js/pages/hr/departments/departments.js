/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./resources/js/hr/departments.js ***!
  \****************************************/
$('form[name="add_department').on('submit', function (event) {
  event.preventDefault();
  var form = $(this);
  var action = form.attr('action');
  var department_name = form.find('input[name="department_name"]').val();
  var buttonSubmit = form.find('button[type="submit"]');
  buttonSubmit.text('Aguarde...');
  buttonSubmit.attr('disabled', 'disabled');
  $.post(action, form.serialize(), function (response) {
    if (response.errors) {
      var errors = response.errors;
      messages(errors);
      buttonSubmit.removeAttr('disabled').text('Enviar');
      return;
    }

    if (response.redirect) {
      //$('#add_department').modal('hide');
      form.find('input[name="department_name"]').val("");
      buttonSubmit.text("Enviar").removeAttr('disabled');
      toastr.success(response.message); // setTimeout(()=> { 
      //     //$('#add_department').modal('hide')
      //     window.location.href = response.redirect
      //  },3000);
    }
  }, 'json');
});
/******/ })()
;