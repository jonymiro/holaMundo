'use strict'

// BOm Browser objetc model

console.log(window.innerHeight);
console.log(screen.height);

function redirect(url){

    window.location.href  = url;
}

function abrirVentana(url){
    window.open(url);               // Puedes abrir como un pop-up si le pasas a .open los parametros de altura y anchura
}