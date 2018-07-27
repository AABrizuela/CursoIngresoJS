function mostrar()
{

	var contador = 0;
	//declarar contadores y variables 
	var numero;
	var respuesta = "si";
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPar = 0;
	var promedioNegativos = 0;
	var promedioPositivos =  0;
	var diferencia;

	while(respuesta!="no")
	{
		
		numero = parseInt(prompt("Ingrese el valor."));
		
		if(numero < 0 )
		{

			sumaNegativos = sumaNegativos + numero;
			contadorNegativos++;

		}else
		{

			if(numero > 0)
			{

			sumaPositivos = sumaPositivos + numero;
			contadorPositivos++;

			}
		}
		
		if(numero == 0)
		{

			contadorCeros++;

		}

		if(numero % 2 == 0)
		{

			contadorPar++;

		}

		respuesta = prompt("Ingrese 'No' para salir.");

	}

	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;
	diferencia = sumaPositivos - sumaNegativos;


	document.write("La suma de los negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de los positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de positivos es: " + contadorPositivos + "<br>");
	document.write("La cantidad de negativos es: " + contadorNegativos + "<br>");
	document.write("La cantidad de ceros es: " + contadorCeros + "<br>");
	document.write("La cantidad de numeros pares es: " + contadorPar + "<br>");
	document.write("El promedio de los positivos es: " + promedioPositivos + "<br>");
	document.write("El promedio de los negativos es: " + promedioNegativos + "<br>");
	document.write("La diferencia entre negativos y positivos es: " + diferencia + "<br>");

}//FIN DE LA FUNCIÓN