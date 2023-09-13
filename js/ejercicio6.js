'use strict'

//ejercicio 6
// Si un numero es par o impar
// 1 ventana prompt - 2 si no es valido que lo vuelva a pedir 

var numero = parseInt(prompt("Introduce un número:"), 0);

if ((numero % 2) ==0){
    alert("Es un numero par");
    
} else if ((numero % 2)==1){
    alert("Es un numero impar");

} else {
    numero = parseInt(prompt("Introduce un número valido:"), 0);
}