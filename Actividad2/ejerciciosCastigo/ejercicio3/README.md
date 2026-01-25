# Ejercicio 3: Contador de Caracteres

## Descripción del Proyecto

Este proyecto es una aplicación web simple que implementa un contador de caracteres en tiempo real para un campo de texto (textarea). La aplicación permite al usuario escribir un mensaje con un límite máximo de 100 caracteres, mostrando dinámicamente el número de caracteres utilizados y alertando cuando se alcanza el límite.

El proyecto está compuesto por tres archivos principales:
- `index.html`: Estructura HTML de la página web.
- `style.css`: Estilos CSS para la presentación visual.
- `script.js`: Lógica JavaScript para la funcionalidad interactiva.

## Características Principales

- **Campo de Texto Limitado**: Un textarea con un máximo de 100 caracteres.
- **Contador en Tiempo Real**: Muestra el número actual de caracteres escritos seguido del límite total (ej. "45 / 100").
- **Alerta Visual**: Cuando el usuario alcanza exactamente 100 caracteres, se muestra un mensaje de alerta en rojo.
- **Interfaz Centrada y Responsiva**: La interfaz está centrada en la pantalla con un diseño limpio y moderno.
- **Sin Redimensionamiento**: El textarea no permite redimensionar para mantener la consistencia del diseño.

## Estructura del Código

### index.html
El archivo HTML define la estructura básica de la página:
- Un contenedor principal (`<div class="container">`) que agrupa todos los elementos.
- Un encabezado `<h2>` con el título "Mensaje".
- Un `<textarea>` con ID "mensaje", configurado con `maxlength="100"` y un placeholder descriptivo.
- Un div con clase "contador" que contiene un span con ID "contador" para mostrar el conteo.
- Un párrafo con ID "alerta" para mostrar mensajes de alerta.
- Enlaces a los archivos CSS y JS externos.

### style.css
Los estilos CSS proporcionan una apariencia moderna y centrada:
- El cuerpo (`body`) utiliza flexbox para centrar el contenido vertical y horizontalmente, con un fondo gris claro.
- El contenedor tiene un fondo blanco, padding, bordes redondeados y una sombra sutil para un efecto de tarjeta.
- El textarea ocupa el ancho completo, con altura fija y sin posibilidad de redimensionar.
- El contador se alinea a la derecha y tiene un tamaño de fuente pequeño.
- La alerta se muestra en rojo, centrada y en negrita cuando es visible.

### script.js
La lógica JavaScript maneja la interactividad:
- Selecciona los elementos DOM: textarea, contador y alerta.
- Define una constante `LIMITE` de 100 caracteres.
- Agrega un event listener al textarea para el evento "input".
- En cada cambio de entrada:
  - Calcula la longitud del texto actual.
  - Actualiza el texto del contador con el formato "caracteres / LIMITE".
  - Si la longitud es igual al límite, muestra "Has llegado al límite" en la alerta; de lo contrario, limpia la alerta.

## Cómo Funciona

1. El usuario abre la página web en un navegador.
2. Ve un campo de texto con un placeholder indicando el límite de caracteres.
3. Al escribir, el contador en la parte inferior derecha se actualiza en tiempo real.
4. Si el usuario intenta escribir más de 100 caracteres, el navegador lo previene debido al atributo `maxlength`.
5. Cuando alcanza exactamente 100 caracteres, aparece un mensaje de alerta en rojo debajo del contador.
6. El mensaje de alerta desaparece automáticamente si el usuario borra caracteres.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura semántica de la página.
- **CSS3**: Para el diseño y estilo, incluyendo flexbox para el layout.
- **JavaScript (ES6)**: Para la lógica interactiva, utilizando eventos y manipulación del DOM.

## Requisitos del Sistema

- Un navegador web moderno que soporte HTML5, CSS3 y JavaScript (Chrome, Firefox, Safari, Edge, etc.).
- No se requieren dependencias externas ni frameworks; es una aplicación vanilla.

## Instalación y Uso

1. Clona o descarga los archivos del proyecto.
2. Abre `index.html` en tu navegador web.
3. Comienza a escribir en el campo de texto para ver el contador en acción.

## Posibles Mejoras Futuras

- Agregar soporte para múltiples idiomas en los mensajes.
- Implementar un indicador visual (barra de progreso) para el conteo de caracteres.
- Permitir al usuario configurar el límite de caracteres dinámicamente.
- Agregar animaciones CSS para transiciones suaves en la alerta.
- Integrar con un backend para guardar mensajes o estadísticas.

## Conclusión

Este ejercicio demuestra conceptos fundamentales de desarrollo web frontend: manipulación del DOM con JavaScript, eventos de usuario, estilos CSS responsivos y estructura HTML semántica. Es un proyecto simple pero efectivo para practicar la integración de HTML, CSS y JavaScript en una aplicación interactiva.