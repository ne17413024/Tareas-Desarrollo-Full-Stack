// ====== CLASE TAREA ======
class Tarea {
  constructor(nombre, completada = false) {
    this.id = Date.now();
    this.nombre = nombre;
    this.completada = completada;
  }

  toggleEstado() {
    this.completada = !this.completada;
  }

  editar(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
}

// ====== GESTOR DE TAREAS ======
class GestorDeTareas {
  constructor() {
    this.tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
    this.guardar();
  }

  eliminarTarea(id) {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.guardar();
  }

  obtenerTarea(id) {
    return this.tareas.find(t => t.id === id);
  }

  guardar() {
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }
}

// ====== DOM ======
const inputTarea = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");
const mensajeError = document.getElementById("mensajeError");

const gestor = new GestorDeTareas();

// ====== RENDER ======
const renderTareas = () => {
  lista.innerHTML = "";

  gestor.tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.className = tarea.completada ? "completada" : "";

    li.innerHTML = `
      <span>${tarea.nombre}</span>
      <div class="acciones">
        <button class="editar">Editar</button>
        <button class="eliminar">Eliminar</button>
      </div>
    `;

    // Marcar como completada
    li.querySelector("span").addEventListener("click", () => {
      tarea.toggleEstado();
      gestor.guardar();
      renderTareas();
    });

    // Editar
    li.querySelector(".editar").addEventListener("click", () => {
      const nuevoNombre = prompt("Editar tarea:", tarea.nombre);
      if (nuevoNombre && nuevoNombre.trim() !== "") {
        tarea.editar(nuevoNombre.trim());
        gestor.guardar();
        renderTareas();
      }
    });

    // Eliminar
    li.querySelector(".eliminar").addEventListener("click", () => {
      gestor.eliminarTarea(tarea.id);
      renderTareas();
    });

    lista.appendChild(li);
  });
};

// ====== EVENTO AGREGAR ======
btnAgregar.addEventListener("click", () => {
  const texto = inputTarea.value.trim();

  if (texto === "") {
    mensajeError.textContent = "No puedes agregar una tarea vacía.";
    return;
  }

  mensajeError.textContent = "";
  const nueva = new Tarea(texto);
  gestor.agregarTarea(nueva);
  inputTarea.value = "";
  renderTareas();
});

// ====== CARGA INICIAL ======
renderTareas();
