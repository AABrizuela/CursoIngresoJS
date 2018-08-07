function mostrar()
{

	var hora = 0;
	var noche = 0;

	hora = document.getElementById('laHora').value;
	hora = parseInt(hora);


	while (hora < 0 || hora > 24)
	{

		//alert("Hora invalida.");
		//break;
		hora = prompt("Hora inválida. Por favor reingrese.");
		hora = parseInt(hora);

	}

	switch(hora)
	{

		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		alert("Es de mañana.");
		break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		alert("Es de tarde.");
		break;

		default:
		alert("Es de noche.");
		break;

	}

	if (hora > 0 & hora < 6)
	{

		noche = hora;

	}

	if (hora == noche)
	{

		alert("Son la(s) " + hora + ", a dormir.");

	}

}
