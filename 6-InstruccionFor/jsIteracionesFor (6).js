function mostrar()
{

	var repeticiones = prompt("Ingrese el número de repeticiones");
	var contador;
	var contadorPares = 0;
	var contadorImpares = 0;

	for(contador = 1 ; contador <= repeticiones ; contador++)
	{

		if (contador % 2 == 0) //<--- expresar pares
		{

			console.log(contador);
			contadorPares++;

		}else
		{

			contadorImpares++;

		}
	
	}

	console.log("La cantidad de pares encontrados es: " + contadorPares);
	console.log("La cantidad de impares encontrados es: " + contadorImpares);

}//FIN DE LA FUNCIÓN