
/*Hacer un programa de cine que permita generar un ticket con los datos necesarios y asimismo poder acceder a descuentos y ofertas especiales.
 Para poder acceder al cine, se debe tener en cuenta lo siguiente:*/
 
//1. Pedir el nombre del cliente, si el nombre no es un tipo string o es nulo, te debe pedir de nuevo que ingreses correctamente tu nombre.

var nombre = "";

while(true){
    nombre = prompt("Indique su nombre: ");

   if (nombre.trim() === ""){
    alert("Introduce un  nombre valido");
   }else if(!isNaN(nombre)) {
    this.alert("El nombre no puede ser un numero");
   } else {
    break; }
}
    
console.log(nombre);

//2. Pedir la edad del cliente, si la edad no es numérico es nulo, te debe pedir de nuevo que ingreses correctamente tu edad.

var edad = "";

while(true){
    edad = parseInt(prompt("Indique su edad: "));

   if (isNaN(edad)){
    alert("Introduce un  numero valido");
   } else {
    break; }
}
    
console.log(edad);
 
/*3. Pedir que ingreses el nombre de la película que esta en cartelera (ingresar la película tal cual como este escrito),
 para ello se debe mostrar un listado de las películas ('Spider Man', 'Superman', 'Dragon Ball Super', 'La era del hielo', 'xvideos').*/

 //Si el cliente ingresa una película que no esta en la cartelera o es nulo, te debe pedir de nuevo que ingreses correctamente la película en cartelera.
 

 var pelicula = "";

while(true){
    pelicula = prompt("Indique la pelicula que desea ver: ");

   if (pelicula.trim() === "") {
    alert("Introduce una pelicula valida");
   } else if (pelicula !== "Spider Man" && pelicula !== "Superman" && pelicula !== "Dragon Ball Super" && pelicula !== "La era del hielo" && pelicula !== "xvideos") {
    alert("Esa pelicula no esta en cartelera");
   } else {
    break; }
}
    
console.log(pelicula);




/*4. Si la edad del cliente es menor o igual a 17 y la película que escogió es "xvideos", deberá mostrarle un mensaje que no tiene permiso de acceder al cine.
 Caso contrario, se realizaralo siguiente:*/

 if(edad < 18 && pelicula === "xvideos"){
    alert("No puedes acceder al cine");
 }
 
//5. Si la edad del cliente es menor o igual a 17, tendrá un descuento del 50% y así mismo tendrá de regalo incluido: Galletas, Cheezetos, Hot Dog y Gaseosa.

if(edad <18){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode("¡¡TIENES UN DESCUENTO DEL 50%!! y además Regalo incluido: Galletas, Cheezetos, Hot Dog y Gaseosa");
    parrafo.appendChild(texto);
    document.querySelector(".descuentos").appendChild(parrafo);

//6. Si la edad del cliente es mayor o igual a 18 y menor o igual a 25, no tendrá descuento alguno pero si tendrá de regalo incluido: Cancha y Gaseosa.

}else if (edad >= 18 && edad <= 25){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode("Regalo incluido: Cancha y Gaseosa");
    parrafo.appendChild(texto);
    document.querySelector(".descuentos").appendChild(parrafo);

/*7. Si la edad del cliente es mayor o igual a 26 y menor o igual a 35, 
tendrá un descuento del 10% y así mismo tendrá de regalo incluido: Cancha, Papas Fritas y Gaseosa.*/

}else if (edad >= 26 && edad <= 35){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode("¡¡DESCUENTO DEL 10%!! y Regalo incluido: Cancha , patatas fritas y Gaseosa");
    parrafo.appendChild(texto);
    document.querySelector(".descuentos").appendChild(parrafo);

}else{
    var parrafo = document.createElement('p');
    var texto = document.createTextNode("¡¡DESCUENTO DEL 20%!! y Regalo incluido: Cancha , galletas y agua");
    parrafo.appendChild(texto);
    document.querySelector(".descuentos").appendChild(parrafo);
}
 
 
//8. Si la edad del cliente es mayor o igual a 36, tendrá un descuento del 20% y así mismo tendrá de regalo incluido: Cancha, Galletas y Agua.
 


/**Tener en cuenta que la lista de películas, comidas y bebidas deben estar en arreglos
*Utilizar funciones anónimas y/o callbacks
*Imprimir por consola y la web: el nombre del cliente, nombre de la película, lista de comidas y bebida a la que accede, y el total a pagar dependiendo a que descuento accede o no por la edad.*/

