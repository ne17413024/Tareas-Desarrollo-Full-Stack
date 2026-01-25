const inputFiltro = document.getElementById("filtro");
const lista = document.getElementById("listaNombres");
const items = lista.getElementsByTagName("li");
const mensaje = document.getElementById("mensajeFiltro");

inputFiltro.addEventListener("input", () => {
  const textoFiltro = inputFiltro.value.toLowerCase();
  let coincidencias = 0;

  for (let item of items) {
    const nombre = item.textContent.toLowerCase();

    if (textoFiltro === "" || nombre.includes(textoFiltro)) {
      item.style.display = "block";
      coincidencias++;
    } else {
      item.style.display = "none";
    }
  }

  // Mensaje cuando no hay coincidencias
  if (coincidencias === 0) {
    mensaje.textContent = "No se encontraron resultados";
  } else {
    mensaje.textContent = "";
  }
});
