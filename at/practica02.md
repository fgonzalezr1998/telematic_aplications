# Práctica 2

## 2.1.- Análisis de Selectores

### Ejemplo 1

* **Hola , css:** En el código, encontramos el selector *h1* que aplica reglas de estilo en cuanto al color (violet), alineación del texto (center) y tamaño de fuente (large).

* **Este párrafo no tiene nada de particular:** El selector *p* indica que el color de la fuente sea *blue*; la alineación, *left*; y el color del fondo, *yellow*.

* **Este parrafo tiene un formato terrible:** Este texto pertenece a la clase *feo*, por lo que después de la regla *p*, aplicará la regla definida en *.feo*. Por tanto, encontramos un color de texto *red*, una alineación *left*, y un background *pink*.

* **Este aparece con los colores invertidos:** Al ser un div de la clase *inverso*, aplican las reglas definidas en *.inverso*. POr lo tanto, color *white* y background black.

Por último, decir que mientras no se indique lo contrario, el background será *beige*, ya que así se indica en:

```
* {
  background-color: beige;
}

```

### Ejemplo 2

Las etiquetas *país*, *albacete, *ohio* y *estados-unidos* no existen.

* **1.El país España:** No se le aplica ninguna regla.
* **2.La comunidad Castilla la Mancha:** text-decoration: underline.
* **3.La ciudad de Toledo:** Se aplica la regla más específica que es *.españa .toledo*. Por lo tanto, color *red*. Además, como se encuentra dentro de la clase *castilla-la-mancha*, se subraya, tal como indica dicha regla.
* **4.La ciudad de Cuenca:** Sólo aplica la regla contenida en *castilla-la-mancha*. *.toledo, .cuenca*, no, ya que no se encuentra contenido en la clase *toledo*.
* **5.La ciudad Albacete:** Sólo aplica la regla contenida en *castilla-la-mancha*.
* **6.El país Estados Unidos:** No aplica ninguna regla.

### Ejemplo 3

* **Párrafo 1:** No aplica ninguna regla.
* **Párrafo 2, llamado alfa. Está dentro de un elemento div, pero no es un elemento div:** Aplican dos reglas: Las quee stán definidas en *#alfa* y las que están definidas en *p#alfa*.

## 2.2.- Uso de Selectores
