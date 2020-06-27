function TipoMotor(){
	var tipo = prompt("Por favor Escriba el tipo de motor para la bomba de fluidos, debe ser un numero de 1 a 4")
	
	if(tipo === "1"){
		alert("La bomba es una bomba de agua");
	}else if (tipo === "2") {
		alert("La bomba es una bomba de gasolina");
	}else if (tipo === "3") {
		alert("La bomba es una bomba de hormigón");
	}else if (tipo === "4") {
		alert("La bomba es una bomba de pasta alimenticia");
	}else if(tipo === "0"){
		alert("No hay establecido un valor definido para el tipo de bomba");
	}else{
		alert("No existe un valor válido para el tipo de bomba");
	}
	volver();
}
function volver(){
	var aceptar = confirm("Desea volver a consultar?")
	if(aceptar == true){
		TipoMotor();
	}else{
		alert("Muchas gracias por su consulta!! :)");
	}
}

TipoMotor();