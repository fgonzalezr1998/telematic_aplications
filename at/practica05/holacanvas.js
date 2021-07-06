'use strict'

import * as vjcanvas from "./vjcanvas.js"

function main(){

    // Fijamos las coordenadas (lógicas)
    let min_x = -500;
    let max_x = 500
    let min_y = -100;
    // max_y no lo especificamos, la librería lo calcula automáticamente
    // para manterner las proporciones gráficas
    vjcanvas.set_coords(min_x, max_x, min_y);

    // Determinamos la posición y el tamaño de cada elemento
    // (círculos y rectángulos)
    let x, y, ancho, alto, diametro, color, color_borde, ancho_borde;

    //x = 100;
    //y = 300;
    diametro = 20;

    let cont = 0;
    for(let x = 0; x < 400; x += diametro) {
      for(let y = 0; y < 400; y += diametro) {
        if (++cont % 2 == 0) {
          color = "red";
        } else {
          color = "yellow";
        }
        vjcanvas.circle(x, y, diametro, color, color_borde, ancho_borde);
      }
    }
};


main();
