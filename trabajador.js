// JavaScript Document
puertos=new Array();
addEventListener("connect",conectar,false);

function conectar(e){
	puertos.push(e.ports[0]);
	e.ports[0].onmessage=enviar;
}

function enviar(e){
	for(f=0;f<puertos.length;f++){
		puertos[f].postMessage("el texto que has puesto es: "+e.data);
	}
	
}