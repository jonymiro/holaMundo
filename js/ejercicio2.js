'use strict'

// ejercicio 2
// Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
// hasta introducir un numero negativo y ahi mostrar el resultado

// var numero1 = parseInt(prompt("Dime el primer número", 0));

var suma = 0;
var contador = 0;

do {
   var numero = parseInt(prompt("Introduce un numero hasta que metas un negativo", 0));
    
   if (isNaN(numero)){
    numero = 0;

   } else if (numero >= 0){
    suma = suma + numero;
    contador++;

   }

} while (numero >=0)

alert("La suma total es: " + suma);
alert("La media de la numeros introducidos es: " + (suma / contador) );


