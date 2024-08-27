document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById("texto1");
    const defaultText = "Ingrese su texto aqui";
    const defaultInnerHTML = `
        <div class="presentacion_texto_2">
            <div class="imagen2">
                <img src="assets/Muñeco.png" width="100%">
            </div>
            <p class="texto4">Ningún mensaje fue encontrado</p>
            <p class="texto3">Ingresa el texto que desees encriptar o desencriptar.</p>
        </div>`;
    const presentacionTexto2 = document.querySelector(".margen2");

    presentacionTexto2.innerHTML = defaultInnerHTML;

    textarea.addEventListener("focus", function() {
        if (textarea.value === defaultText) {
            textarea.value = "";
        }
    });

    textarea.addEventListener("blur", function() {
        if (textarea.value.trim() === "") {
            textarea.value = defaultText;
            presentacionTexto2.innerHTML = defaultInnerHTML;
        }
    });
});


function Encriptar() {
    const texto = document.getElementById("texto1").value;
    if (validarTexto(texto)) {
        const textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        
        mostrarResultado(textoEncriptado);
    } else {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos.");
    }
}


function Desencriptar() {
    const texto = document.getElementById("texto1").value;
    if (validarTexto(texto)) {
        const textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        
        mostrarResultado(textoDesencriptado);
    } else {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos.");
    }
}


function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}


function mostrarResultado(resultado) {
    const presentacionTexto2 = document.querySelector(".margen2");
    presentacionTexto2.innerHTML = `
            <div class="presentacion_texto_3">
                <p class="texto5" id="resultadoTexto">${resultado}</p>
                <button onclick="Copiar();" class="Copiar">Copiar</button>
            </div>`;
}
function Copiar() {
    const textoParaCopiar = document.getElementById("resultadoTexto");

    const rango = document.createRange();
    rango.selectNodeContents(textoParaCopiar);

    const seleccion = window.getSelection();
    seleccion.removeAllRanges();
    seleccion.addRange(rango);

    try {
        document.execCommand("copy");
        alert("Texto copiado al portapapeles!");
    } catch (err) {
        console.error("Error al copiar el texto: ", err);
        alert("No se pudo copiar el texto. Inténtelo manualmente.");
    }

    seleccion.removeAllRanges();
}