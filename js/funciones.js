'use strict'

//funciones



function calculadora (numero1, numero2, mostrar = false){

    if (mostrar == false){

    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));

    } else {

        document.write("Suma: " + (numero1 + numero2) + "<br/>");
        document.write("Resta: " + (numero1 - numero2) + "<br/>");
        document.write("Multiplicacion: " + (numero1 * numero2) + "<br/>");
        document.write("Division: " + (numero1 / numero2) + "<br/>");
    }

    return "hola soy la calculadora";
    
}

calculadora(5,6);
calculadora(6,78, true);

