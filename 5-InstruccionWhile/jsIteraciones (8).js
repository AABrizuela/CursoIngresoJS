function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta=true;

	while(respuesta == true)
	{

		contador ++;
		//acumulador = acumulador + parseInt(prompt("Ingrese un numero"));
		numero = prompt("Ingrese un numero.");
		numero = parseInt(numero);



		if(numero >= 0)
		{

			positivo = positivo + numero;

		}

		else
		{

			negativo = negativo * numero;

		}

		respuesta = confirm("Desea continuar?");
		//respuesta = prompt("Quiere seguir ingresando datos?");

	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN