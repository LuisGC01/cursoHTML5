
function comenzar(){
	var boton=document.getElementById("grabar");
	boton.addEventListener("click",itemNuevo,false);
}

function itemNuevo(){
	var clave=document.getElementById("clave").value;
	var valor=document.getElementById("valor").value;
	localStorage.setItem(clave,valor);
	//sessionStorage[clave]=valor;
	leerMostrar(clave);
	document.getElementById("clave").value="";
	document.getElementById("valor").value="";
}

function leerMostrar(clave){
	var zonaDatos=document.getElementById("zonadatos");
	zonaDatos.innerHTML="<div><button onclick='eliminarTodo()'>EliminarTodo</button></div>";
	//var elValor=sessionStorage[clave];
	for(var i = 0; i<localStorage.length;i++){
		var clave = localStorage.key(i);
		var elValor=localStorage.getItem(clave);
		zonaDatos.innerHTML+='<div>Clave: '+clave+' -- '+'Valor: '+elValor+'<br><button onclick="eliminarItem(\''+clave+'\')">Eliminar</button></div>';

	}	
}

function eliminarTodo(){
	if(confirm("EStas seguro")){
		localStorage.clear();
		leerMostrar();
	}
}

function eliminarItem(clave){
	if(confirm("EStas seguro")){
		localStorage.removeItem(clave);
		leerMostrar();
	}
}


window.addEventListener("load",comenzar,false); 