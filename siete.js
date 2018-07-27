/*

Tomar nombre, edad, sexo. Validar.

*/

function mostrar()
{

	var nombre;
	var edad;
	var sexo;
	var contador = 0;
	var respuesta = true;

	while(contador < 3/* && respuesta == true*/)
	{

		contador++;
		nombre = prompt("Ingrese su nombre.");
		edad = parseInt(prompt("Ingrese su edad."));

		while(edad < 0 || edad > 100)
		{

			edad = parseInt(prompt("Error. Ingrese su edad."));

		}

		sexo = prompt("Ingrese F o M.");

		while(sexo != "F" && sexo != "M")
		{

			sexo = prompt("Error. Ingrese F o M.");

		}

		//respuesta = confirm("Desea continuar?");

	}

	document.write("Nombre: " + nombre + "<br>" + "Edad: " + edad + "<br>" + "Sexo: " + sexo);

}
