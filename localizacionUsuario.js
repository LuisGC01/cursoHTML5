function comenzar(){
	var miBoton=document.getElementById("dameUbicacion");
	miBoton.addEventListener("click",obtener,false);
}

function obtener(){
	var parametros={enableHighAccuaracy: true, timeout:10000, maximumAge:60000}
	navigator.geolocation.watchPosition(mostrarPosicion,gestionErrores,parametros);
}

function mostrarPosicion(posicion){
	var ubicacion=document.getElementById("ubicacion");
	var miUbicacion="";
	miUbicacion+="Latitud: "+posicion.coords.latitude+"<br>";
	miUbicacion+="Longitud: "+posicion.coords.longitude+"<br>";
	miUbicacion+="Exactirud: "+posicion.coords.accuracy+"<br>";
	url="https://maps.google.com/?ll="+posicion.coords.longitude+","+posicion.coords.longitude+"&z=14&t=m&output=embed";
	//var miMapa="http://maps.google.com/maps/api/staticmap?center="+posicion.coords.latitude+","+posicion.coords.longitude+","+"&zoom=20&size=400x400&sensor=false&markers="+posicion.coords.latitude+","+posicion.coords.longitude;
	
	//ubicacion.innerHTML="<img src='"+miMapa+"'>";
	//ubicacion.innerHTML="<p>"+miUbicacion+"</p>";
	ubicacion.innerHTML="<p>"+miUbicacion+"</p><br><iframe class='iframe' src='"+url+"' weight='600' frameborder='0' style='border:0' ></iframe>"
	
}

function gestionErrores(error){
	//alert("Ha habido un error "+error.code+" "+error.message);
	if(error.code==1){
		alert("Debes permitir el uso de la geolocalizacion en tu navegador");
	}
}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.5906483776416!2d-99.0483838856173!3d19.473208244428122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI4JzIzLjUiTiA5OcKwMDInNDYuMyJX!5e0!3m2!1ses-419!2smx!4v1574192823859!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>

window.addEventListener("load",comenzar,false);