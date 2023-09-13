'use strict'

//Alerta

alert("Bienvenido");

//Confirmacion

var resultado = confirm("¿Deseas continuar?");

console.log(resultado);

//ingreso datos

var resultadoEdad = prompt("Que edad tienes?", 18);
var edadInt = parseInt(resultadoEdad);

console.log(typeof edadInt);