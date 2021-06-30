'use strict'

function is_string(psswd, error_msg)
{
  return typeof psswd == 'string';
}

function is_int(min_long, error_msg)
{
  return Number.isInteger(min_long);
}

function is_num(c) {
  return c.charCodeAt(0) >= '0'.charCodeAt(0) &&
    c.charCodeAt(0) <= '9'.charCodeAt(0);
}

function is_special(c, special_chars) {
  for (let i = 0; i < special_chars.length; i++) {
    if (c == special_chars.charAt(i)) {
      return true;
    }
  }
  return false;
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
  } else if (!is_int(min_nums)) {
    error_msg.msg = "Error: Minimum Numbers is not an integer";
    ok = false;
  } else if (!is_int(min_special)) {
    error_msg.msg = "Error: Minimum Number of Special Characters is not an integer";
    ok = false;
  } else if (!is_string(special_chars)) {
    error_msg.msg = "Error: Special Characters are not a string";
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

function min_uppercase_ok(psswd, min_uppercase, error_msg) {
  let lower = psswd.toLowerCase();
  console.log(lower)
  let uppercases = 0;
  for (let i = 0; i < psswd.length; i++) {
    if (psswd.charAt(i) != lower.charAt(i)) {
      uppercases++;
    }
  }

  if (uppercases < min_uppercase) {
    error_msg.msg = "Error: There are fewer upper case than required";
    return false;
  }
  return true;
}

function min_nums_ok(psswd, min_nums, error_msg) {
  let n_nums = 0;
  for (let i = 0; i < psswd.length; i++) {
    if (is_num(psswd.charAt(i))) {
      n_nums++;
    }
  }

  if (n_nums < min_nums) {
    error_msg.msg = "Error: There are fewer number than required"
    return false;
  }

  return true;
}

function special_chars_ok(psswd, min_special, special_chars, error_msg) {
  let specials = 0;
  for (let i = 0; i < psswd.length; i++) {
    if(is_special(psswd.charAt(i), special_chars)) {
      specials++;
    }
  }

  if (specials < min_special) {
    error_msg.msg = "Error: There are fewer special characters than required"
    return false;
  }
  return true;
}

function psswd_validator(psswd, min_long, min_lowercase,
  min_uppercase, min_nums, min_special, special_chars)
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
  if (ok && !min_uppercase_ok(psswd, min_uppercase, error_msg)) {
    ok = false
  }
  if (ok && !min_nums_ok(psswd, min_nums, error_msg)) {
    ok = false
  }
  if (ok && !special_chars_ok(psswd, min_special, special_chars, error_msg)) {
    ok = false
  }

  return error_msg.msg;
}

console.log(psswd_validator("1234e#eedo/oós_", 4, 8, 0, 4, 3, "%#_/"));
