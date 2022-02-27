/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./resources/js/auth/login.js ***!
  \************************************/
$('form[name="login').submit(function (event) {
  event.preventDefault();
  var form = $(this);
  var action = form.attr('action');
  var username = form.find('input[name="username"]').val();
  var password = form.find('input[name="password"]').val();
  console.log(action, username, password);
  $.post(action, {
    username: username,
    password: password
  }, function (response) {
    console.log(response);

    if (response.error) {
      toastr.error(response.error);
      return;
    }

    if (response.redirect) {
      toastr.success(response.message);
      setTimeout(function () {
        window.location.href = response.redirect;
      }, 2500);
    }
  }, 'json');
});
/******/ })()
;