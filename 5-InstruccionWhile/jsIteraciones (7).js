function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";

	while(respuesta == "si")
	{
		
		contador ++;
		acumulador = acumulador + parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("Seguir sumando?");

		/*if (respuesta != "Si")
		{

			break;

		}*/
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
	//respuesta = prompt("Seguir sumando?");
}//FIN DE LA FUNCIÓN