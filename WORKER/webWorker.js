// JavaScript Document

function comenzar(){
	zonaDatos=document.getElementById("zonaDatos");
	var boton=document.getElementById("boton");
	boton.addEventListener("click",enivar,false);
	trabajador=new Worker("trabajador.js");
	trabajador.addEventListener("message",recibido,false);
}

function enviar(){
	var nombre=document.getElementById("nombre");
	trabajador.postMessage(nombre);
}

function recibido(e){
	zonaDatos.innerHTML=e.data;
}

window.addEventListener("load",comenzar,false);
