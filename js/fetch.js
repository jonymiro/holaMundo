'use strict'

//Fetch (ajax) y peticiones a servicios / api rest
var divUsuarios = document.querySelector("#usuarios");
var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then(data => {
    usuarios=data;
    console.log(usuarios);

    usuarios.forEach((data, i) => {
        var nombre = document.createElement('h2');
        nombre.innerHTML = i + "- " + data.name + " => Usuario: " + data.username; 
        
        var email= document.createElement("p");
        email.innerHTML = "Email: " + data.email;
        
        divUsuarios.appendChild(nombre);
        divUsuarios.appendChild(email);
    });
})