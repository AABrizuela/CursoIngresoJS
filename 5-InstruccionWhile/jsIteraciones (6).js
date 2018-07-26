function mostrar()
{

	var contador=0;
	var acumulador=0;

	while(contador < 5)
	{
		
		contador ++;
		acumulador = acumulador + parseInt(prompt("Ingrese un numero"));

	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN