// JavaScript Document
function comenzar(){
	var cache=window.applicationCache;
	cache.addEventListener("error",errores,false);
}

function errores(){
	alert("no se pudo descargar");
}



window.addEventListener("load",comenzar,false);