'use strict'

//Local storage

//Para saber si esta disponible en el navegador

if(typeof(Storage) !== "undefined"){
    console.log("LocalStorage Disponible");
} else{
    console.log("Incompatible con LocalStorage");
}


//Guardar dato en LocalStorage

localStorage.setItem("titulo", "Clase de LocalStorage");

//Recuperar elemento

localStorage.getItem("titulo");

//Guardar objetos

var usuario = {
    nombre: "Jony Miro",
    edad: 27,
    email: "jony0151@gmail.com"
}

localStorage.setItem("usuario", JSON.stringify(usuario));


//Recuperar objeto

var usuarioJSON = JSON.parse(localStorage.getItem("usuario"));

console.log(usuarioJSON);

document.querySelector("#caja").append("El nombre del usuario es: " + usuarioJSON.nombre + " y su email corresponde a (" + usuarioJSON.email + ")" );

localStorage.clear(); //Limpiar el localStorage