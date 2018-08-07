/*

Datos de testeo:
(d, -150 (mal), -50 (bien))
(z, 0)
(g, 20)
(a, 150 (mal), 0 (bien))
(b, 3)
(k, 7)

*/

function mostrar()
{
	
	var respuesta;
	var contador;
	var letra;
	var numero;
	var contadorNumerosPares;
	var contadorNumerosImpares;
	var contadorCeros;
	var promedioNumerosPositivos;
	var acumuladorNumerosPositivos;
	var acumuladorNumerosNegativos;
	var sumaNumerosNegativos;
	var numeroMaximo;
	var numeroMinimo;
	var letraNumeroMaximo;
	var letraNumeroMinimo;

	respuesta = true;
	contador = 0;
	contadorNumerosPares = 0;
	contadorNumerosImpares = 0;
	contadorCeros = 0;
	acumuladorNumerosNegativos = 0;
	acumuladorNumerosPositivos = 0;
	numeroMaximo = 0;
	numeroMinimo = 0;
	letraNumeroMinimo = 'x';
	letraNumeroMaximo = 'y';

	while (respuesta == true)
	{

		contador++;
		letra = prompt("Ingrese una letra.");
		numero = prompt("Ingrese un numero entre -100 y 100.");
		numero = parseInt(numero);

		while (numero < -100 || numero > 100)
		{

			numero = prompt("Fuera del rango. Ingrese un numero entre -100 y 100.");
			numero = parseInt(numero);

		}

		if (numero == 0)
		{

			contadorCeros++;

		}else
		{
			if (numero % 2 == 0)
			{

				contadorNumerosPares++;

			}else
			{

				contadorNumerosImpares++;

			}
		}

		if (contador == 1)
		{

			numeroMaximo = numero;
			letraNumeroMaximo = letra;
			numeroMinimo = numero;
			letraNumeroMinimo = letra;

		}else
		{

			if (numero > numeroMaximo)
			{

				numeroMaximo = numero;
				letraNumeroMaximo = letra;

			}else
			{

				if (numero < numeroMinimo)
				{

					numeroMinimo = numero;
					letraNumeroMinimo = letra;

				}

			}

		}

		if (numero > 0)
		{

			acumuladorNumerosPositivos = acumuladorNumerosPositivos + numero;			

		}

		if (numero < 0)
		{

			acumuladorNumerosNegativos = acumuladorNumerosNegativos + numero;			

		}

		respuesta = confirm("Desea seguir ingresando datos?");

	}

	promedioNumerosPositivos = acumuladorNumerosPositivos / contador;

	document.write("La cantidad de numeros pares es: " + contadorNumerosPares + "." + "<br>");
	document.write("La cantidad de numeros impares es: " + contadorNumerosImpares + "." + "<br>");
	document.write("La cantidad de ceros es: " + contadorCeros + "." + "<br>");
	document.write("El promedio de todos los numeros positivos ingresados es: " + promedioNumerosPositivos + "." + "<br>");
	document.write("La suma de todos los numeros negativos es: " + acumuladorNumerosNegativos + "." + "<br>");
	document.write("El numero maximo es: " + numeroMaximo + " y su letra es: " + letraNumeroMaximo + "." + "<br>");
	document.write("El numero minimo es: " + numeroMinimo + " y su letra es: " + letraNumeroMinimo + "." + "<br>");

}
