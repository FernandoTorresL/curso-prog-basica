var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var lineas = 30;

var l = 0;
var yi, xf;

var colorcito = "#FAA";

/*for(l = 0; l < lineas; l++)*/
do
{
	yi = 10 * l;
	xf = 10 * (l + 1);

	dibujarLinea(colorcito, 0, yi, xf, 300);

	//Esta única línea es la que crea la otra gráfica pero en verde:
	dibujarLinea("green", 300, 300-yi, 300-xf, 0);

	l++;
} 
while (l < lineas)

dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 299, 299, 299);

function dibujarLinea (color, x_inicial, y_inicial, x_final, y_final)
{
	lienzo.beginPath();
		lienzo.strokeStyle = color;
		/*lienzo.lineWidth = 10*/
		lienzo.moveTo(x_inicial, y_inicial);
		lienzo.lineTo(x_final, y_final);
		lienzo.stroke();
	lienzo.closePath();
}

