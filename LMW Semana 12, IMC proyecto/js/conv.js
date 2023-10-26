function convertir() {
    const conversionType = document.getElementById("conversionType").value;
    const cantidadMetros = parseFloat(prompt("Ingrese la cantidad en metros:"));

    if (isNaN(cantidadMetros)) {
        alert("Por favor, ingrese un valor numérico válido.");
        return;
    }

    let resultado = 0;

    switch (conversionType) {
        case "pies":
            resultado = cantidadMetros * 3.28084;
            break;
        case "pulgadas":
            resultado = cantidadMetros * 39.3701;
            break;
        case "yardas":
            resultado = cantidadMetros * 1.09361;
            break;
    }

    const conversionResult = `${cantidadMetros} metros son aproximadamente ${resultado.toFixed(2)} ${conversionType}.`;
    const resultElement = document.createElement("p");
    resultElement.textContent = conversionResult;

    document.body.appendChild(resultElement);
}