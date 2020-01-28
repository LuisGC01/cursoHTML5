// JavaScript Document

function comenzar(){
	zonaDatos = document.getElementById("zonaDatos");
	var archivos=document.getElementById("archivos");
	archivos.addEventListener("change",procesar,false);
	
}

function procesar(e){
	var archivos=e.target.files;
	zonaDatos.innerHTML="";
	var miArchivo=archivos[0];
	if(!miArchivo.type.match(/image/)){
		alert("selecciona una imagen");
	}else{
		zonaDatos.innerHTML+="Nombre del archivo: "+miArchivo.name+"<br>";
		zonaDatos.innerHTML+="Tamaño del archivo: "+Math.round(miArchivo.size/1024)+" kb <br>";
	
	var lector = new FileReader();
	lector.readAsDataURL(miArchivo);
	lector.addEventListener("load",mostrarEnWeb,false);
}
}

function mostrarEnWeb(e){
	var resultado=e.target.result;
	zonaDatos.innerHTML+="<img src='"+resultado+"' width='85%'>";
	
}

window.addEventListener("load",comenzar, false);