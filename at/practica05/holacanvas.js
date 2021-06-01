'use strict'

import * as vjcanvas from './vjcanvas.js'

let diameter = 40;
let color = "red";
for (let x = 0; x <= 1000; x+= diameter) {
  for (let y = 0; y <= 600; y+= diameter) {
    console.log("Hola")
    vjcanvas.circle(x, y, diameter, color);
  }
}
