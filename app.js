let textWrite = document.getElementById("digitar");
let textRead = document.getElementById("resultado");
let copyText = document.getElementById("botao__copiar__estilo");

function criptografar(){
    let texto = textWrite.value;
    let resultCripto = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/o/g,"ober").replace(/a/g,"ai").replace(/u/g,"ufat");
    document.getElementById("resultado").innerHTML =  resultCripto ;
 
}

function descriptografar(){
    let texto = textWrite.value;
    let resultDescripto = texto.replace(/enter/g,"e").replace(/ober/g,"o").replace(/imes/g,"i").replace(/ufat/g,"u").replace(/ai/g,"a");
    document.getElementById("resultado").innerHTML = resultDescripto ;
    
}
function copiar() {
    let textoCopiar = document.getElementById("resultado");
    textoCopiar.select();
    document.execCommand("copy");
}


