'use strict'

/* programa que pide 2 numeros y que nos diga cual es el mayor el menor y si son iguales */

var edad1 = parseInt(prompt("Dime el primer número", 0));
var edad2 = parseInt(prompt("Dime el segundo número", 0));


while(edad1 <=0 || edad2 <=0 || isNaN(edad1,edad2) ){

     edad1 = parseInt(prompt("No es valido, dime el primer número", 0));
     edad2 = parseInt(prompt("No es valido, dime el segundo número", 0));

}

if(edad1 == edad2){
    alert("Las edades son iguales");

} else if (edad1 < edad2) {
    alert("La Edad 1 es menor");

} else if (edad1 > edad2) {
    alert("La Edad 2 es menor");


}else {
    alert("No es correcto");
}





