/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./resources/js/auth/register.js ***!
  \***************************************/
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

$('form[name="register"]').on('submit', function (event) {
  event.preventDefault();
  var form = $(this);
  var action = form.attr('action');
  var registration = form.find('input[name="registration"]').val();
  var name = form.find('input[name="name"]').val();
  var email = form.find('input[name="email"]').val();
  var password = form.find('input[name="password"]').val();
  var password_confirmation = form.find('input[name="password_confirmation"]').val();
  $.post(action, {
    registration: registration,
    name: name,
    email: email,
    password: password,
    password_confirmation: password_confirmation
  }, function (response) {
    if (response.errors) {
      var errors = response.errors;
      var err = [];

      for (var _i = 0, _Object$entries = Object.entries(errors); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        toastr.warning(value, {
          timeOut: 2500
        }); //err.push(value);
      }

      toastr.error(response.error, {
        timeOut: 5000
      });
      return;
    }

    if (response.redirect) {
      toastr.success(response.message);
      setTimeout(function () {
        window.location.href = response.redirect;
      }, 2000);
    }
  }, 'json');
});
/******/ })()
;