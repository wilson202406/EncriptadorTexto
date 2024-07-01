var uno = document.querySelector("#Uno");
var dos = document.querySelector("#Dos");

//funcion para ocultar clase Uno y luego mostrar la clase Dos
function rectangulo() {
    uno.style.display = "none";
    dos.style.display = "inline";
}

function Encriptar() {
    rectangulo()
    const IngresaTexto = document.getElementById('IngresaTexto').value.toString().toLowerCase();
    const encryptedText = IngresaTexto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('SalidaTexto').value = encryptedText;
}

function Desencriptar() {
    const IngresaTexto = document.getElementById('IngresaTexto').value;
    const decryptedText = IngresaTexto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('SalidaTexto').value = decryptedText;
}

function copiar() {
    const SalidaTexto = document.getElementById('SalidaTexto');
    SalidaTexto.select();
    if (SalidaTexto.value === "" ){
        uno.style.display = "inline";
        dos.style.display = "none";
        document.getElementById('mensaje').innerHTML = "Opps!, El texto no ha sido copiado!";
        document.getElementById('mensaje2').innerHTML = ""
    }
    else{

        SalidaTexto.setSelectionRange(0, 99999); // For mobile devices
        document.execCommand("Copia");
        alert("Texto copiado: " + SalidaTexto.value);
        
    }
}
