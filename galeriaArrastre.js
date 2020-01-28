var elemDestino;
function comenzar(){
	var imagenes=document.querySelectorAll("#cajaImagen img");
	for(var i = 0; i<imagenes.length;i++){
		imagenes[i].addEventListener("dragstart",comenzandoArrastrar,false);
		if(i!=1){
			imagenes[i].addEventListener("dragend",terminado,false);
		}
	}
	elemDestino=document.getElementById("zonaDestino");
	elemDestino.addEventListener("dragenter",entrando,false);
	elemDestino.addEventListener("dragover",function(e){e.preventDefault();},false);
	elemDestino.addEventListener("drop",soltado,false);	
	elemDestino.addEventListener("dragleave",saliendo,false);
}

function comenzandoArrastrar(e){
	var elemento=e.target;
	e.dataTransfer.setData("Text",elemento.getAttribute("id"));
}

function soltado(e){
	e.preventDefault();
	var id=e.dataTransfer.getData("Text");
	if(id!="imagen2"){
	var src = document.getElementById(id).src;
	elemDestino.innerHTML="<img src='"+src+"'>";
	}else{
		elemDestino.innerHTML="La imagen no es admitida";
		elemDestino.style.background="#fa0d29";	
	}
}

function entrando(e){
	e.preventDefault();
	var id=e.dataTransfer.getData("Text");
	if(id!="imagen2"){
	elemDestino.style.background="rgba(8,252,25,.8)";
	}else{
		elemDestino.style.background="#fa0d29";
	}
}

function saliendo(e){
	e.preventDefault();
	elemDestino.style.background="#FFFFFF";
}

function terminado(e){
	var elemento=e.target;
	elemento.style.visibility="hidden";
}

window.addEventListener("load",comenzar,false);