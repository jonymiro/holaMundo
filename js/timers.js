'use strict'

window.addEventListener("load", function(){


//Timers

var tiempo = this.setInterval(function(){
     console.log("Set interval ejecutado");
     document.querySelector("p").style.fontSize = "50px";
} , 3000);


});

// setTimeout , solo se ejecuta una vez no por intervalos

// clearInterval para parar el intervalo en este caso clearInterval(tiempo);

clearInterval();