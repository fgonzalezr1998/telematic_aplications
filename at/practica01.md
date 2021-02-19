# Práctica 1

> Name: Fernando González Ramos<br />
>login: fernando

## 1.1.- W3C Validator

### https://intelligentroboticslab.gsyc.urjc.es/

* The type attribute for the style element is not needed and should be omitted.

* The button role is unnecessary for element button.

  ```
  <button role="button" aria-label="Toggle search" class="style__ToggleSearchButton-sc-16ky0d3-7 kHvxVM">
  ```

  Significa que es innecesario asignar el rol *button* a una etiqueta *button*.

* Bad value 100% for attribute width on element img: Expected a digit but saw % instead.

  ```
  <img src="/static/intellrobotslab_team-ea7f2e0b5b2207d1805c13377a13e4a5.jpg" width="100%" alt=""/>
  ```

  No se puede configurar las dimensiones de la imagen en valores relativos directamente en el html. Para ello sería necesario definir una hoja de estilo CSS.
