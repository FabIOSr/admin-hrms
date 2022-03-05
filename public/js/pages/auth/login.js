/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/auth/login.js ***!
  \************************************/
$('form[name="login').on('submit', function (event) {
  event.preventDefault();
  var form = $(this);
  var action = form.attr('action');
  var username = form.find('input[name="username"]').val();
  var password = form.find('input[name="password"]').val();
  var buttonSubmit = form.find('button[type="submit"]');
  buttonSubmit.text("Autenticando aguarde...");
  buttonSubmit.attr('disabled', 'disabled');
  $.post(action, {
    username: username,
    password: password
  }, function (response) {
    if (response.error) {
      toastr.error(response.error);
      buttonSubmit.removeAttr('disabled');
      buttonSubmit.text("Entrar");
      return;
    }

    if (response.redirect) {
      buttonSubmit.text("Autenticado");
      toastr.success(response.message);
      setTimeout(function () {
        window.location.href = response.redirect;
      }, 2000);
    }
  }, 'json');
});
/******/ })()
;