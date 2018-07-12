function mostrar()
{
//tomo la edad  

	var edad;

	edad = document.getElementById('edad').value;

	if (edad > 12 && edad < 18) 
	{
		
		alert("La persona es adolescente.");

	}

	/*
	Forma alternativa: if adentro de otro if

	if (edad < 18)
	{
		
		if (edad > 12)
		{
			
			alert("La persona es adolescente.");

		}

	}
	*/

}//FIN DE LA FUNCIÓN