function mostrar()
{

	var numero = prompt("Ingrese el número.");
	var contador;

	for(contador = 0 ; contador < 1 ; contador++)
	{

		if (primo(numero)) 
		{

			alert("El numero es primo.");
		
		}else
		{

			alert("El numero no es primo.");

		}

	}

	console.log("La cantidad de numeros divisores encontrados es: " + numeroDivisor);



}//FIN DE LA FUNCIÓN