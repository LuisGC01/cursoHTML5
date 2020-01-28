// JavaScript Document
function comenzar(){
	zonaDatos=document.getElementById("zonadatos");
	var boton=document.getElementById("boton");
	boton.addEventListener("click",escribirArchivo,false);
	navigator.webkitPersistentStorage.Quota(5*1024,acceso);
}

function acceso(){
	window.webkitRequestFileSystem(PERSISTENT,5*1024,crearSis,errores);
 }

function crearSis(sistema){
	espacio=sistema.root;	
}

function escribirArchivo(){
	var nombre=document.getElementById("archvioOrigen").value;
	espacio.getFile(nombre,{create: true, exclusive:false}, function(entrada){
		entrada.createWriter(escribirContenido,errores);
	},errores);
}

function escribitContenido(fileWriter){
	var texto=document.getElementById("texto").value;
	fileWriter.onwriteend=exito();
	var blob= new Blob([texto],{type: "text/html"});
	fileWriter.write(blob);	
}

function exito(){
	document.getElementById("archvioOrigen").value="";
	document.getElementById("texto").value="";
	zonaDatos.innerHTML="archivo creado con exito";
}


function errores(e){
	alert("Hubo un error: "+e.code);
}

window.addEventListener("load",comenzar,false);