/*
function agregarMensaje(descuento, regalos) {
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(`${descuento} y Regalo incluido: ${regalos}`);
    parrafo.appendChild(texto);
    document.querySelector(".descuentos").appendChild(parrafo);
  }
  
  if (edad < 18 && pelicula === "xvideos") {
    alert("No puedes acceder al cine");
  } else if (edad < 18) {
    agregarMensaje("¡¡TIENES UN DESCUENTO DEL 50%!!", "Galletas, Cheezetos, Hot Dog y Gaseosa");
  } else if (edad >= 18 && edad <= 25) {
    agregarMensaje("Regalo incluido", "Cancha y Gaseosa");
  } else if (edad >= 26 && edad <= 35) {
    agregarMensaje("¡¡DESCUENTO DEL 10%!!", "Cancha, patatas fritas y Gaseosa");
  } else {
    agregarMensaje("¡¡DESCUENTO DEL 20%!!", "Cancha, galletas y agua");
  }
  

*/


































/*
Mi solución:

'use strict'
 
var movieList = ['Spider Man', 'Superman', 'Dragon Ball Super', 'La era del hielo', 'xvideos'];
var foodList = ['Cancha', 'Papas Fritas', 'Galletas', 'Cheezetos', 'Hot Dog'];
var drinkList = ['Gaseosa', 'Agua'];
var precio;
 
alert("Bienvenido a CinePlanet Perú");
var customerName = prompt("Ingrese su nombre");
while (!isNaN(customerName) || customerName == null) {
    alert("Por favor, ingrese su nombre");
    customerName = prompt("Ingrese su nombre");
}
 
var edad = parseInt(prompt("Ingrese su edad"));
while (isNaN(edad) || edad == null) {
    alert("Por favor, ingresa tu edad");
    edad = parseInt(prompt("Ingrese su edad"));
}
 
var carteleraMovie = prompt("¿Que pelicula deseas ver? \n" + movieList);
while (!isNaN(carteleraMovie) || carteleraMovie == null || !carteleraMovie == movieList.includes(carteleraMovie)) {
    alert("La pelicula que ingresaste no esta en cartelera, por favor escoge de la lista");
    carteleraMovie = prompt("¿Que pelicula deseas ver? \n" + movieList);
}
 
if (edad <= 17 && carteleraMovie == "xvideos") {
    document.write("<h2>Atras pendejo, aun no puedes jalarte el ganzo 7u7</h2>");
} else {
    calcularDesc(50,
        function (comida) {
            console.log("Comida de regalo: " + comida);
            document.write("<h4>Comida de regalo: " + comida + "</h4>");
        },
        function (bebida) {
            console.log("Bebida: " + bebida);
            document.write("<h4>Bebida de regalo: " + bebida + "</h4>");
        },
        function (total) {
            console.log("Total a pagar: " + total + " soles");
            document.write("<h4>Total a pagar: " + total + " soles </h4>");
        },
    );
}
 
function calcularDesc(precio, food, drink, desc) {
 
    console.log(":::TICKET:::")
    console.log("Cliente: " + customerName);
    console.log("Pelicula: " + carteleraMovie);
 
    document.write("<h3>:::TICKET:::</h3>");
    document.write("<h4>Cliente: " + customerName + "</h4>");
    document.write("<h4>Pelicula: " + carteleraMovie + "</h4>");
 
    if (edad <= 17) {
        var descu = precio * 0.5;
        var total = precio - descu;
        var findFood = [];
        foodList.forEach(
            f => {
                if (f.includes("Galletas") || f.includes("Cheezetos") || f.includes("Hot Dog")) {
                    findFood.push(f);
                }
            }
        );
        var findDrink = drinkList.findIndex(drink => drink == "Gaseosa");
        food(findFood);
        drink(drinkList[findDrink]);
        desc(total);
 
    } else if (edad >= 18 && edad <= 25) {
        total = precio;
        findFood = foodList.findIndex(food => food == "Cancha");
        findDrink = drinkList.findIndex(drink => drink == "Gaseosa");
 
        food(foodList[findFood]);
        drink(drinkList[findDrink]);
        desc(total);
 
    } else if (edad >= 26 && edad <= 35) {
        descu = precio * 0.1;
        total = precio - descu;
        var findFood = [];
        foodList.forEach(
            f => {
                if (f.includes("Cancha") || f.includes("Papas Fritas")) {
                    findFood.push(f);
                }
            }
        );
 
        findDrink = drinkList.findIndex(drink => drink == "Gaseosa");
        food(findFood);
        drink(drinkList[findDrink]);
        desc(total);
 
    } else {
        descu = precio * 0.2;
        total = precio - descu;
        var findFood = [];
        foodList.forEach(
            f => {
                if (f.includes("Cancha") || f.includes("Galletas")) {
                    findFood.push(f);
                }
            }
        );
        findDrink = drinkList.findIndex(drink => drink == "Gaseosa");
        food(findFood);
        drink(drinkList[findDrink]);
        desc(total);
    }
 
}  

*/