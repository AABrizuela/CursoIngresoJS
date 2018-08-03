/*
	Jose	M 33 9
	Maria	F 22 6
	Fer		F 15 10
	Ger 	M 18 1
	Susana	F 56 2
	Mirta	F 99 8

	El codigo da lo siguiente:

	1.- La peor nota y el sexo de la persona.
	2.- El nombre de la persona mayor y su edad.
	3.- La edad de la persona menor y su nota.
	4.- La cantidad de mayores y menores de edad.
	5.- La cantidad de mujeres y hombres.
	6.- La cantidad de alumnos aprobados y desaprobados.

*/

function mostrar()
{

	var respuesta = true;
	var contador = 0;
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
	var menorEdad;
	var notaMenorEdad;
	var acumuladorMenor = 0;
	var acumuladorMayor = 0;
	var acumuladorMujeres = 0;
	var acumuladorHombres = 0;
	var acumuladorAprobados = 0;
	var acumuladorDesaprobados = 0;

	while(respuesta == true)
	{
		contador++;
		nombre = prompt("Ingrese nombre.");
		sexo = prompt("Ingrese sexo.");
		sexo = sexo.toLowerCase();
		
		while (sexo != "f" && sexo != "m") 
		{

			alert("Sexo incorrecto.");
			sexo = prompt("Ingrese F o M.");
			sexo = sexo.toLowerCase();

		}

		edad = prompt("Ingrese edad.");
		edad = parseInt(edad);
		
		while (isNaN(edad) || edad < 0 || edad > 100) 
		{

			alert("Edad incorrecta.");
			edad = prompt("Ingrese edad");
			edad = parseInt(edad);

		}
		
		nota = prompt("Ingrese nota.");
		nota = parseInt(nota);

		while (isNaN(nota) || nota < 0 || nota > 11)
		{

			alert("Nota incorrecta.");
			nota = prompt("Ingrese nota.");
			nota = parseInt(nota);

		}

		if (contador == 1)
		{

			peorNota = nota;
			peorNotaSexo = sexo;
			mayorEdad = edad;
			nombreMayorEdad = nombre;
			menorEdad = edad;
			notaMenorEdad = nota;

		}else
		{

			if(nota < peorNota)
			{

				peorNota = nota;
				peorNotaSexo = sexo;

			}

			if(edad > mayorEdad)
			{

				mayorEdad = edad;
				nombreMayorEdad = nombre;

			}

			if (edad < menorEdad) 
			{

				menorEdad = edad;
				notaMenorEdad = nota;

			}

		}
	
	if (edad < 18) 
	{

		acumuladorMenor++;

	}else
	{

		acumuladorMayor++;

	}
	
	if (sexo == "f") 
	{

		acumuladorMujeres++;

	}else
	{

		acumuladorHombres++;

	}

	if (nota <= 4) 

	{

		acumuladorDesaprobados++;

	}else
	{

		acumuladorAprobados++;

	}

	/*switch(nota)
	{

		case "1":
		case "2":
		case "3":
		case "4":
		acumuladorDesaprobados++
		break;

		default:
		acumuladorAprobados++
		break;

	}*/

	respuesta = confirm("Desea continuar ingresando datos?");

	}

	console.log("La peor nota es un: " + peorNota + " y el sexo de la persona es: " + peorNotaSexo + ".");
	console.log("La persona de mas edad es: " + nombreMayorEdad + " y tiene: " + mayorEdad + " años.");
	console.log("La persona de menos edad tiene: " + menorEdad + " años y su nota es un: " + notaMenorEdad + ".");
	console.log("Hay " + acumuladorMayor + " mayor(es) de edad y " + acumuladorMenor + " menor(es) de edad.");
	console.log("Hay " + acumuladorMujeres + " mujer(es) y " + acumuladorHombres + " hombre(s).");
	console.log("Hay " + acumuladorAprobados + " alumno(s) aprobado(s) y " + acumuladorDesaprobados + " alumno(s) desaprobado(s).");

}
