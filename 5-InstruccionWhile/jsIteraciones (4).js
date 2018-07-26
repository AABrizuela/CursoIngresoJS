function mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 10.");

	while(numero < 0 || numero >= 10)
	{

		alert("El numero ingresado es incorrecto.");
		numero = prompt("Ingrese un número entre 0 y 10.");		

	}

	alert("El numero ingresado es " + numero + ". El cual es correcto.");



}//FIN DE LA FUNCIÓN