const nombreInput = document.getElementById("nombre");
const apellidoPaternoInput = document.getElementById("apellidoPaterno");
const apellidoMaternoInput = document.getElementById("apellidoMaterno");
const btnFormatear = document.getElementById("btnFormatear");
const resultado = document.getElementById("nombreCompleto");

btnFormatear.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  const apellidoPaterno = apellidoPaternoInput.value.trim();
  const apellidoMaterno = apellidoMaternoInput.value.trim();

  // Validación
  if (nombre === "" || apellidoPaterno === "") {
    resultado.textContent = "Error: Ingresa al menos nombre y apellido paterno.";
    resultado.style.color = "red";
    return;
  }

  // Construir nombre completo
  let nombreFormateado = `${apellidoPaterno}`;

  if (apellidoMaterno !== "") {
    nombreFormateado += ` ${apellidoMaterno}`;
  }

  nombreFormateado += `, ${nombre}`;

  resultado.textContent = nombreFormateado;
  resultado.style.color = "green";
});