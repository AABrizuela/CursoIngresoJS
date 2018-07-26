function mostrar()
{

	var sexo = prompt("Ingrese f ó m .");

	while(sexo != "f" && sexo != "m")
	{

		alert("Incorrecto.");
		sexo = prompt("Ingrese f ó m .");
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN