'use strict'

//Ejercicio 8
// Una calculadora, pida dos numeros por pantalla que si metemos mal numero nos pide que lo volvamos a introducir
//Que nos muestre en el body en una alerta y por la consola el resultado de sumar restar multiplicar y dividir esas dos cifras

var numero1 = parseInt(prompt("Introduzca el primer número:" , 0));
var numero2 = parseInt(prompt("Introduzca el segundo número:" , 0));


while (isNaN(numero1, numero2)){

    numero1 = parseInt(prompt("Introduzca el primer número:" , 0));
    numero2 = parseInt(prompt("Introduzca el segundo número:" , 0));

    
}

    document.write("<h1>Este es el resultado<h1><br/>" + 
                    "Suma: " + numero1 + " + " + numero2 + " = " + (numero1 + numero2) + "<br/>" +
                    "Resta: " + numero1 + " - " + numero2 + " = " + (numero1 - numero2) + "<br/>" +
                    "Multiplicación: " + numero1 + " x " + numero2 + " = " + (numero1 * numero2) + "<br/>" +
                    "División: " + numero1 + " / " + numero2 + " = " + (numero1 / numero2) + "<br/>");

    alert( "Suma: " + numero1 + " + " + numero2 + " = " + (numero1 + numero2));
    alert("Resta: " + numero1 + " - " + numero2 + " = " + (numero1 - numero2));
    alert("Multiplicación: " + numero1 + " x " + numero2 + " = " + (numero1 * numero2));
    alert("División: " + numero1 + " / " + numero2 + " = " + (numero1 / numero2));

    console.log("Suma: " + numero1 + " + " + numero2 + " = " + (numero1 + numero2));
    console.log("Resta: " + numero1 + " - " + numero2 + " = " + (numero1 - numero2));
    console.log("Multiplicación: " + numero1 + " x " + numero2 + " = " + (numero1 * numero2));
    console.log("División: " + numero1 + " / " + numero2 + " = " + (numero1 / numero2));

    // En caso de que queramos hacerlo en una unica funcion podemos utilizar \n en vez de <br/> en el caso de alert y console.