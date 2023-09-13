'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDate();
var hour = fecha.getHours();

var texto=`

El año es: ${year} <br>
El mes es: ${month + 1} <br>
El dia es: ${day} <br>
La hora es: ${hour}

`

document.write(texto);

console.log(fecha);