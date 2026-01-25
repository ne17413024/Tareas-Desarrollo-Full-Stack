# Ejercicio 5: Formateador de Nombre

## Descripción del Proyecto

Este proyecto es una aplicación web que permite formatear un nombre completo en un estilo formal, típicamente usado en contextos hispanohablantes. El usuario ingresa su nombre, apellido paterno y apellido materno (opcional), y al hacer clic en un botón, se genera el nombre formateado en el formato "Apellido Paterno Apellido Materno, Nombre" (si hay apellido materno) o "Apellido Paterno, Nombre" (si no).

El proyecto incluye validación básica para asegurar que se proporcionen al menos el nombre y el apellido paterno. El resultado se muestra en color verde si es exitoso, o en rojo si hay un error.

Los archivos principales son:
- `index.html`: Estructura HTML con los campos de entrada y el botón.
- `style.css`: Estilos para la interfaz centrada y moderna.
- `script.js`: Lógica para validar entradas y formatear el nombre.

## Características Principales

- **Campos de Entrada**: Tres inputs de texto para nombre, apellido paterno y apellido materno (este último opcional).
- **Validación de Campos Obligatorios**: Verifica que nombre y apellido paterno no estén vacíos.
- **Formateo Automático**: Construye el nombre completo en el orden "Apellidos, Nombre".
- **Mensajes de Error y Éxito**: Muestra mensajes en colores diferentes (rojo para errores, verde para resultados).
- **Interfaz Intuitiva**: Diseño centrado con botones estilizados y hover effects.
- **Limpieza de Espacios**: Elimina espacios en blanco al inicio y final de las entradas.

## Estructura del Código

### index.html
Define la estructura de la página:
- Un contenedor principal con clase "container".
- Un encabezado `<h2>` con el título "Formatear nombre completo".
- Tres campos `<input>` para nombre, apellido paterno y apellido materno, con placeholders descriptivos.
- Un botón `<button>` con ID "btnFormatear" para activar el formateo.
- Un párrafo `<p>` con ID "nombreCompleto" para mostrar el resultado.
- Enlaces a CSS y JS.

### style.css
Proporciona estilos visuales:
- Cuerpo centrado con flexbox y fondo gris claro.
- Contenedor con fondo blanco, padding, bordes redondeados y sombra.
- Inputs con ancho completo, padding y márgenes.
- Botón estilizado en púrpura con efecto hover.
- Resultado centrado, en negrita.

### script.js
Implementa la lógica de formateo:
- Selecciona todos los elementos del DOM necesarios.
- Agrega un event listener al botón para el evento "click".
- Al hacer clic:
  - Obtiene y limpia los valores de los inputs.
  - Valida que nombre y apellido paterno no estén vacíos; si no, muestra error en rojo.
  - Construye el nombre formateado: inicia con apellido paterno.
  - Si hay apellido materno, lo agrega.
  - Agrega ", Nombre" al final.
  - Muestra el resultado en verde.

## Cómo Funciona

1. El usuario ingresa su nombre, apellido paterno y opcionalmente apellido materno.
2. Hace clic en "Formatear".
3. Si faltan nombre o apellido paterno, aparece un mensaje de error en rojo.
4. Si los campos requeridos están presentes, se genera el nombre formateado y se muestra en verde.
5. El formato resultante sigue la convención "Apellidos, Nombre".

## Tecnologías Utilizadas

- **HTML5**: Para formularios y estructura semántica.
- **CSS3**: Para layout responsivo y estilos interactivos.
- **JavaScript (ES6)**: Para validación, manipulación de strings y eventos.

## Requisitos del Sistema

- Navegador moderno con soporte para HTML5, CSS3 y JavaScript.
- Sin dependencias externas; aplicación vanilla.

## Instalación y Uso

1. Descarga los archivos del proyecto.
2. Abre `index.html` en un navegador.
3. Completa los campos y haz clic en "Formatear" para ver el resultado.

## Posibles Mejoras Futuras

- Agregar más validaciones, como verificar caracteres especiales o longitudes.
- Permitir selección de formato (ej. "Nombre Apellidos").
- Agregar un botón para limpiar los campos.
- Soporte para múltiples nombres o títulos.
- Integración con APIs para validación de nombres reales.

## Conclusión

Este ejercicio demuestra el manejo de formularios web, validación de entradas del usuario y manipulación de strings en JavaScript. Es útil para entender cómo procesar y formatear datos de usuario en aplicaciones web simples.