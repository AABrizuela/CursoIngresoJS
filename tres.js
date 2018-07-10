/*Enunciado:
Bienvenidos. 
Pedir por prompt el precio y
el porcentaje de descuento, 
mostrar el precio final con descuento por id.*/

function mostrar()
{

	var precio;
	var descuento;
	var elPrecioFinal;

	precio = prompt("Ingrese el precio.");
	precio = parseInt(precio);
	descuento = prompt("Ingrese el descuento.");
	descuento = parseInt(descuento);

	elPrecioFinal = precio - (precio * descuento / 100);

	document.getElementById('elPrecioFinal').value = elPrecioFinal;

}
