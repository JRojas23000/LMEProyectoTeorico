window.onload = iniciar;

function iniciar() {
    var btncalcular = document.getElementById("btncalcular");
    btncalcular.addEventListener("click", clickbtncalcular);
}

function clickbtncalcular() {
    var txtpeso = document.getElementById("txtpeso");
    var peso = txtpeso.value;

    var txtaltura = document.getElementById("txtaltura");
    var txtaltura = txtaltura.value;

    var imc = peso / (altura * altura);
    document.getElementById('imcValue').textContent = imc.toFixed(2);
    document.getElementById('result').textContent = `Tu IMC es: ${imc.toFixed(2)} (${result})`;
}