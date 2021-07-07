'use strict'

import * as vjcanvas from "./vjcanvas.js";

let geometry = {
  x: null,
  y: null,
  width: null,
  height: null
};

const max_bars = 4;

function pint_bar(geo, color) {
  vjcanvas.rectangle(geo.x, geo.y, geo.width, geo.height, color);
}

function main() {
  let min_x = -40;
  let max_x = 960;
  let min_y = -500;
  // max_y no lo especificamos, la librería lo calcula automáticamente
  // para manterner las proporciones gráficas
  vjcanvas.set_coords(min_x, max_x, min_y);

  geometry.x = -40;
  geometry.y = -500;
  geometry.width = 1000;
  geometry.height = 125;
  let colours = ["green", "red", "blue", "yellow"];

  for(let i = 0; i < max_bars; i++) {
    pint_bar(geometry, colours[i]);
    geometry.y = geometry.y + geometry.height;
    geometry.width = 1000;
    geometry.height = 125;
  }
}

main();
