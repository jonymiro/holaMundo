'use strict'


window.addEventListener("load", function(){

    var formulario = document.querySelector("#formulario");
    var caja = document.querySelector("#texto");

var enviar = document.querySelector("#inputEnviar");
enviar.addEventListener("click", function(){

    var nombre = document.querySelector("#inputNombre").value;
    var apellidos = document.querySelector("#inputApellidos").value;
    var edad = parseInt(document.querySelector("#inputEdad").value);

    if(nombre.trim() == null || nombre.trim().length ==0){
        alert("Introduce un nombre valido");
       return false;
    }

    if(apellidos.trim() == null || apellidos.trim().length ==0){
        alert("Introduce unos apellidos validos");
       return false;
    }

    if(edad == null || edad <=0 || isNaN(edad)){
        alert("Edad no valida");
        return false;
       
    }


   
    console.log(nombre, apellidos, edad);

    var datos = [nombre, apellidos, edad];
    var indice;

    for (indice in datos){
        var parrafo = document.createElement("p");
        parrafo.append(datos[indice]);
        caja.append(parrafo);

    }

    
    
    


})


});