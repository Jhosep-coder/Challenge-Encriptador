const inputTexto = document.querySelector('.in-texto');
const outputTexto = document.querySelector('.out-texto');

/*  La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"    */

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    outputTexto.value = textoEncriptado;
    inputTexto.value = "";
    outputTexto.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){ 
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    outputTexto.value = textoDesencriptado;
    inputTexto.value = "";
    outputTexto.style.backgroundImage = "none";
}

function desencriptar(stringdesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringdesencriptado = stringdesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringdesencriptado.includes(matrizCodigo[i][1])){ 
            stringdesencriptado = stringdesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringdesencriptado;
}

function btnCopiar(){
    copiarPapelera(); 
}

function copiarPapelera() {
    var textarea = document.getElementById("textArea");  
    textarea.select();
    document.execCommand("copy");
    textarea.blur();
    alert("Texto copiado")
}