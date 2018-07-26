function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var respuesta=true;

	while(respuesta == true)
	{
		
		numero = prompt("Ingrese un numero.");
		
		maximo = Math.max(numero);
		minimo = Math.min(numero);

		respuesta = confirm("Desea continuar?");

	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;

}//FIN DE LA FUNCIÓN