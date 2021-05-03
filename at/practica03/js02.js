'use strict'

const InchesPerMeter = 39.3701;
const YardsPerMeter = 1.09361;

function m2cm(n) {
  return n * 100;
}

function m2in(n) {
  return n * InchesPerMeter;
}

function m2yd(n) {
  return n * YardsPerMeter;
}

function conversor(n, out_unit) {
  let res;

  if (out_unit == undefined) {
    return "Error: Bad arguments!";
  }

  switch (out_unit) {
    case "cm":
      res = m2cm(n).toString();
      break;
    case "in":
      res = m2in(n).toString();
      break;
    case "yd":
      res = m2yd(n).toString();
      break;
    case "m":
      res = n.toString();
      break;
    default:
      res = "Error: Bad output unit!";
  }

  return res;
}

let units = ["m", "cm", "in", "yd"];

console.log(conversor(2, ""));
