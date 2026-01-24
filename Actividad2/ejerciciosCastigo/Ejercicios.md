# Ejercicios DOM con inputs (nivel medio)

Cada ejercicio supone:
- Un archivo HTML con uno o varios `<input>` y un área de salida (`<div>`, `<p>`, etc.).
- Un archivo JS donde escribes la lógica.
- Puedes probar cosas en la consola (leer elementos, modificar valores, llamar funciones) y luego dejar el código final en el archivo JS.

---

## 1. Suma de dos números con validación

**Enunciado**  
Crea una página con:
- Dos inputs de tipo `number` (`#numA`, `#numB`).
- Un botón “Calcular”.
- Un `<p id="resultado">` para mostrar el resultado.

Al hacer clic en el botón:
- Si ambos valores son números válidos, muestra la suma.
- Si falta alguno o no es número, muestra un mensaje de error.

**Posibles entradas**

- `numA = 10`, `numB = 5`  
- `numA = ""`, `numB = 3`  
- `numA = "abc"`, `numB = 7`

**Salida esperada**

- Para `10` y `5`:  
  `Resultado: 15`
- Para `""` y `3`:  
  `Error: Ingresa ambos números.`
- Para `"abc"` y `7`:  
  `Error: Los valores deben ser numéricos.`

---

## 2. Calculadora de IMC (Índice de Masa Corporal)

**Enunciado**  
Crea una página con:
- Un input `number` para peso en kg (`#peso`).
- Un input `number` para altura en metros (`#altura`).
- Un botón “Calcular IMC”.
- Un `<p id="imcResultado">` para mostrar IMC y una categoría básica.

Fórmula:  
IMC = peso / (altura²)

Categorías (simplificadas):
- `< 18.5` → “Bajo peso”
- `18.5 - 24.9` → “Normal”
- `25 - 29.9` → “Sobrepeso”
- `>= 30` → “Obesidad”

**Posibles entradas**

- `peso = 70`, `altura = 1.75`  
- `peso = 50`, `altura = 1.60`  
- `peso = 95`, `altura = 1.70`

**Salida esperada**

- Para `70` y `1.75`:  
  `IMC: 22.86 (Normal)`
- Para `50` y `1.60`:  
  `IMC: 19.53 (Normal)`  
- Para `95` y `1.70`:  
  `IMC: 32.87 (Obesidad)`

*(Puedes redondear a 2 decimales.)*

---

## 3. Contador de caracteres y límite

**Enunciado**  
Crea una página con:
- Un `<textarea id="mensaje">` con `maxlength="100"`.
- Un `<span id="contador">` para mostrar “X / 100”.
- Un `<p id="alerta">` para mensajes.

Cada vez que el usuario escriba (evento `input`):
- Actualiza el contador con la cantidad actual de caracteres.
- Si llega a 100 caracteres, muestra un mensaje en `#alerta` que diga “Has llegado al límite”.

**Posibles entradas**

- Mensaje de 20 caracteres.  
- Mensaje de 100 caracteres.

**Salida esperada**

- Para 20 caracteres:  
  `contador: 20 / 100`  
  `alerta: ""` (vacío)
- Para 100 caracteres:  
  `contador: 100 / 100`  
  `alerta: "Has llegado al límite"`

---

## 4. Filtro simple de lista (búsqueda por texto)

**Enunciado**  
Crea una página con:
- Un input de texto `#filtro`.
- Una lista `<ul id="listaNombres">` con varios `<li>` fijos (ej: “Ana”, “Pedro”, “María”, “Luis”).
- Un `<p id="mensajeFiltro">` para mensajes opcionales.

Cada vez que el usuario escriba en `#filtro`:
- Muestra solo los `li` cuyo texto contenga el texto del filtro (ignora mayúsculas/minúsculas).
- Si el filtro está vacío, muestra todos los elementos.
- Si no hay coincidencias, muestra un mensaje “No se encontraron resultados”.

**Posibles entradas**

- Filtro: `"a"`  
- Filtro: `"an"`  
- Filtro: `"zzz"`

**Salida esperada**

- Para `"a"`: se muestran “Ana”, “María”, “Luis” (si contiene “a” según tus datos).  
- Para `"an"`: se muestra “Ana”.  
- Para `"zzz"`: se ocultan todos y `mensajeFiltro` muestra “No se encontraron resultados”.

---

## 5. Formateador de nombre completo

**Enunciado**  
Crea una página con:
- Input `#nombre` (primer nombre).
- Input `#apellidoPaterno`.
- Input `#apellidoMaterno`.
- Botón “Formatear”.
- `<p id="nombreCompleto">` para mostrar resultado.

Al hacer clic:
- Toma los valores, elimina espacios extra (trim).
- Si falta al menos nombre o apellido paterno, muestra error.
- Si todo está bien, muestra: `ApellidoPaterno ApellidoMaterno, Nombre`.

**Posibles entradas**

