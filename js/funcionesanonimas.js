'use strict'

// Funciones anonimas y Callbacks

/* var pelicula = function (nombre){

    return "La pelicula es: " + nombre;
}

function sumame (numero1, numero2){

    var sumar = numero1 + numero2;
}
 */

function comida (plato1, plato2 , menu , menuCompleto){

    var platos = plato1  + plato2;

    menu(platos);
    menuCompleto(platos);
}

comida(" garbanzos", " costillas", function(dato){
    console.log("El menu del dia es: " + dato + " y una botella de agua.");
},
dato =>{
    console.log("El menu completo es: " + dato + " con una botella de agua y Tiramisú.");
});
