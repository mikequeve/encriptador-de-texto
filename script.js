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
  d.querySelector(".texto-salida").classList.toggle("active");
}
