'use strict'

function args_ok(error_msg)
{
  error_msg.msg = "Error";
  return false;
}

function psswd_validator(psswd, min_lowercase,
  max_lowercase, min_nums, min_special,
  special_chars)
{
  var error_msg = {msg: ""};
  if (!args_ok(error_msg)) {
    return error_msg.msg;
  }
  return "Todo Ok";
}

console.log(psswd_validator("1234", 2, 8, 1, 1, "%#_/"));