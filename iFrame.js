// JavaScript Document
function comenzar(){
	trabajador=new SharedWorker("trabajador.js");
	trabajador.port.addEventListener("message",recibido,false);
	trabajor.port.start();
}

function recibido(e){
	zonaDatos=document.getElementById("zonaDatos");
	zonaDatos.innerHTML=e.data;
}

window.addEventListener("load",comenzar,false);