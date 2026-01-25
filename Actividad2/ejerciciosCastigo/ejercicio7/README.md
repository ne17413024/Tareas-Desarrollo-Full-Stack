# Ejercicio 7: Validador de Email

## Descripción del Proyecto

Este proyecto es una aplicación web que valida direcciones de correo electrónico de manera básica. El usuario ingresa un email en un campo de entrada, hace clic en un botón de validación, y la aplicación verifica si cumple con criterios simples: debe contener un símbolo "@" y al menos un punto "." después del "@".

Si el email es válido, se muestra un mensaje en verde; si no, en rojo. También maneja el caso de campo vacío.

Los archivos incluyen:
- `index.html`: Estructura con input de tipo email y botón.
- `style.css`: Estilos para la interfaz centrada.
- `script.js`: Lógica de validación básica.

## Características Principales

- **Input de Email**: Campo específico para emails con placeholder.
- **Validación Simple**: Verifica presencia de "@" y "." posterior.
- **Mensajes de Retroalimentación**: Indica si es válido, inválido o faltante.
- **Colores Indicativos**: Verde para válido, rojo para errores.
- **Interfaz Consistente**: Diseño similar a ejercicios anteriores con contenedor centrado.
- **Limpieza de Entrada**: Elimina espacios en blanco.

## Estructura del Código

### index.html
Estructura de la página:
- Contenedor con clase "container".
- Título `<h2>` "Validador de Email".
- Input de tipo "email" con ID "email" y placeholder.
- Botón con ID "btnValidar".
- Párrafo con ID "emailResultado" para mensajes.
- Scripts incluidos.

### style.css
Estilos visuales:
- Cuerpo centrado con flexbox.
- Contenedor blanco con sombra.
- Input ancho completo.
- Botón en naranja con hover.
- Resultado centrado y en negrita.

### script.js
Lógica de validación:
- Selecciona elementos.
- Event listener en botón.
- Al clic:
  - Obtiene email y lo limpia.
  - Si vacío, mensaje "Ingresa un email" en rojo.
  - Verifica "@" presente.
  - Verifica "." después del "@" usando indexOf.
  - Si ambas condiciones, "Email válido" en verde; sino, "Email no válido" en rojo.

## Cómo Funciona

1. Usuario ingresa email.
2. Clic en "Validar email".
3. Si vacío, pide ingresar email.
4. Verifica formato básico: @ y . después.
5. Muestra resultado coloreado.

## Tecnologías Utilizadas

- **HTML5**: Input de tipo email.
- **CSS3**: Layout y estilos.
- **JavaScript**: Validación con métodos de string.

## Requisitos del Sistema

- Navegador moderno.
- Sin dependencias.

## Instalación y Uso

1. Descarga archivos.
2. Abre `index.html`.
3. Ingresa email y valida.

## Posibles Mejoras Futuras

- Usar expresiones regulares para validación más robusta.
- Verificar dominio real.
- Soporte para múltiples emails.
- Integración con APIs de validación.

## Conclusión

Este ejercicio introduce validación básica de formularios en JavaScript, útil para formularios web simples.