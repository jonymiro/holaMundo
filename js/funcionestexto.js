'use strict'

//Transformacion de texto

var numero = 555;
var texto1 = "Como estas";
var texto2 = " Seguro que bien, yo tambien eh";

var numeroString = numero.toString(); //convertir a string
var mayusculas = texto1.toUpperCase(); //mayusuclas

console.log(mayusculas);

var nombre = "Jony";

console.log(nombre.length); //contar elementos


var busqueda = texto1.indexOf("estas"); //encontrar la primera coindicendia 
var busqueda2 = texto1.match("estas");  // array informacion de la busqueda  de este texto
var busqueda3 = texto1.charAt(6); //saca un letra
var busqueda4 = texto2.includes("que"); // true si lo incluye 
var busqueda5 = texto2.replace("yo tambien eh", "ya lo sabia yo"); //reemplaza strings
console.log(busqueda5);