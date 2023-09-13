'use strict'

// CONDICIONALES 


var edad = 60;
var nombre = "Jony Miro";

if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " es mayor de edad.");

    if (edad == 33){
        console.log("Tienes la edad de Jesucristo");
    }

} else {
    console.log(nombre + " es menor de edad.");
}


//SWITCH

var imprime = "";

switch (edad){
    case  18 :
        imprime = "Acabas de cumplir la mayoria de edad"
    break;

    case  33 :
        imprime = "Tienes la edad de cristo"
    break;

    case  60 :
        imprime = "Cerquita de la jubilacion"
    break;

    default:
        imprime = "Debiste morir ya"
    break;


}

console.log(imprime);