/*
	Jose	M 33 9
	Maria	F 22 6
	Fer		F 15 10
	Ger 	M 18 1
	Susana	F 56 2
	Mirta	F 99 8
*/

function mostrar()
{

	var nombre;
	var sexo;
	var edad;
	var nota;
	var peorNota;
	var nombrePeorNota;
	var sexoPeorNota;
	var edadPeorNota;
	var mayorEdad;
	var nombreMayorEdad;
	var notaMenorEdad;

	while(contador < 6)
	{
		nombre = prompt("Ingrese nombre.")
		sexo = prompt("Ingrese sexo.")
		
		while (sexo != "F" && sexo != "M") 
		{

			alert("Sexo incorrecto.");
			sexo = prompt("Ingrese F o M.");

		}

		edad = prompt("Ingrese edad.")
		
		while (isNaN(edad) || edad < 0 || edad > 100) 
		{

			alert("Edad incorrecta.");
			edad = prompt("Ingrese edad");

		}
		
		nota = prompt("Ingrese nota.")
		
		while (isNaN(nota) || nota < 0 || nota > 11)
		{

			alert("Nota incorrecta.");
			nota = prompt("Ingrese nota.");

		}

		if (contador == 1)
		{

			peorNota = nota;
			peorNotaSexo = sexo;
			mayorEdad = edad;
			nombreMayorEdad = nombre;
			


		}else
		{

			if(nota = peorNota)
			{

				peorNota = nota;
				peorNotaSexo = sexo;

			}

			if(edad > edad)
			{

				mayorEdad = edad;
				nombreMayorEdad = nombre;

			}

			if (true) {}


		}
	}	

}
