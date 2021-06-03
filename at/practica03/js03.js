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
  min_uppercase, min_nums, min_special,
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
  } else if (!is_int(min_uppercase)) {
    error_msg.msg = "Error: Minimum Number of Uppercase is not an integer";
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

function min_lowercase_ok(psswd, min_lowercase, error_msg) {
  let upper = psswd.toUpperCase();
  console.log(upper)
  let lowercases = 0;
  for (let i = 0; i < psswd.length; i++) {
    if (psswd.charAt(i) != upper.charAt(i)) {
      lowercases++;
    }
  }

  if (lowercases < min_lowercase) {
    error_msg.msg = "Error: There are fewer lower case than required";
    return false;
  }
  return true;
}

function psswd_validator(psswd, min_long, min_lowercase,
  min_uppercase, min_nums, min_special,
  special_chars)
{
  let error_msg = {msg: ""};
  let ok = true;

  if (!args_ok(psswd, min_long, min_lowercase,
    min_uppercase, min_nums, min_special,
    special_chars, error_msg))
  {
    return error_msg.msg;
  }

  if (ok && !long_is_ok(psswd, min_long, error_msg)) {
    ok = false;
  }
  if (ok && !min_lowercase_ok(psswd, min_lowercase, error_msg)) {
    ok = false
  }

  return error_msg.msg;
}

console.log(psswd_validator("1234eeedooós", 4, 8, 1, 1, "%#_/"));
