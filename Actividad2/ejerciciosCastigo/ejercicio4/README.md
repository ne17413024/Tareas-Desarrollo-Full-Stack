# Ejercicio 4: Filtro de Lista

## Descripción del Proyecto

Este proyecto es una aplicación web que implementa un filtro dinámico para una lista de nombres. Permite al usuario escribir en un campo de búsqueda para filtrar los elementos de la lista en tiempo real, mostrando solo aquellos que coinciden con el texto ingresado. Si no hay coincidencias, se muestra un mensaje informativo.

El proyecto consta de tres archivos principales:
- `index.html`: Estructura HTML de la página, incluyendo la lista de nombres y el campo de filtro.
- `style.css`: Estilos CSS para la presentación visual y el layout.
- `script.js`: Lógica JavaScript que maneja el filtrado y la actualización de la interfaz.

## Características Principales

- **Campo de Búsqueda en Tiempo Real**: Un input de texto que filtra la lista a medida que el usuario escribe.
- **Filtrado Insensible a Mayúsculas**: La búsqueda no distingue entre mayúsculas y minúsculas.
- **Lista Estática de Nombres**: Incluye una lista predefinida de nombres (Ana, Pedro, María, Luis, Andrea, Carlos, Nata).
- **Ocultar/Mostrar Elementos**: Los elementos que no coinciden se ocultan dinámicamente.
- **Mensaje de No Resultados**: Si ningún nombre coincide con el filtro, aparece un mensaje en rojo.
- **Interfaz Centrada y Limpia**: Diseño moderno con un contenedor centrado y sombras sutiles.

## Estructura del Código

### index.html
El archivo HTML establece la estructura de la página:
- Un contenedor principal (`<div class="container">`) que agrupa los elementos.
- Un encabezado `<h2>` con el título "Buscar nombre".
- Un campo de entrada `<input>` con ID "filtro" y un placeholder descriptivo.
- Una lista desordenada `<ul>` con ID "listaNombres", conteniendo varios elementos `<li>` con nombres.
- Un párrafo con ID "mensajeFiltro" para mostrar mensajes cuando no hay resultados.
- Enlaces a los archivos CSS y JS.

### style.css
Los estilos proporcionan una apariencia atractiva y funcional:
- El cuerpo utiliza flexbox para centrar el contenido en la pantalla con un fondo gris claro.
- El contenedor tiene un fondo blanco, padding, bordes redondeados y una sombra para un efecto de tarjeta.
- El input ocupa el ancho completo con padding y un margen inferior.
- La lista (`ul`) no tiene estilo de viñeta y padding cero.
- Cada elemento de lista (`li`) tiene padding y un borde inferior sutil para separación.
- El mensaje de filtro se centra, en negrita y en rojo cuando es visible.

### script.js
La lógica JavaScript implementa el filtrado:
- Selecciona el input de filtro, la lista, los elementos de lista y el elemento de mensaje.
- Agrega un event listener al input para el evento "input".
- En cada cambio:
  - Convierte el texto del filtro a minúsculas.
  - Inicializa un contador de coincidencias.
  - Itera sobre cada elemento de la lista:
    - Convierte el nombre a minúsculas.
    - Si el filtro está vacío o el nombre incluye el filtro, muestra el elemento y incrementa coincidencias.
    - De lo contrario, oculta el elemento.
  - Si no hay coincidencias, muestra "No se encontraron resultados"; de lo contrario, limpia el mensaje.

## Cómo Funciona

1. El usuario abre la página y ve una lista completa de nombres y un campo de búsqueda.
2. Al escribir en el campo de búsqueda, la lista se filtra automáticamente.
3. Los nombres que contienen el texto escrito (parcial o completo) permanecen visibles.
4. Los nombres que no coinciden se ocultan.
5. Si ningún nombre coincide, aparece un mensaje rojo indicando que no se encontraron resultados.
6. Si el usuario borra el texto del filtro, todos los nombres vuelven a ser visibles.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura semántica, incluyendo listas y formularios.
- **CSS3**: Para el diseño responsivo y estilizado, con flexbox para el layout.
- **JavaScript (ES6)**: Para la lógica de filtrado, manipulación del DOM y manejo de eventos.

## Requisitos del Sistema

- Navegador web moderno compatible con HTML5, CSS3 y JavaScript.
- No requiere dependencias externas; es una aplicación vanilla JavaScript.

## Instalación y Uso

1. Descarga o clona los archivos del proyecto.
2. Abre `index.html` en un navegador web.
3. Escribe en el campo de búsqueda para filtrar la lista de nombres.

## Posibles Mejoras Futuras

- Agregar más nombres o permitir la carga dinámica desde un archivo o API.
- Implementar un botón para limpiar el filtro.
- Agregar animaciones CSS para transiciones suaves al mostrar/ocultar elementos.
- Soporte para filtrado por múltiples criterios o campos.
- Integración con un backend para listas dinámicas o búsqueda avanzada.

## Conclusión

Este ejercicio ilustra conceptos clave de desarrollo web frontend, como la manipulación del DOM en tiempo real, el manejo de eventos de entrada de usuario y el filtrado de datos. Es un ejemplo práctico de cómo crear interfaces interactivas sin necesidad de frameworks complejos, utilizando únicamente JavaScript vanilla.