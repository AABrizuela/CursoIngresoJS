/*(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado,
muestro el mensaje: "la suma es xxx y es menor a 50"*/

function mostrar()
{

	var	numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingrese el primer numero.");
	numeroDos = prompt("Ingrese el segundo numero.");

	if (numeroUno == numeroDos) 

	{

		alert(numeroUno + numeroDos);

	}

	else
	{

		numeroUno = parseInt(numeroUno);
		numeroDos = parseInt(numeroDos);

		if (numeroUno > numeroDos) 
		{

			resultado = (numeroUno / numeroDos);
			
			alert(resultado);

		}

		else
		{

			if (numeroUno < numeroDos) 
			{

				resultado = (numeroUno + numeroDos);

				if (resultado < 50) 
				{

					alert("La suma es " + resultado + " y es menor a 50");

					else
					{

					alert(resultado);

					}

				}

			}

		}

	}

}
