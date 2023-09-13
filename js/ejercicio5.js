'use strict'

//Ejercicio 5
//Mostrar todos los numeros divisores de un numero  introducido en un prompt

var numero = parseInt(prompt("Introduce un numero", 0)); 
var divisible = 0;

while (numero > divisible){

    divisible++;

    if ((numero % divisible) ==0){
        console.log(divisible + " es divisor de " + numero);
    }
       
}