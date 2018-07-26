function mostrar()
{

	var clave = prompt("Ingrese el número clave.");

	while(clave != "utn750")
	{

		alert("La clave es incorrecta.");
		clave = prompt("Ingrese el número clave");
		//^ volver a pedir la variable dentro del while

	}

	alert("Bienvenido!");

}//FIN DE LA FUNCIÓN
