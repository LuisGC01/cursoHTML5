// JavaScript Document
var bd;
function iniciar(){
	zonaDatos=document.getElementById("zonadatos");
	boton=document.getElementById("grabar");
	boton.addEventListener("click",agregarObjeto, false);
	var solicitud=indexedDB.open("miBase2");
	solicitud.onsuccess=function(e){
		bd=e.target.result;
	}
	solicitud.onupgradeneeded=function(e){
		bd=e.target.result;
		bd.createObjectStore("gente",{keyPath: "clave"});
	}
}

function agregarObjeto(){
	var clave = document.getElementById("clave").value;
	var titulo = document.getElementById("texto").value;
	var fecha = document.getElementById("fecha").value;
	var transaccion = bd.transaction(["gente"], "readwrite");
	var almacen=transaccion.objectStore("gente");
	var agregar=almacen.add({clave: clave, titulo: titulo, fecha: fecha});
	agregar.addEventListener("success",mostrar,false);
	document.getElementById("clave").value="";
	document.getElementById("texto").value="";
	document.getElementById("fecha").value="";
	
	
}

function mostrar(){
	zonaDatos.innerHTML="";
	var transaccion=bd.transaction(["gente"],"readonly");
	var almacen=transaccion.objectStore("gente");
	var cursor = almacen.openCursor();
	cursor.addEventListener("success",mostrarDatos,false);
	
}

function mostrarDatos(e){
	var cursor=e.target.result;
	if(cursor){
		zonaDatos.innerHTML+="<div>"+cursor.value.clave+" - "+cursor.value.titulo+" - "+cursor.value.fecha+"</div>";
		cursor.continue();
	}
	
	
}





window.addEventListener("load", iniciar, false);


