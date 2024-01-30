const d = document;

function cambiosUi(texto) {
  d.querySelector("#texto-salida").value = texto;
  d.querySelector(".texto-salida").classList.remove("none");
  d.querySelector(".campo-vacio").classList.add("none");
  d.querySelector("#btn-copiar").classList.remove("none");
}

function encriptarTexto() {
  let $texto = d.querySelector("#texto-entrada").value.toLowerCase(),
    textoCodificado = $texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  cambiosUi(textoCodificado);
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
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  cambiosUi(textoDesencriptado);
}
