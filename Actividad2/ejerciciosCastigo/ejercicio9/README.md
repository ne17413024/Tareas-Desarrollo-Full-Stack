# Ejercicio 9: Convertidor de Texto

## Descripción del Proyecto

Este proyecto es una aplicación web que permite manipular texto ingresado por el usuario. Incluye un área de texto donde el usuario escribe, y tres botones para convertir el texto a mayúsculas, a minúsculas, o mostrar la longitud del texto en caracteres.

El resultado de cada acción se muestra en un párrafo debajo. Es una herramienta simple para transformación de texto.

Archivos:
- `index.html`: Estructura con textarea y botones.
- `style.css`: Estilos centrados con botones en fila.
- `script.js`: Lógica para cada botón.

## Características Principales

- **Textarea para Entrada**: Área de texto no redimensionable.
- **Tres Botones**: Mayúsculas, minúsculas, longitud.
- **Resultados Inmediatos**: Muestra transformación o conteo al clic.
- **Interfaz Compacta**: Botones en flexbox horizontal.
- **Sin Validación**: Funciona con cualquier texto.

## Estructura del Código

### index.html
Estructura:
- Contenedor.
- Título "Convertidor de texto".
- Textarea con ID "textoOriginal".
- Div "botones" con tres botones.
- Párrafo para resultado.

### style.css
Estilos:
- Cuerpo centrado.
- Contenedor blanco.
- Textarea ancho completo.
- Botones en fila con flex, gris con hover.

### script.js
Lógica:
- Selecciona textarea y resultado.
- Selecciona botones.
- Event listeners:
  - btnMayus: resultado = texto.value.toUpperCase()
  - btnMinus: resultado = texto.value.toLowerCase()
  - btnLongitud: resultado = `Longitud: ${texto.value.length} caracteres`

## Cómo Funciona

1. Escribe texto en el textarea.
2. Clic en botón deseado.
3. Resultado aparece abajo.

## Tecnologías Utilizadas

- **HTML5**: Textarea y botones.
- **CSS3**: Flexbox para botones.
- **JavaScript**: Métodos de string.

## Requisitos del Sistema

- Navegador moderno.
- Sin dependencias.

## Instalación y Uso

1. Descarga archivos.
2. Abre `index.html`.
3. Escribe y convierte texto.

## Posibles Mejoras Futuras

- Agregar más transformaciones (invertir, capitalizar).
- Copiar resultado al portapapeles.
- Contar palabras o líneas.
- Historial de conversiones.

## Conclusión

Este ejercicio demuestra manipulación básica de strings en JavaScript y eventos de botones.