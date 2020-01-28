// JavaScript Document
function iniciar(){
	var boton = document.getElementById("boton");
	boton.addEventListener("click",enviar, false);
	window.addEventListener("message",recibir,false);
	recepcion=document.getElementById("zonaRecepcion");
	
}

function enviar(){
	var mensaje=document.getElementById("mensaje");
	var iframe=document.getElementById("iframe");
	iframe.contentWindow.postMessage(mensaje,"http://");
}

function recibir(e){
	recepcion.innerHTML+=e.data;
	
}

window.addEventListener("load",iniciar,false);