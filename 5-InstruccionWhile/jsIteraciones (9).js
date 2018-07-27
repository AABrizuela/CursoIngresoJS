function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo = 9999;
	var minimo = -9999;
	var numero;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta=true;

	while(respuesta == true)
	{
		numero = parseInt(prompt("Ingrese un valor."));

		if(numero > maximo)
		{

			numeroMaximo = numero < maximo;

		}else
		{
			if (numero < minimo)
			{

				numeroMinimo = numero > minimo;

			}
		}	
		respuesta = confirm("Desea continuar?");
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;

}//FIN DE LA FUNCIÓN