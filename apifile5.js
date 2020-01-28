 // JavaScript Document
function comenzar(){
	zonaDatos=document.getElementById("zonadatos");
	var boton=document.getElementById("boton");
	boton.addEventListener("click",leerArchivo,false);
	navigator.webkitPersistentStorage.Quota(5*1024,acceso);
}

function acceso(){
	window.webkitRequestFileSystem(PERSISTENT,5*1024,crearSis,errores);
 }

function crearSis(sistema){
	espacio=sistema.root;	
}

function leerArchivo(){
	var nombre=document.getElementById("archvioOrigen").value;
	espacio.getFile(nombre, {create:true, exclusive: false}, function(entrada){
		entrada.file(leerContenido,errores);
	}, errores);
}

function leerContenido(archivo){
	zonaDatos.innerHTML="nombre: "+archivo.name+"<br>";
	zonaDatos.innerHTML+="tamaño: "+archivo.size+"bytes <br>";
	var lector=new FileReader();
	lector.onload=exito;
	lector.readAsText(archivo);
}

function exito(e){
	var resultado=e.target.result;
	document.getElementById("archvioOrigen").value="";
	zonaDatos.innerHTML+="contenido: "+resultado;
}

function errores(e){
	alert("Hubo un error: "+e.code);
}

window.addEventListener("load",comenzar,false);