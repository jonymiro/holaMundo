'use strict'

var nombre = prompt("Introduce tu nombre:");
var apellidos = prompt("Introduce tus apellidos:");


var texto = `

<h1> Bienvenido ${nombre}</h1>
<h3> Tu nombre es: ${nombre}</h3>
<h3> Tus apellidos son: ${apellidos}</h3>

`;


document.write(texto);

if(nombre == "Hache"){
    document.write("<h3>Mitico hache</h3>");
}
