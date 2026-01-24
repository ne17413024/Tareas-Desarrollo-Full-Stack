const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const btnIMC = document.getElementById("btnIMC");
const resultado = document.getElementById("imcResultado");

btnIMC.addEventListener("click", () => {
  const peso = Number(pesoInput.value);
  const altura = Number(alturaInput.value);

  // Validación básica
  if (!peso || !altura) {
    resultado.textContent = "Error: Ingresa peso y altura.";
    resultado.style.color = "red";
    return;
  }

  if (peso <= 0 || altura <= 0) {
    resultado.textContent = "Error: Los valores deben ser mayores a cero.";
    resultado.style.color = "red";
    return;
  }

  // Cálculo IMC
  const imc = peso / (altura * altura);
  const imcRedondeado = imc.toFixed(2);

  let categoria = "";

  if (imc < 18.5) {
    categoria = "Bajo peso";
  } else if (imc < 25) {
    categoria = "Normal";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidad";
  }

  resultado.textContent = `IMC: ${imcRedondeado} (${categoria})`;
  resultado.style.color = "green";
});
