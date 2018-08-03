
function mostrar()
{

	var base;
	var altura;
	var superficie;
	var perimetro;

	base = prompt("Ingrese la base.");
	base = parseInt(base);
	altura = prompt("Ingrese la altura.");
	altura = parseInt(altura);

	superficie = (base * altura) / 2;
	perimetro = 3 * base;

	alert("La superficie del triangulo es: " + superficie + " y el perímetro es " + perimetro + ".");
	
}
