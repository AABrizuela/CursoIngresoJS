function mostrar()
{

	var repeticiones = prompt("Ingrese el número de repeticiones");
	var contador;
	var numeroDivisor = 0;

	for(contador = 1 ; contador <= repeticiones ; contador++)
	{

		if (repeticiones % contador == 0) //<--- expresar divisores
		{

			console.log(contador);
			numeroDivisor++;

		}

	}

	console.log("La cantidad de numeros divisores encontrados es: " + numeroDivisor);

}//FIN DE LA FUNCIÓN