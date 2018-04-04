var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener( "click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea (color, x_inicial, y_inicial, x_final, y_final)
{
	lienzo.beginPath();
		lienzo.strokeStyle = color;
		lienzo.moveTo(x_inicial, y_inicial);
		lienzo.lineTo(x_final, y_final);
		lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick()
{

	var lineas = parseInt( texto.value );
	var l = 0;
	var yi, xf;
	var colorcito = "#FAA";
	var espacio = ancho / lineas;

	for(l = 0; l < lineas; l++)
	{
		yi = espacio * l;
		xf = espacio * (l + 1);
		dibujarLinea(colorcito, 0, yi, xf, ancho);
		//Esta única línea es la que crea la otra gráfica pero en verde:
		dibujarLinea("green", ancho, ancho-yi, ancho-xf, 0);
		console.log("Línea: " + l);
	} 

	dibujarLinea(colorcito, 1, 1, 1, ancho - 1);
	dibujarLinea(colorcito, 1, ancho - 1, ancho - 1, ancho - 1);
}

