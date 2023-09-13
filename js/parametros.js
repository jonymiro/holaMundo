'use strict'

// parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...restoFrutas){

    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(restoFrutas);
}

listadoFrutas("Manzana", "Platano", "Sandia", "Melón");


var frutas = ["Manzana", "Platano"]
listadoFrutas(...frutas, "Sandia", "Melón");