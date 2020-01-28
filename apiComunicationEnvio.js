// JavaScript Document
function comenzar(){
	zonaDatos=document.getElementById("zonadatos");
	var boton = document.getElementById("archivos");
	boton.addEventListener("change",subirArchivos,false);
}

function subirArchivos(e){
	var archivos=e.target.files;
	var archivo=archivos[0];
	var url="procesar.php";
	var solicitud= new XMLHttpRequest();
	var subida = solicitud.upload;
	subida.addEventListener("loadstart",comienzaBarra,false);
	subida.addEventListener("progress",estadoBarra,false);
	subida.addEventListener("load",mostrar,false);
	solicitud.open("POST",url.true);
	var datos = new FormData();
	datos.append("archivo",archivo);
	solicitud.send(datos);
}

function comienzaBarra(){
	zonaDatos.innerHTML="<progress value='0' max='100'></progress>";
}

function estadoBarra(e){
	var porcentaje=parseint(e.loaded/e.total*100);
	var barraProgreso=zonaDatos.querySelector("progress");
	barraProgreso.value=porcentaje;
	zonaProgreso.innerHTML=porcentaje+" %";
}


function mostrar(e){
	zonaDatos.innerHTML=e.target.responseText;
}

window.addEventListener("load",comenzar,false);