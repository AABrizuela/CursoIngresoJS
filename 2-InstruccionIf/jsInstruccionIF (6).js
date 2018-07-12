function mostrar()
{
//tomo la edad  

	var edad;

	edad = document.getElementById('edad').value;

	/*
	¡¡ESTA FORMA CONSUME MAS MEMORIA Y PROCESAMIENTO!!

	if (edad < 13) 
	{

		alert("La persona es un niño.");

	}

	if (edad > 12 && edad < 18) 
	{
		
		alert("La persona es adolescente.");

	}

	if (edad > 17) 
	{

		alert("La persona es mayor de edad.");

	}*/

	if (edad < 13)
	{

		alert("La persona es un niño.");

	}
	else
	{
		if (edad > 17) //Para ahorrar aun mas, usa comparaciones simples. O sea, no usar -> if (edad > 12 && edad < 18) 
		{

			alert("La persona es un adolescente.");
				
		}
		else
		{

			alert("La persona es mayor de edad.");

		}
	}

}//FIN DE LA FUNCIÓN