'use strict'

var formulario = document.querySelector("#formPeliculas");

formulario.addEventListener("submit", function(){

    var peliculas = document.querySelector("#pelicula").value;

   if(peliculas.length >= 1){
    localStorage.setItem("titulo" , peliculas);
    alert("Agregada") , location.reload(true);

    }else {
        alert("Ingrese una valida");
        return false;
    }


});


var ul = document.querySelector("#lista");

for(var i in localStorage){
  
    if(typeof localStorage[i] == "string"){
    var li = document.createElement("li");
    li.append(localStorage[i]);
    ul.append(li);

    }
}