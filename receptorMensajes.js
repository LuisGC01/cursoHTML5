// JavaScript Document

function iniciar(){
	window.addEventListener("message",receptor,false);
	
}

function receptor(e){
	var zonaMensajes=document.getElementById("zonaMensajes");
	if(e.origin=="http://"){
	zonaMensajes.innerHTML+="mensaje desde: "+e.origin+"<br>";
	zonaMensajes.innerHTML+="mensaje "+e.data+"<br>";
	e.source.postMessage("mensaje recibido correctamente"+"<br>",e.origin);
	}else{
		e.source.postMessage("mensaje erroneo"+"<br>",e.origin);
	}
}

window.addEventListener("load",iniciar,false);