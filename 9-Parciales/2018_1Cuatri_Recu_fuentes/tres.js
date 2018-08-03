function mostrar()
{

	var precio;
	var descuento;
	var precioConDescuento;
	var descuentoEnDinero;
	var iva;
	var elPrecioFinal;

	precio = prompt("Ingrese el precio.");
	precio = parseInt(precio);
	descuento = prompt("Ingrese descuento.");
	descuento = parseInt(descuento);

	descuentoEnDinero = precio * descuento / 100;
	precioConDescuento = precio - descuentoEnDinero;
	iva = precioConDescuento * 0.21;
	elPrecioFinal = precioConDescuento + iva;

	alert("El descuento en dinero es: $" + descuentoEnDinero + " y el precio con descuento es: $" + precioConDescuento + "." + " El iva es: " + iva);
	document.getElementById('elPrecioFinal').value = elPrecioFinal;

}
