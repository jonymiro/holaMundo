'use strict'

/* Ejercicio 4

Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario


*/

var numero1 = parseInt(prompt("Introduce un número:"));
var numero2 = parseInt(prompt("Introduce un número:"));



    document.write("<h1> Los numeros impares entre " + numero1 + " y " + numero2 + " son: <h1>" )

    while(numero1 < numero2){

        numero1++;

        if((numero1 % 2) !=0){
            console.log("El numero" + numero1 + " es impar");
        }

    }
