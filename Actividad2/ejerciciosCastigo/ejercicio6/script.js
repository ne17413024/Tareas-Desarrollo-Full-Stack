const minutosInput = document.getElementById("minutos");
const btnConvertir = document.getElementById("btnConvertir");
const resultado = document.getElementById("tiempoResultado");

btnConvertir.addEventListener("click", () => {
  const minutosTotales = Number(minutosInput.value);

  // Validación
  if (isNaN(minutosTotales) || minutosTotales < 0) {
    resultado.textContent = "Error: Ingresa un número de minutos válido.";
    resultado.style.color = "red";
    return;
  }

  const horas = Math.floor(minutosTotales / 60);
  const minutos = minutosTotales % 60;

  resultado.textContent = `${horas} horas ${minutos} minutos`;
  resultado.style.color = "green";
});
