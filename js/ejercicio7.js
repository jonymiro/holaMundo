'use strict'

//ejercicio 7
/* 
Tabla de multiplicar de un numero introducido por pantalla

*/

var numero = parseInt(prompt("Introduce un número: "));

document.write("<h1>La tabla del " + numero + " es:<h1>");

for (var contador = 1; contador <=10; contador++){

    document.write(numero + " x " + contador + " = " + (numero * contador) + "<br>");
}