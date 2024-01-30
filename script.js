const d = document;

function valores(texto) {
  d.querySelector("#texto-entrada").value = "";
  d.querySelector("#texto-salida").value = texto;
  d.querySelector(".texto-salida").classList.remove("none");
  d.querySelector(".campo-vacio").classList.add("none");
  d.querySelector("#btn-copiar").classList.remove("none");
}

function encriptarTexto() {
  let $texto = d.querySelector("#texto-entrada").value.toLowerCase(),
    textoCodificado = $texto
      .replace(/a/gi, "ai")
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  valores(textoCodificado);
}

function copiarTexto() {
  let $textoSalida = d.querySelector("#texto-salida");
  $textoSalida.select();
  $textoSalida.setSelectionRange(0, 99999);
  navigator.clipboard.writeText($textoSalida.value);
  alert("Texto Copiado...");
  d.querySelector("#texto-salida").value = "";
}

function desencriptarTexto() {
  let $textoCodificado = d.querySelector("#texto-entrada").value.toLowerCase(),
    textoDesencriptado = $textoCodificado
      .replace(/ai/gi, "a")
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  valores(textoDesencriptado);
}
