
/*Enunciado:
Bienvenidos. 
Realizar el algoritmo que pida el ancho 
y el largo de un rectángulo por prompt 
y que muestre el perímetro por alert.*/

function mostrar()
{

	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese el ancho");
	ancho = parseInt(ancho)
	largo = prompt("Ingrese el largo");
	largo = parseInt(largo)

	/*Esto es lo que NO se tiene que hacer 
	en este ejercicio!!

	prompt("Ingrese el ancho") = ancho
	prompt("Ingrese el largo") = largo*/

	perimetro = 2*(ancho + largo);

	alert(perimetro);

}
