const emailInput = document.getElementById("email");
const btnValidar = document.getElementById("btnValidar");
const resultado = document.getElementById("emailResultado");

btnValidar.addEventListener("click", () => {
  const email = emailInput.value.trim();

  // Campo vacío
  if (email === "") {
    resultado.textContent = "Ingresa un email";
    resultado.style.color = "red";
    return;
  }

  // Validación básica:
  // debe tener @ y un punto después del @
  const tieneArroba = email.includes("@");
  const indiceArroba = email.indexOf("@");
  const tienePuntoDespues =
    indiceArroba !== -1 && email.indexOf(".", indiceArroba) !== -1;

  if (!tieneArroba || !tienePuntoDespues) {
    resultado.textContent = "Email no válido";
    resultado.style.color = "red";
    return;
  }

  resultado.textContent = "Email válido";
  resultado.style.color = "green";
});
