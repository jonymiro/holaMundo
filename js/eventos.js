'use strict'

window.addEventListener("load", () => {

    // Aqui dentro de pude meter todo el codigo para que se ejecute cuando acabe de cargarse los elementos
    // En vez de ponerlo abajo en la parte del body el script

});

//Eventos del raton

/* CON EL EVENTO ONCLICK EN EL HTML
var boton = document.querySelector("#boton");

function cambiarColor(){
    if(boton.style.background == "red"){

    boton.style.background = "green";
    }else {

        boton.style.background = "red"
    }
    return true;
}

*/

var boton = document.querySelector("#boton");

boton.addEventListener("click", function(){

    alert("Este es el metodo bueno");
})


// mouseover cuando pase el raton por encima
// mouseout cuando salgas del boton

// focus cuando estas dentro de ese elemeto como por ejemplo un input
// blur cuadno estas fuera de el elemento 

// keydown cuando pulsas una tecla
// keypress cuando presionsas desde de hacer el keydown
// keyup cuando levantas el dedo de la tecla
