/*al seleccionar un mes informar. 
si estamos en Invierno: "Abrigate que hace frio." 
si aún no llego el Invierno: "Falta para el invierno." 
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	alert (mesDelAño);

	switch(mesDelAño)
	{

		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		alert("Falta para el invierno.");
		break;

		case "Julio":
		case "Agosto":
		alert("Abrigate que hace frio.");
		break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		alert("Ya pasamos el frio, ahora el calor!!");
		break;

	}





}//FIN DE LA FUNCIÓN

/*

Entrada y salida:

1 al 10
1 al 3 TP
1 al 3 Recu/Parcial

Instruccion If:

1 al 10
4 y 5 Recu/Parc
Ferrete con If
Ferrete If con Switch
Ferrete Switch con If
Ferrete Switch con Switch

Instruccion Switch:

1 al 6

*/