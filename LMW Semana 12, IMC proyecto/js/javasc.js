(function(){
    var formulario = document.forms.formulario,
    elementos = formulario.elements,
    boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.nombre.value.length === 0) {
            alert("Completa el campo nombre");
            e.preventDefault();
        }
    };
    
    var validarRadio = function(e){
        if(formulario.sexo[0].checked == true || formulario.sexo[1].checked == true ){
        } else{
            alert("Completa el campo sexo");
            e.preventDefault();
        }
    }

    var validarcheckbox = function(e){
        if(formulario.terminos.checked == false) {
            alert("Acepta Terminos y Condiciones");
            e.preventDefault();
        }
    }

    var validar = function(e){
        validarNombre(e);
        validarRadio(e);
        validarcheckbox(e);
    }

    formulario.addEventListener("submit", validar);
})();