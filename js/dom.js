'use strict'

//Document object model

// https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll


var cambiaColor = prompt("Que color deseas?");

//var caja = document.getElementById("micaja");
  var caja = document.querySelector("#micaja");
caja.innerHTML;
caja.style.background = cambiaColor;

console.log(caja); 


/*
// Conseguir elementos por su etiqueta
var losDivs = document.getElementsByTagName('div');

// Buscamos en nuestro html todos los divs
 
 
// Muestras por la consola el array de divs que has conseguido
console.log(losDivs);
 
var valor;
 
// For para recorrer todosLosDivs(es un array) en cada iteración o vuelta que da el bucle crea la variable valor, que representa el div que está sacando del array en ese momento
for (valor in losDivs) {
 
    // Compruebas si el div que estas recorriendo en ese momento, su contenido, es un string
    if (typeof losDivs[valor].textContent == 'string') {
 
         // Creas un parrafo de HTML mediante Javascript y le metes el texto del div
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(losDivs[valor].textContent);
        parrafo.append(texto);
 
// Agregas el parrafo dentro de la seccion con el id #miseccion
        document.querySelector("#miseccion").appendChild(parrafo);
    }
 
}

*/

var rojos = document.getElementsByClassName("rojo");
var amarillos = document.getElementsByClassName("amarillo");
amarillos[0].style.color = "yellow";

var div;
for(div in rojos){
    
    if(rojos[div].className =="rojo"){
    
        rojos[div].style.color = "red";

    }
}

