
function mostrar()
{

	var ancho;
	var largo;
	var perimetro;

	ancho = parseInt(prompt("Ingrese el ancho."));
	largo = parseInt(prompt("Ingrese el largo."));

	perimetro = (ancho + largo) * 2;

	alert("El perímetro es: " + perimetro + ".");


}
