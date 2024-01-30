const d = document;

function encriptarTexto() {
  let $texto = d.querySelector("#texto-entrada").value.toLowerCase(),
    textoCodificado = $texto
      .replace(/a/gi, "ai")
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  d.querySelector("#texto-entrada").value = "";
  d.querySelector("#texto-salida").value = textoCodificado;
  d.querySelector(".texto-salida").classList.remove("none");
  d.querySelector(".campo-vacio").classList.add("none");
  d.querySelector("#btn-copiar").classList.remove("none");
}

function copiarTexto() {
  let $textoSalida = d.querySelector("#texto-salida");
  $textoSalida.select();
  $textoSalida.setSelectionRange(0, 99999);
  navigator.clipboard.writeText($textoSalida.value);
  alert("Texto Copiado...");
  d.querySelector("#texto-salida").value = "";
}
