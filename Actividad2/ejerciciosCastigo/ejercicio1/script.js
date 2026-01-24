const numA = document.getElementById("numA");
const numB = document.getElementById("numB");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {
  const valorA = numA.value;
  const valorB = numB.value;

  // Validar si están vacíos
  if (valorA === "" || valorB === "") {
    resultado.textContent = "Error: Ingresa ambos números.";
    resultado.style.color = "red";
    return;
  }

  const a = Number(valorA);
  const b = Number(valorB);

  // Validar si son números
  if (isNaN(a) || isNaN(b)) {
    resultado.textContent = "Error: Los valores deben ser numéricos.";
    resultado.style.color = "red";
    return;
  }

  // Mostrar resultado
  resultado.textContent = `Resultado: ${a + b}`;
  resultado.style.color = "green";
});
