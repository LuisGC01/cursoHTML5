// JavaScript Document

addEventListener("message",mensajeRecibido,false);

function mensajeRecibido(e){
	var respuesta="El texto escrito en el cuadro es "+e.data;
	postMessage(respuesta);
}