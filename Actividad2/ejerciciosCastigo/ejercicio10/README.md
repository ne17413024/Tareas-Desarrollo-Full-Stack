# Ejercicio 10: Calculadora de Descuento

## Descripción del Proyecto

Este proyecto es una aplicación web que calcula el precio final después de aplicar un descuento porcentual. El usuario ingresa el precio original y el porcentaje de descuento, hace clic en un botón, y la aplicación valida las entradas, calcula el precio final y muestra un resumen detallado.

Incluye validación para precio >0 y descuento 0-100%. El resultado muestra precio original, descuento y final en verde, errores en rojo.

Archivos:
- `index.html`: Estructura con dos inputs y botón.
- `style.css`: Estilos centrados.
- `script.js`: Lógica de cálculo y validación.

## Características Principales

- **Dos Inputs Numéricos**: Precio y descuento %.
- **Validación de Entradas**: Precio >0, descuento 0-100.
- **Cálculo de Descuento**: precioFinal = precio * (1 - descuento/100).
- **Resultado Detallado**: Muestra original, descuento y final.
- **Mensajes de Error**: En rojo para entradas inválidas.
- **Formateo**: Precio final a 2 decimales.

## Estructura del Código

### index.html
Estructura:
- Contenedor.
- Título "Calculadora de descuento".
- Inputs para precio y descuento.
- Botón "Aplicar descuento".
- Párrafo para resultado.

### style.css
Estilos:
- Cuerpo centrado.
- Contenedor blanco.
- Inputs y botón estilizados.
- Resultado en negrita.

### script.js
Lógica:
- Selecciona elementos.
- Event listener en botón.
- Al clic:
  - Convierte inputs a números.
  - Valida precio: >0.
  - Valida descuento: 0-100.
  - Si inválido, error en rojo.
  - Calcula precioFinal = precio * (1 - descuento / 100).
  - Muestra HTML con original, descuento, final en verde.

## Cómo Funciona

1. Ingresa precio y descuento.
2. Clic en "Aplicar descuento".
3. Si inválidos, mensaje de error.
4. Calcula y muestra resumen.

## Tecnologías Utilizadas

- **HTML5**: Inputs numéricos.
- **CSS3**: Layout.
- **JavaScript**: Cálculos y validación.

## Requisitos del Sistema

- Navegador moderno.
- Sin dependencias.

## Instalación y Uso

1. Descarga archivos.
2. Abre `index.html`.
3. Ingresa valores y calcula.

## Posibles Mejoras Futuras

- Agregar IVA o impuestos.
- Historial de cálculos.
- Múltiples descuentos.
- Exportar resultados.

## Conclusión

Este ejercicio muestra cálculos financieros básicos y validación en JavaScript.