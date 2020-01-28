// JavaScript Document

function comenzar(){
	zonaDatos=document.getElementById("zonaDatos");
	url=document.getElementById("url");
	url.addEventListener("click",cambiaUrl,false);
	window.addEventListener("popstate",nuevaUrl,false);
	window.replaceState(1,null);
	
}

function cambiaUrl(){
	/*zonaDatos.innerHTML="estas en la pagina 2";
	window.history.pushState(null,null,"pagina2.html");
	*/
	mostrar(2);
	window.history.pushState(2,null,"pagina2.html");
	
}

function nuevaUrl(e){
	mostrar(e.state);
}

function mostrar(actual){
	zonaDatos.innerHTML="estas en la pagina: "+actual;
}

window.addEventListener("load",comenzar,false);