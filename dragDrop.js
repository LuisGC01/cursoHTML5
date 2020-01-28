var elemDestino;
var elemOrigen;

function comenzar(){
	elemOrigen=document.getElementById("imagen");
	elemOrigen.addEventListener("dragstar",comenzamosArrastrar,false);
	elemDestino=document.getElementById("zonaDestino");
	elemDestino.addEventListener("dragover",function(e){e.preventDefault();},false);
	elemDestino.addEventListener("drop",soltado,false);
	elemOrigen.addEventListener("dragend",terminado,false);
	elemDestino.addEventListener("dragenter",entrando, false);
	elemDestino.addEventListener("dragleave",saliendo, false);
	
}

function comenzamosArrastrar(e){
	var codigo="<img src='"+elemOrigen.getAttribute("src")+"'>";
	e.dataTransfer.setData("Text", codigo);
}

function soltado(e){
	e.preventDefault();
	elemDestino.innerHTML=e.dataTransfer.getData("Text");
}

function terminado(e){
	var elemento = e.target;
	elemento.style.visibility="hidden";
}

function entrando(e){
	e.preventDefault();
	elemDestino.style.background="rgba(8,252,25,.8)";	
}

function saliendo(e){
	e.preventDefault();
//	elemDestino.style.background="#FFFFFF";
	elemDestino.style.visibility="hidden";
		
}


window.addEventListener("load",comenzar,false);