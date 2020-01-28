// JavaScript Document
function comenzar(){
	zonaDatos=document.getElementById("zonadatos");
	var boton=document.getElementById("boton");
	boton.addEventListener("click",crear,false);
	navigator.webkitPersistentStorage.Quota(5*1024,acceso);
}

function acceso(){
	window.webkitRequestFileSystem(PERSISTENT,5*1024,crearSis,errores);
}

function crearSis(sistema){
	espacio=sistema.root;
	ruta="";
	mostrar();
}

function crear(){
	var nombreArchivo=document.getElementById("entrada").value;
	if(nombreArchivo!=""){
		nombreArchivo=ruta+nombreArchivo;
		espacio.getFile(nombreArchivo,{create:true,exclusive:false}, mostrar, errores);
	}
}

function mostrar(entrada){
	document.getElementById("entrada").value="";
	zonaDatos.innerHTML="";
	espacio.getDirectory(ruta,null,leerDir,errores);
	/*zonaDatos.innerHTML="exito en la creacion de espacio y archivo <br>";
	zonaDatos.innerHTML+="Nombre: "+entrada.name+"<br>";
	zonaDatos.innerHTML+="Ruta: "+entrada.fullPath+"<br>";*/
}

function leerDir(dir){
	lector=dir.createReader();
	leer();
}

function leer(){
	lector.readEntries(function (archivos){
		if(archivod.length){
			listar(archivos);
		}	
	},errores);
}

function listar(archivos){
	for(var i=0; i<archivos.length;i++){
		if(archivos[i].isFIle){
			zonaDatos.innerHTML+=archivos[i].name+"<br>";
		}else if(archivos[i].isDirectory){
			zonaDatos.innerHTML+="<span class='directorio'>"+archivos[i].name+"</span><br>";
		}
	}
}

function volver(){
	espacio.getDIrectory(ruta,null,function(dirActual){
		dirActual.getParent(function(dirPadre){
			ruta=dirPadre.fullPath;
			mostrar();
		},errores);
	},errores);
}

function errores(e){
	alert("Hubo un error: "+e.code);
}



window.addEventListener("load",comenzar,false);