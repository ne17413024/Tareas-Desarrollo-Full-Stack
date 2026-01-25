# Ejercicio 8: Calculadora de Promedio

## Descripción del Proyecto

Este proyecto es una aplicación web que calcula el promedio de tres calificaciones y determina si el estudiante aprueba o reprueba basado en un umbral de 70. El usuario ingresa tres calificaciones numéricas (0-100), hace clic en un botón, y la aplicación valida las entradas, calcula el promedio y muestra el resultado con el estatus.

Incluye validación para asegurar que las calificaciones sean números entre 0 y 100. El resultado muestra el promedio formateado a dos decimales y el estatus en colores: verde para aprobado, naranja para reprobado, rojo para errores.

Archivos:
- `index.html`: Estructura con tres inputs numéricos y botón.
- `style.css`: Estilos centrados.
- `script.js`: Lógica de cálculo y validación.

## Características Principales

- **Tres Inputs Numéricos**: Para calificaciones individuales.
- **Validación de Rango**: Asegura valores entre 0 y 100.
- **Cálculo de Promedio**: Suma dividida por 3, formateado a 2 decimales.
- **Estatus de Aprobación**: >=70 aprobado, <70 reprobado.
- **Mensajes Coloreados**: Verde/naranja para resultados, rojo para errores.
- **Interfaz Simple**: Diseño consistente.

## Estructura del Código

### index.html
Estructura:
- Contenedor.
- Título "Promedio de calificaciones".
- Tres inputs con IDs cal1, cal2, cal3.
- Botón "Calcular promedio".
- Párrafo para resultado.

### style.css
Estilos:
- Cuerpo centrado.
- Contenedor blanco.
- Inputs y botón estilizados.
- Resultado centrado.

### script.js
Lógica:
- Selecciona elementos.
- Event listener en botón.
- Al clic:
  - Convierte inputs a números.
  - Valida: números y en rango 0-100.
  - Si inválido, error en rojo.
  - Calcula promedio = (cal1+cal2+cal3)/3.
  - Formatea a 2 decimales.
  - Determina estatus: >=70 "Aprobado", else "Reprobado".
  - Muestra "Promedio: X.XX (estatus)" en color correspondiente.

## Cómo Funciona

1. Ingresa tres calificaciones.
2. Clic en "Calcular promedio".
3. Si inválidas, mensaje de error.
4. Calcula promedio, determina estatus.
5. Muestra resultado coloreado.

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
3. Ingresa calificaciones y calcula.

## Posibles Mejoras Futuras

- Permitir más calificaciones dinámicamente.
- Agregar pesos a calificaciones.
- Historial de cálculos.
- Exportar resultados.

## Conclusión

Este ejercicio muestra cálculos matemáticos y lógica condicional en JavaScript para aplicaciones educativas.