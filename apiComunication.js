// JavaScript Document
function comenzar(){
	zonaDatos=document.getElementById("zonadatos");
	zonaProgreso=document.getElementById("zonaProgreso");
	var boton = document.getElementById("boton");
	boton.addEventListener("click",leer,false);
}

function leer(){
	var url="video_prueba.mp4";
	var solicitud = new XMLHttpRequest();
	solicitud.solicitud.addEventListener("loadstart",comienzaBarra,false);
	solicitud.addEventListener("progress",estadoBarra,false);
	solicitud.addEventListener("load",mostrar,false);
	solicitud.open("GET",url,true);
	solicitud.send(null);
}

function comienzaBarra(){
	zonaDatos.innerHTML="<progress value='0' max='100'></progress>";
	
}

function estadoBarra(e){
	var porcentaje=parseInt(e.loaded/e.total*100);
	var barraProgreso=zonaDatos.querySelector("progress");
	barraProgreso.value=porcentaje;
	zonaProgreso.innerHTML=porcentaje+" %";
	 
}



function mostrar(e){
	zonaDatos.innerHTML="archivo leido";
}

window.addEventListener("load",comenzar,false);