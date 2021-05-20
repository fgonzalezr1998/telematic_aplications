'use strict'

function is_string(psswd, error_msg)
{
  return typeof psswd == 'string';
}

function is_int(min_long, error_msg)
{
  return Number.isInteger(min_long);
}

function args_ok(psswd, min_long, min_lowercase,
  max_lowercase, min_nums, min_special,
  special_chars, error_msg)
{
  var ok = true;
  if (!is_string(psswd)) {
    error_msg.msg = "Error: The password is not a string";
    ok = false;
  } else if (!is_int(min_long)) {
    error_msg.msg = "Error: Minimum password length is not an integer";
    ok = false;
  } else if (!is_int(min_lowercase)) {
    error_msg.msg = "Error: Minimum Number of lowercase is not an integer";
    ok = false;
  }

  return ok;
}

function long_is_ok(psswd, min_long, error_msg)
{
  if (psswd.length >= min_long) {
    return true;
  }
  error_msg.msg = "Error: Password length is incorrect";
  return false;
}

function psswd_validator(psswd, min_long, min_lowercase,
  max_lowercase, min_nums, min_special,
  special_chars)
{
  var error_msg = {msg: ""};

  if (!args_ok(psswd, min_long, min_lowercase,
    max_lowercase, min_nums, min_special,
    special_chars, error_msg))
  {
    return error_msg.msg;
  }

  if(long_is_ok(psswd, min_long, error_msg)) {
    return "ok";
  }

  return error_msg.msg;
}

console.log(psswd_validator("1234", 4, 8, 1, 1, "%#_/"));
