function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;

	numero = Math.floor(Math.random() * 10) + 1;

	if(numero >= 9)
	{
	
		alert("Excelente! Tu nota es un " + numero);

	}

	else
	{
		if(numero > 4 && numero < 9)
		{
			
			alert("Tu nota es un " + numero + ", aprobó.");

		}
		else
		{
			
			alert("Tu nota es un " + numero + ". Vamos! La proxima se puede.");
			
		}
	}

}//FIN DE LA FUNCIÓN