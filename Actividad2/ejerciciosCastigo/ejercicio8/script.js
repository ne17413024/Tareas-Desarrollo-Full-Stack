const cal1Input = document.getElementById("cal1");
const cal2Input = document.getElementById("cal2");
const cal3Input = document.getElementById("cal3");
const btnPromedio = document.getElementById("btnPromedio");
const resultado = document.getElementById("promedioResultado");

btnPromedio.addEventListener("click", () => {
  const cal1 = Number(cal1Input.value);
  const cal2 = Number(cal2Input.value);
  const cal3 = Number(cal3Input.value);

  // Validar que sean números y estén en rango
  if (
    isNaN(cal1) || isNaN(cal2) || isNaN(cal3) ||
    cal1 < 0 || cal1 > 100 ||
    cal2 < 0 || cal2 > 100 ||
    cal3 < 0 || cal3 > 100
  ) {
    resultado.textContent =
      "Error: Las calificaciones deben estar entre 0 y 100.";
    resultado.style.color = "red";
    return;
  }

  const promedio = (cal1 + cal2 + cal3) / 3;
  const promedioFormateado = promedio.toFixed(2);

  const estatus = promedio >= 70 ? "Aprobado" : "Reprobado";

  resultado.textContent = `Promedio: ${promedioFormateado} (${estatus})`;
  resultado.style.color = promedio >= 70 ? "green" : "orange";
});
