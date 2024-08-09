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

<<<<<<< HEAD
function desencriptarTexto(){
    var textoUsuario = document.getElementById('entrada').value;    
    if (textoUsuario != '') {
        if (tieneMayusculasOAcentos(textoUsuario)) {
            alert('El texto no puede contener ni mayúsculas ni acentos, por favor lea bien');
        } else
        {            
            document.getElementById('salida').value = desencriptar(textoUsuario);
            divSinResultado.style.display = 'none';
            divResultado.style.display = 'flex';
        }   
                                    } else
    {
        divSinResultado.style.display = 'flex';
        divResultado.style.display = 'none';         
    }
}       

=======
>>>>>>> 3de57863a740f9a21a2d94ca7e9465946bfc41d7
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
<<<<<<< HEAD
    let textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
return textoEncriptado;
}

function desencriptar(texto){
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

function copiarSalida() {
    let salida = document.getElementById('salida');
    salida.select();
    document.execCommand("copy");
    alert("Se ha copiado la salida al portapapeles");
}
=======
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
>>>>>>> 3de57863a740f9a21a2d94ca7e9465946bfc41d7
