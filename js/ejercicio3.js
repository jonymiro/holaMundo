'use strict'

/* hacer un programa que muestre todos los numeros entre dos numeros introducidos 
por el usuario */

var numero1 = parseInt(prompt("Introduce un número:"));
var numero2 = parseInt(prompt("Introduce un número:"));

    document.write("<h1> De " + numero1 + " a " + numero2 + " hay estos números: <h1>" )

for (var i =numero1; i < numero2; i++){

    document.write(i + "<br>");

    
}
