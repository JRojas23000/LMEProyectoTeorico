
function calcular() {

    var peso = document.getElementById("txtpeso").value;

    var altura = document.getElementById("txtaltura").value;
    
    altura = Math.round(altura) / 100;
    peso = Math.round(peso);
    var imc = (peso / Math.pow(altura, 2));

    document.getElementById("result").innerHTML=imc.toFixed(2);

    if (imc < 16) {
		grado = "Delgadez severa.Veáse imagen 1 para referencia.";
	} else if (imc >= 16 && imc <= 16.99) {
		grado = "Delgadez moderada. Veáse imagen 1 para referencia.";
	} else if (imc >= 17 && imc <= 18.49) {
		grado = "Delgadez aceptable.";
	} else if (imc >= 18.5 && imc <= 24.99) {
		grado = "Normal. Veáse imagen 1 para referencia.";
	} else if (imc >= 25 && imc <= 29.99) {
		grado = "Preobeso. Veáse imagen 1 para referencia.";
	} else if (imc >= 30 && imc <= 34.99) {
		grado = "Obeso tipo I. Veáse imagen 1 para referencia.";
	} else if (imc >= 35 && imc <= 39.99) {
		grado = "Obeso tipo II. Veáse imagen 1 para referencia.";
	} else if (imc > 40 ) {
		grado = "Obeso tipo III. Veáse imagen 1 para referencia.";
	}
    document.getElementById("aceon").innerHTML=grado;

}