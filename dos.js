/*Enunciado:
Bienvenidos. 
mostrar * en un solo alert * el mensaje 
"usted es xxxxx y vive en la localidad de xxxxxxxx".*/

function mostrar()
{
  
	var elNombre;
	var laLocalidad;

	elNombre = document.getElementById('elNombre').value;
	laLocalidad = document.getElementById('laLocalidad').value;

	alert("Usted es " + elNombre + " y vive en la localidad de " + laLocalidad);

}
