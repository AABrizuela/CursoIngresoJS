function mostrar()
{

	var planeta;

	planeta = prompt("Ingrese un planeta del sistema solar.");
	planeta = planeta.toLowerCase();

	switch(planeta)
	{

		case "tierra":
		alert("Acá vivimos.");
		break;

		case "mercurio":
		case "venus":
		alert("Acá hace más calor.");
		break;

		default:
		alert("Acá hace mas frío.");
		break;

	}

}
