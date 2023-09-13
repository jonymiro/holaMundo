'use strict'


/*

1.Pida 6 numeros por pantalla y los meta en un array
2.Mostrar el array entero con todos sus elementos en el cuerpo de la pagina y en la consola.
3.Ordenar la matriz y mostrarlo
4.Invertir su orden u mostrarlo
5.Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por le usuario y que nos diga si esta en el array y si esta, su posicion de indice


*/


var matriz = [];

for(var i=0; i<=5; i++){
    //matriz[i] = parseInt(prompt("Introduce numero para crear un array:"));
    matriz.push(parseInt(prompt("Introduce los numeros: ")));
    document.write("<li>" + matriz[i] + "</li>");
    
    
}

console.log(matriz);

function comparar ( a, b ){ return a - b; };
console.log(matriz.sort(comparar));
console.log(matriz.reverse());

var indiceMatriz = matriz.length;
console.log(indiceMatriz);

var buscar = matriz.findIndex(busqueda => busqueda == 1);

if(buscar != -1) {
    document.write("encontrado");
    document.write("La posicion es: " + buscar);
} else {
    document.write("no encontrado");

}












