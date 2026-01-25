const precioInput = document.getElementById("precio");
const descuentoInput = document.getElementById("descuento");
const btnDescuento = document.getElementById("btnDescuento");
const resultado = document.getElementById("descuentoResultado");

btnDescuento.addEventListener("click", () => {
  const precio = Number(precioInput.value);
  const descuento = Number(descuentoInput.value);

  // Validar precio
  if (isNaN(precio) || precio <= 0) {
    resultado.textContent = "Error: El precio debe ser mayor que 0.";
    resultado.style.color = "red";
    return;
  }

  // Validar descuento
  if (isNaN(descuento) || descuento < 0 || descuento > 100) {
    resultado.textContent =
      "Error: El descuento debe estar entre 0 y 100.";
    resultado.style.color = "red";
    return;
  }

  const precioFinal = precio * (1 - descuento / 100);

  resultado.innerHTML = `
    Precio original: ${precio}<br>
    Descuento: ${descuento}%<br>
    Precio final: ${precioFinal.toFixed(2)}
  `;
  resultado.style.color = "green";
});
