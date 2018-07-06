/*Enunciado:
Bienvenidos. 
Pedir por prompt el precio y el porcentaje 
de descuento, mostrar: 
1-El descuento en dinero, 
2-El precio con el descuento , 
3-El IVA 
todos los anteriores e un solo alert 
4-Y solo el precio con descuento 
más el IVA por id .*/

function mostrar()
{

	var precioFinal;
	var descuento;
	var IVA;

	precioFinal = prompt("Ingrese el precio.")
	descuento = prompt("Ingrese el descuento.")
	IVA = precioFinal / 21

	descuento = (precioFinal * descuento) / 100;

	alert(precioFinal + descuento + IVA);








}
