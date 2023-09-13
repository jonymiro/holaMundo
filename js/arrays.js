'use strict'


var matriz = ["Juan", "Pedro", "Jony", 54, true];

var lenguajes = new Array("JS", "Java", "PHP");

console.log(matriz);

matriz.sort(); // ordenar alfabeticamnte
matriz.reverse(); //ordenar alreves


var longitud = matriz.length;
var elemento = parseInt(prompt("Que elemento del array quieres?", 0));

while(elemento > longitud){
     elemento = parseInt(prompt("Que elemento del array quieres?", 0));

}

console.log(matriz[elemento]);

//Recorrer un array

for(var i = 0; i<lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}

lenguajes.forEach((lenguajes, indice)=>{
    document.write("<li>"+ indice + "- " + lenguajes+"</li>");
});

//Multidimensionales

var asignaturas = ["Matematicas", "Idiomas", "Programacion"];
var materias = ["Algebra", "Ingles", "Javascript"];

var curso = [asignaturas, materias];

console.log(curso[0][2]);


// añadir elementos

asignaturas.push("Empresa");
console.log(asignaturas);

var elemento = "";

do {
    elemento = prompt("Introduce un elemento en el array </br>" + 
                        "Cuando desees terminar escribe 'stop'");
                asignaturas.push(elemento);

}while( elemento != "stop");

asignaturas.pop(); //Elimina el ultimo introducido

console.log(asignaturas);

//Convertir array en un string

var materiasString = materias.join(); 

console.log(materiasString);

//Conertir un string en un array

var texto = "FOL,Bases de datos,Programacion A";

var textoArray = texto.split(",");

console.log(textoArray);



// Busquedas 


var busqueda = matriz.findIndex(prueba => prueba =="Jony"); //Metodo .some() para poder comparar numeros, devuelve un boolean

console.log(busqueda);

