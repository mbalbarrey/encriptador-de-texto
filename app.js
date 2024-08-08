var divResultado = document.querySelector('.encriptador-salida-resultado');
var divSinResultado = document.querySelector('.mensaje-no-encontrado');

function encriptarTexto(){
    var textoUsuario = document.getElementById('entrada').value;    
    if (textoUsuario != '') {
        if (tieneMayusculasOAcentos(textoUsuario)) {
            alert('El texto no puede contener ni mayúsculas ni acentos, por favor lea bien');
        } else
        {            
            document.getElementById('salida').value = encriptar(textoUsuario);
            divSinResultado.style.display = 'none';
            divResultado.style.display = 'flex';
        }   
                                    } else
    {
        divSinResultado.style.display = 'flex';
        divResultado.style.display = 'none';         
    }
}

function tieneMayusculasOAcentos(texto){
    var tieneMayusculas = /[A-Z]/.test(texto);
    var tieneAcentos = /[áéíóúÁÉÍÓÚüÜ]/.test(texto);
    var resultado = false;
    if (tieneMayusculas || tieneAcentos) {
        resultado = true;
    }
    else {resultado = false;}
    return resultado;
}

function encriptar(texto){
    var textoSalida = '';
    for (let i = 0; i< texto.length; i++) {
        var caracterEntrada = texto[i];
        var caracterSalida = '';
        /*ENCRIPTADOR*/
        if (caracterEntrada == 'e') {
            caracterSalida = 'enter';
        } else if (caracterEntrada == 'i')
            {
                caracterSalida = 'imes';
            } else if (caracterEntrada == 'a')
            {
                caracterSalida = 'ai';
            } else if (caracterEntrada == 'o')
            {
                caracterSalida = 'ober';
            } else if (caracterEntrada == 'u')
            {
                caracterSalida = 'ufat';
            } else {
                caracterSalida = caracterEntrada;
            }
            textoSalida += caracterSalida;
    }    
    return textoSalida;
}

function desencriptar(texto){
    var textoSalida = '';
    for (let i = 0; i< texto.length; i++) {
        var caracterEntrada = texto[i];
        var caracterSalida = '';
        /*ENCRIPTADOR*/
        if (caracterEntrada == 'e') {
            caracterSalida = 'enter';
        } else if (caracterEntrada == 'i')
            {
                caracterSalida = 'imes';
            } else if (caracterEntrada == 'a')
            {
                caracterSalida = 'ai';
            } else if (caracterEntrada == 'o')
            {
                caracterSalida = 'ober';
            } else if (caracterEntrada == 'u')
            {
                caracterSalida = 'ufat';
            } else {
                caracterSalida = caracterEntrada;
            }
            textoSalida += caracterSalida;
    }    
    return textoSalida;
}