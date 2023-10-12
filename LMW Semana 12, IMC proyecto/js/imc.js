
function calcular() {

    var peso = document.getElementById("txtpeso").value;

    var altura = document.getElementById("txtaltura").value;
    
    altura = Math.round(altura) / 100;
    peso = Math.round(peso);
    var imc = (peso / Math.pow(altura, 2));

    document.getElementById("result").innerHTML=imc.toFixed(2);
}