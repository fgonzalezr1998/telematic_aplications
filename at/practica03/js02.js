'use strict'

function conversor(n, output_units) {
  if (output_units == undefined || !Array.isArray(output_units)) {
    return "Error: Bad arguments!";
  }
  // Code this!

  return "ok";
}

let units = ["m", "cm", "in", "yd"];

console.log(conversor(2, units));
