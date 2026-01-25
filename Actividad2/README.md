# Actividad 2: Gestión de Tareas y Ejercicios de Desarrollo Web

## Descripción del Proyecto Principal

Este proyecto es una aplicación web completa de gestión de tareas (To-Do List) que permite a los usuarios agregar, editar, eliminar y marcar tareas como completadas. Utiliza JavaScript moderno con clases ES6, manipulación del DOM y almacenamiento local (localStorage) para persistir los datos entre sesiones del navegador.

La aplicación incluye validación de entradas, interfaz responsiva y una experiencia de usuario intuitiva con botones para acciones específicas.

Archivos principales:
- `index.html`: Estructura HTML con formulario de entrada y lista de tareas.
- `style.css`: Estilos CSS responsivos con diseño moderno y centrado.
- `script.js`: Lógica JavaScript con clases para Tarea y GestorDeTareas, manejo de eventos y renderizado dinámico.

## Características Principales

- **Agregar Tareas**: Input de texto con validación para evitar tareas vacías.
- **Marcar como Completadas**: Clic en el texto de la tarea para alternar estado (tachado).
- **Editar Tareas**: Botón de editar que abre un prompt para modificar el nombre.
- **Eliminar Tareas**: Botón para remover tareas de la lista.
- **Persistencia de Datos**: Uso de localStorage para guardar tareas entre sesiones.
- **Interfaz Responsiva**: Diseño adaptable a móviles con media queries.
- **Validación de Entradas**: Mensajes de error para tareas vacías.
- **Estilos Visuales**: Tareas completadas aparecen tachadas y en gris.

## Estructura del Código

### index.html
Define la estructura básica:
- Contenedor principal centrado.
- Formulario con input y botón "Agregar tarea".
- Mensaje de error para validaciones.
- Lista desordenada para mostrar tareas.

### style.css
Estilos completos:
- Reset con box-sizing.
- Cuerpo centrado con flexbox y fondo gris.
- Contenedor blanco con sombra y max-width.
- Formulario en flex horizontal (columna en móvil).
- Lista sin estilo, items con bordes y flex para acciones.
- Botones coloreados: verde para agregar, azul para editar, rojo para eliminar.
- Estados: completadas con tachado.

### script.js
Lógica avanzada:
- **Clase Tarea**: Constructor con id (timestamp), nombre, completada. Métodos toggleEstado y editar.
- **Clase GestorDeTareas**: Maneja array de tareas, carga/guarda en localStorage. Métodos agregar, eliminar, obtener.
- **DOM Manipulation**: Selecciona elementos, instancia gestor.
- **Función renderTareas**: Limpia lista y recrea elementos li con event listeners para marcar, editar, eliminar.
- **Evento Agregar**: Valida input, crea nueva Tarea, agrega al gestor, limpia input, re-renderiza.
- **Carga Inicial**: Llama renderTareas al cargar.

## Cómo Funciona

1. Usuario escribe tarea y hace clic en "Agregar".
2. Si vacío, muestra error; sino, agrega a lista y localStorage.
3. Clic en texto: marca/desmarca completada.
4. Botón "Editar": prompt para nuevo nombre.
5. Botón "Eliminar": remueve tarea.
6. Datos persisten al recargar página.

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y formularios.
- **CSS3**: Flexbox, media queries, transiciones.
- **JavaScript ES6**: Clases, arrow functions, localStorage, DOM API.

## Requisitos del Sistema

- Navegador moderno con soporte para ES6 y localStorage.
- Sin dependencias externas; aplicación vanilla.

## Instalación y Uso

1. Clona o descarga el proyecto.
2. Abre `index.html` en un navegador.
3. Agrega tareas y gestiona la lista.

## Carpeta ejerciciosCastigo

Esta carpeta contiene 10 ejercicios individuales de desarrollo web frontend, cada uno en su propia subcarpeta (ejercicio1 a ejercicio10). Cada ejercicio es una aplicación web simple enfocada en un concepto específico:

- **Ejercicio 1**: Contador simple con botones incrementar/decrementar.
- **Ejercicio 2**: Generador de colores aleatorios con cambio de fondo.
- **Ejercicio 3**: Contador de caracteres en textarea con límite.
- **Ejercicio 4**: Filtro de lista de nombres en tiempo real.
- **Ejercicio 5**: Formateador de nombres completos (Apellido, Nombre).
- **Ejercicio 6**: Conversor de minutos a horas y minutos.
- **Ejercicio 7**: Validador básico de direcciones de email.
- **Ejercicio 8**: Calculadora de promedio de calificaciones con estatus.
- **Ejercicio 9**: Convertidor de texto (mayúsculas, minúsculas, longitud).
- **Ejercicio 10**: Calculadora de descuentos porcentuales.

Cada ejercicio incluye `index.html`, `style.css`, `script.js` y un `README.md` detallado explicando su funcionalidad.

Estos ejercicios sirven como práctica para conceptos fundamentales de JavaScript, CSS y HTML, y pueden usarse como referencia o para aprendizaje.

## Posibles Mejoras Futuras

- Agregar fechas de vencimiento a tareas.
- Categorías o etiquetas para tareas.
- Sincronización con backend o APIs.
- Notificaciones push.
- Modo oscuro.
- Exportar/importar tareas.

## Conclusión

Este proyecto combina una aplicación principal robusta de gestión de tareas con una colección de ejercicios prácticos, demostrando habilidades en desarrollo web moderno con JavaScript vanilla. Es ideal para portfolios o como base para aplicaciones más complejas.