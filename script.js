var botonEncriptar = document.querySelector(".btnencriptar");
var botonDesencriptar = document.querySelector(".btndesencriptar");
var muneco = document.querySelector(".imgmuneco");
var parrafo = document.querySelector(".textomuneco");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i= 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btncopiar");
    btnCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".texto-resultado").textContent
        navigator.clipboard.writeText(contenido);
    });