- `nombre = "Juan"`, `apellidoPaterno = "Pérez"`, `apellidoMaterno = "López"`  
- `nombre = " Ana "`, `apellidoPaterno = "  Díaz"`, `apellidoMaterno = ""`  

**Salida esperada**

- Primera entrada:  
  `Pérez López, Juan`
- Segunda entrada:  
  `Error: Ingresa al menos nombre y apellido paterno.`

---

## 6. Conversor de minutos a horas y minutos

**Enunciado**  
Crea una página con:
- Input `number` `#minutos`.
- Botón “Convertir”.
- `<p id="tiempoResultado">` para el resultado.

Cuando se hace clic:
- Si el valor no es número válido o es negativo, muestra error.
- Convierte a formato `X horas Y minutos`.

**Posibles entradas**

- `minutos = 130`  
- `minutos = 45`  
- `minutos = -10`

**Salida esperada**

- 130 → `2 horas 10 minutos`  
- 45 → `0 horas 45 minutos`  
- -10 → `Error: Ingresa un número de minutos válido.`

---

## 7. Validador simple de email

**Enunciado**  
Crea una página con:
- Input `type="email"` `#email`.
- Botón “Validar email”.
- `<p id="emailResultado">` para mostrar si es válido o no.

Al hacer clic:
- Si el campo está vacío, muestra “Ingresa un email”.
- Si no contiene al menos un “@” y un punto después, muestra “Email no válido”.
- Si pasa la validación básica, muestra “Email válido”.

*(No es una validación perfecta, solo algo básico.)*

**Posibles entradas**

- `email = ""`  
- `email = "usuario"`  
- `email = "usuario@dominio"`  
- `email = "usuario@dominio.com"`

**Salida esperada**

- `""` → `Ingresa un email`  
- `"usuario"` → `Email no válido`  
- `"usuario@dominio"` → `Email no válido`  
- `"usuario@dominio.com"` → `Email válido`

---

## 8. Calculadora de promedio de tres calificaciones

**Enunciado**  
Crea una página con:
- Tres inputs `number`: `#cal1`, `#cal2`, `#cal3`.
- Botón “Calcular promedio”.
- `<p id="promedioResultado">` para mostrar promedio y estatus.

Reglas:
- Si alguna calificación está fuera de 0–100, muestra error.
- Promedio:
  - `>= 70` → “Aprobado”
  - `< 70` → “Reprobado”

**Posibles entradas**

- `cal1 = 80`, `cal2 = 90`, `cal3 = 70`  
- `cal1 = 50`, `cal2 = 60`, `cal3 = 40`  
- `cal1 = 120`, `cal2 = 90`, `cal3 = 80`

**Salida esperada**

- Primer caso:  
  `Promedio: 80.00 (Aprobado)`
- Segundo caso:  
  `Promedio: 50.00 (Reprobado)`
- Tercer caso:  
  `Error: Las calificaciones deben estar entre 0 y 100.`

---

## 9. Convertidor de texto: mayúsculas, minúsculas y longitud

**Enunciado**  
Crea una página con:
- Un `<textarea id="textoOriginal">`.
- Tres botones:
  - “A mayúsculas”
  - “A minúsculas”
  - “Mostrar longitud”
- Un `<p id="textoResultado">` para mostrar resultado.

Comportamiento:
- “A mayúsculas”: muestra el texto en mayúsculas en `textoResultado`.
- “A minúsculas”: muestra el texto en minúsculas.
- “Mostrar longitud”: muestra `Longitud: X caracteres`.

**Posibles entradas**

Texto: `"Hola Mundo"`  

**Salida esperada**

- Botón “A mayúsculas” → `HOLA MUNDO`  
- Botón “A minúsculas” → `hola mundo`  
- Botón “Mostrar longitud” → `Longitud: 10 caracteres`

---

## 10. Calculadora de descuento

**Enunciado**  
Crea una página con:
- Input `number` `#precio` (precio original).
- Input `number` `#descuento` (porcentaje de descuento, 0–100).
- Botón “Aplicar descuento”.
- `<p id="descuentoResultado">` para mostrar resultado.

Al hacer clic:
- Valida que el precio sea > 0 y que el descuento esté entre 0 y 100.
- Calcula el precio final: `precioFinal = precio * (1 - descuento/100)`.
- Muestra: `Precio original: X`, `Descuento: Y%`, `Precio final: Z`.

**Posibles entradas**

- `precio = 1000`, `descuento = 20`  
- `precio = 500`, `descuento = 0`  
- `precio = -10`, `descuento = 50`  
- `precio = 100`, `descuento = 150`

**Salida esperada**

- 1000 y 20 →  
  `Precio original: 1000`  
  `Descuento: 20%`  
  `Precio final: 800`
- 500 y 0 →  
  `Precio original: 500`  
  `Descuento: 0%`  
  `Precio final: 500`
- -10 y 50 →  
  `Error: El precio debe ser mayor que 0.`
- 100 y 150 →  
  `Error: El descuento debe estar entre 0 y 100.`

---
