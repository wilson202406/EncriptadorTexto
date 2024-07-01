# Challengue - Encriptador de Texto

## Descripción del Proyecto
Elaborar una aplicación que permita encriptar textos solo en minusculas y sin acentos.

La llave empleada para la encriptacion son:
```
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
```
#### Requisitos
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
##### Ejemplo:
```
"gato" => "gaitober"
"gaitobe" => "gato"
```
- La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
- El resultado debe ser mostrado en la pantalla.

#### Extras
- Debe tener un botón que permita copiar el texto encriptado / desencriptado para la sección de transferencia, o tambien tenga la funcionalidad de ctrl + c ó la opción de copiar "copiar" del menu de la aplicación.