const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

const aviso = document.querySelector(".info");

function validarTexto(texto) {
    // Expresión regular que valida solo letras minúsculas sin acentos ni caracteres especiales
    const regex = /^[a-z\s]*$/;

    if (regex.test(texto)) {
        return true; // Texto válido
    } else {
       // alert("El texto solo puede contener letras minúsculas sin acentos ni caracteres especiales.Intenta de nuevo!");
        aviso.textContent = "No debe tener acentos ni caracteres especiales. Intenta de nuevo!";
        
        return false; // Texto inválido
    }
}


/*
e-- enter
i-- imes
o-- ober
a-- ai
u-- ufat
*/

function btnEncriptar() {

    const texto = textArea.value;

    if (validarTexto(texto)) {
        // Lógica de encriptación 

    const textoEncriptado = encriptar(textArea.value);
    message.value = textoEncriptado;
    textArea.value = "";
    message.style.backgroundImage = "none";

    console.log("Texto encriptado:", texto); 
    } 

}


function encriptar(textoEncriptado) {
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["o","ober"], ["a", "ai"],["u", "ufat"]]; 
    textoEncriptado = textoEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {                                    
        if (textoEncriptado.includes(matrizCodigo[i][0])) {
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    
    }
    return textoEncriptado;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    message.value = textoEncriptado;
    textArea.value = "";
    
}

function desencriptar(textoDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["a", "ai"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoDesencriptado.includes(matrizCodigo[i][1])) {
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            
        }
        
    }
    return textoDesencriptado;
}

function copiar() {
        // Get the text field
        var copyText = document.getElementById("mensaje");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
        
        // Alert the copied text
        alert("Se copio!: " + copyText.value);
}

function limpiarCampos() {
    document.getElementById("txt-area").value = ""; // Limpia el campo de entrada de texto
    document.getElementById("mensaje").value = ""; // Limpia el textarea
}

