const texto = document.getElementById("textoOriginal");
const resultado = document.getElementById("textoResultado");

const btnMayus = document.getElementById("btnMayus");
const btnMinus = document.getElementById("btnMinus");
const btnLongitud = document.getElementById("btnLongitud");

btnMayus.addEventListener("click", () => {
  resultado.textContent = texto.value.toUpperCase();
});

btnMinus.addEventListener("click", () => {
  resultado.textContent = texto.value.toLowerCase();
});

btnLongitud.addEventListener("click", () => {
  const longitud = texto.value.length;
  resultado.textContent = `Longitud: ${longitud} caracteres`;
});
