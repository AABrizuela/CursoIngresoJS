function mostrar()
{

	var numeroUno;
	var numeroDos;

	numeroUno = prompt("Ingrese un numero.");
	numeroDos = prompt("Ingrese un numero.");

	if (numeroUno == numeroDos) 
	{

		alert(numeroUno + numeroDos),

	}else
	{

		if (numeroUno > numeroDos)
		{

			alert(numeroUno / numeroDos);

		}else
		{

			numeroUno = parseInt(numeroUno);
			numeroDos = parseInt(numeroDos);

			alert(numeroUno + numeroDos);

		}

	}
}
