function mostrar()
{

	var peso;
	var temperatura;
	var nombre;
	var contadorDeTemperaturasPares;
	var respuesta;
	var contador;
	var masPesado;
	var masPesadoNombre;
	var masPesadoTemperatura;
	var contadorDeAnimalesCero;
	var sumaDePesos;
	var promedioDePesos;
	var pesoMinimoBajoCero;
	var pesoMaximoBajoCero;
	var banderaDelPrimerBajoCero;

	banderaDelPrimerBajoCero = 0;
	sumaDePesos = 0;
	contadorDeTemperaturasPares = 0;
	respuesta = true;
	contador = 0;
	contadorDeAnimalesCero = 0;

	while(respuesta == true)
	{

		contador++;
		nombre = prompt("Ingrese nombre.");
		peso = prompt("Ingrese peso.");
		peso = parseInt(peso);

		while(isNaN(peso) || peso < 0 || peso > 1000)
		{

			peso = prompt("Error. Ingrese peso.");
			peso = parseInt(peso);

		}

		sumaDePesos = sumaDePesos + peso;

		temperatura = prompt("Ingrese temperatura.");
		temperatura = parseInt(temperatura);

		while(isNaN(temperatura) || temperatura < -30 || temperatura > 30)
		{

			temperatura = prompt("Error. Ingrese temperatura.");
			temperatura = parseInt(temperatura);

		}

		if (temperatura % 2 == 0)
		{

			contadorDeTemperaturasPares++;

		}
		
		if (contador == 1) 
		{

			masPesado = peso;
			masPesadoNombre = nombre;
			masPesadoTemperatura = temperatura;

		}else
		{

			if (peso > masPesado) 
			{

			masPesado = peso;
			masPesadoNombre = nombre;
			masPesadoTemperatura = temperatura;

			}

		}

		if (temperatura < 0) 
		{

			contadorDeAnimalesCero++;
			if (banderaDelPrimerBajoCero == 0) 
			{

				banderaDelPrimerBajoCero = 1;
				pesoMinimoBajoCero = peso;
				pesoMaximoBajoCero = peso;

			}else
			{

				if(peso < pesoMinimoBajoCero)
				{

					pesoMinimoBajoCero = peso;

				}

				if (peso > pesoMinimoBajoCero) 
				{

					pesoMaximoBajoCero = peso;

				}

			}
		}

		respuesta = confirm("Desea seguir ingresando datos?");

	}

	promedioDePesos = sumaDePesos / contador;


	document.write("La cantidad de temperaturas pares es: " + contadorDeTemperaturasPares + "." + "<br>");
	document.write("El nombre del animal mas pesado es: " + masPesadoNombre + " y su temperatura es: " + masPesadoTemperatura + "." + "<br>");
	document.write("La cantidad de animales que viven bajo cero es: " + contadorDeAnimalesCero + "." + "<br>");
	document.write("El promedio del peso de todos los animales es: " + promedioDePesos + "." + "<br>");
}
