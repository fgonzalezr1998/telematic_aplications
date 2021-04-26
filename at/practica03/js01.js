'use strict'

const MetersPerInch = 0.0254;
const MetersPerYard = 0.9144;

function m_to_cm(n) {
  return n * 100;
}

function m_to_inch(n) {
  return n / MetersPerInch
}

function m_to_yards(n) {
  return n / MetersPerYard;
}

// Meters to cm:

console.log(m_to_cm(3));

// Meters to inches:

console.log(m_to_inch(1));

// Meters to yards:

console.log(m_to_yards(1));
