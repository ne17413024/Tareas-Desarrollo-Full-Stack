# Ejercicio 6: Conversor de Minutos

## Descripción del Proyecto

Este proyecto es una aplicación web que convierte un número de minutos totales en horas y minutos equivalentes. El usuario ingresa una cantidad de minutos en un campo numérico, hace clic en un botón, y la aplicación calcula y muestra el resultado en formato "X horas Y minutos".

Incluye validación para asegurar que la entrada sea un número positivo válido. Si la entrada es inválida, se muestra un mensaje de error en rojo; de lo contrario, el resultado aparece en verde.

Los archivos del proyecto son:
- `index.html`: Estructura HTML con el input y el botón.
- `style.css`: Estilos para la interfaz centrada y atractiva.
- `script.js`: Lógica para validar y convertir los minutos.

## Características Principales

- **Entrada Numérica**: Campo de tipo number para ingresar minutos totales.
- **Validación de Entrada**: Verifica que sea un número no negativo; rechaza valores inválidos.
- **Conversión Matemática**: Calcula horas completas y minutos restantes usando división y módulo.
- **Mensajes de Estado**: Error en rojo para entradas inválidas, resultado en verde para conversiones exitosas.
- **Interfaz Simple**: Diseño centrado con botones estilizados y efectos hover.
- **Limpieza de Resultados**: Muestra el resultado formateado claramente.

## Estructura del Código

### index.html
Estructura básica de la página:
- Contenedor principal con clase "container".
- Encabezado `<h2>` con título "Conversor de minutos".
- Input numérico con ID "minutos" y placeholder.
- Botón con ID "btnConvertir" para iniciar la conversión.
- Párrafo con ID "tiempoResultado" para el output.
- Enlaces a CSS y JS.

### style.css
Estilos visuales:
- Cuerpo centrado con flexbox y fondo gris.
- Contenedor blanco con padding, bordes redondeados y sombra.
- Input con ancho completo y padding.
- Botón en color teal con hover effect.
- Resultado centrado y en negrita.

### script.js
Lógica de conversión:
- Selecciona elementos del DOM.
- Event listener en el botón para "click".
- Al activar:
  - Convierte el valor del input a número.
  - Valida: si no es número o negativo, muestra error en rojo.
  - Calcula horas = Math.floor(minutosTotales / 60).
  - Calcula minutos restantes = minutosTotales % 60.
  - Muestra resultado en formato "horas horas minutos minutos" en verde.

## Cómo Funciona

1. Usuario ingresa un número de minutos en el campo.
2. Clic en "Convertir".
3. Si el input no es válido (no numérico o negativo), error en rojo.
4. Si válido, calcula horas y minutos, muestra en verde.
5. Ejemplo: 125 minutos -> "2 horas 5 minutos".

## Tecnologías Utilizadas

- **HTML5**: Para formularios y inputs numéricos.
- **CSS3**: Para layout y estilos interactivos.
- **JavaScript (ES6)**: Para validación, cálculos matemáticos y manipulación del DOM.

## Requisitos del Sistema

- Navegador moderno con soporte para HTML5, CSS3 y JavaScript.
- Sin dependencias externas.

## Instalación y Uso

1. Descarga los archivos.
2. Abre `index.html` en un navegador.
3. Ingresa minutos y haz clic en "Convertir".

## Posibles Mejoras Futuras

- Agregar conversión inversa (horas a minutos).
- Permitir decimales para minutos.
- Agregar más unidades de tiempo (días, segundos).
- Historial de conversiones.
- Animaciones para transiciones.

## Conclusión

Este ejercicio muestra el manejo de inputs numéricos, validación de datos y operaciones matemáticas básicas en JavaScript, útil para aplicaciones de conversión de unidades.