const textArea = document.querySelector(".textoUno");
const msje = document.querySelector(".textoDos");

//Logica del boton encriptar
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    msje.value = textoEncriptado;
    textArea.value = "";
    msje.style.backgroundImage = "none";
    var botonCopy = document.getElementsByClassName("copiar")[0];
    botonCopy.style.display = "inline-block";
}
function encriptar(stringEncriptado) {
    let matrizCodigo = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);  
        }        
    }
    return stringEncriptado;
}

//Logica del boton desencriptar
function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    msje.value = textoEncriptado;
    textArea.value = "";
    
}
function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);  
        }        
    }
    return stringDesencriptado;
}

//Logica del boton copiar
var textAreaDos = document.getElementsByClassName("textoDos")[0];
var copyBtn = document.getElementById("copy-btn");

textAreaDos.addEventListener("input", toggleButton);
copyBtn.addEventListener("click", copyText);

function toggleButton() {
    if (textAreaDos.value.trim().length > 0) {
      copyBtn.style.display = "inline-block";
    } else {
      copyBtn.style.display = "none";
    }
}

function copyText() {
    textAreaDos.select();
    document.execCommand("copy");
  }