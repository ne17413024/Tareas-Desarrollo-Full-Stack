const textarea = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const alerta = document.getElementById("alerta");

const LIMITE = 100;

textarea.addEventListener("input", () => {
  const caracteres = textarea.value.length;

  // Actualizar contador
  contador.textContent = `${caracteres} / ${LIMITE}`;

  // Mostrar alerta si llega al límite
  if (caracteres === LIMITE) {
    alerta.textContent = "Has llegado al límite";
  } else {
    alerta.textContent = "";
  }
});
