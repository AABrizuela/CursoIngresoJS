function mostrar()
{

	var numeroUno;
	var numeroDos;
	var resta;
	var suma;

	numeroUno = parseInt(prompt("Ingrese un numero."));
	numeroDos = parseInt(prompt("Ingrese un numero."));

	if (numeroUno > numeroDos)
	{

		resta = numeroUno - numeroDos;
		alert("La resta es: " + resta);

	}else
	{

		suma = numeroUno + numeroDos;


		if (suma > 10)
		{

			alert("La suma es " + suma + " y superó el 10");

		}else
		{

			alert("La suma es: " + suma);

		}

	}

}
