"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Validation;

function Validation(values) {
  var errors = {};
  var first_name = /^[A-Za-z\s'-]+$/;
  var last_name = /^[A-Za-z\s'-]+$/;

  if (values.firstname === " ") {
    errors.firstname = "First name cannot be empty!";
  } else if (!first_name.test(values.firstname)) {
    errors.firstname = "Invalid value!";
  }

  if (values.lastname === " ") {
    errors.lastname = "Last name cannot be empty!";
  } else if (!last_name.test(values.lastname)) {
    errors.lastname = "Invalid value!";
  }

  return errors;
}