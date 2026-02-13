# 📋 Actividad 4 - Sistema de Gestión de Usuarios y Productos

## 🎯 Descripción General del Proyecto

Este proyecto es una aplicación web completa de gestión de usuarios y productos, desarrollada como parte de la Actividad 4 del curso de Desarrollo Full Stack. La aplicación implementa un sistema de autenticación robusto con registro e inicio de sesión, junto con un módulo completo de gestión de productos (CRUD: Create, Read, Update, Delete).

La arquitectura sigue el patrón MVC (Model-View-Controller) utilizando Node.js como entorno de ejecución, Express.js como framework web, y MongoDB como base de datos. El frontend está construido con HTML, CSS y JavaScript vanilla, proporcionando una interfaz de usuario moderna y responsiva.

---

## 🖥️ Información del Servidor de Producción

### Especificaciones del Servidor

| Componente | Especificación |
|------------|----------------|
| **Sistema Operativo** | Debian 13 (Trixie) |
| **CPU** | 1 vCPU |
| **Memoria RAM** | 1 GB |
| **Puerto** | 3000 |
| **IP Pública** | 168.181.187.215 |

### Enlace de Acceso

🌐 **Acceso a la aplicación:** [http://168.181.187.215:3000/login](http://168.181.187.215:3000/login)

La aplicación está desplegada y accesible las 24 horas del día, los 7 días de la semana, en un servidor Debian 13 con recursos limitados pero suficientes para la operación de esta aplicación. El servidor está configurado para mantener la aplicación en ejecución de forma continua utilizando PM2 como gestor de procesos.

---

## ☁️ Plataforma de Cloud

Esta aplicación está hosteada en un servidor cloud privado con las siguientes características:

El servidor cloud proporciona una dirección IP pública estática (168.181.187.215) que permite el acceso a la aplicación desde cualquier ubicación con conexión a Internet. La plataforma cloud ofrece conectividad de red estable y ancho de banda suficiente para manejar las solicitudes de los usuarios de la aplicación.

Debian 13 (Trixie) fue seleccionado como sistema operativo por su estabilidad, seguridad y ligereza, características ideales para un servidor con recursos limitados de 1 vCPU y 1 GB de RAM. La distribución Debian es conocida por su robusto sistema de gestión de paquetes y su amplia comunidad de soporte.

---

## ⚙️ PM2 - Gestor de Procesos de Producción

### ¿Qué es PM2?

PM2 es un gestor de procesos de producción para aplicaciones Node.js. Proporciona características esenciales para mantener aplicaciones en ejecución continua, incluyendo reinicio automático en caso de fallos, balanceo de carga, y métricas de monitoreo.

### Instalación de PM2

```bash
npm install -g pm2
```

### Comandos Esenciales de PM2

```bash
# Iniciar la aplicación
pm2 start server.js

# Ver estado de procesos
pm2 status

# Ver logs en tiempo real
pm2 logs

# Reiniciar aplicación
pm2 restart server.js

# Detener aplicación
pm2 stop server.js

# Configurar inicio automático al reiniciar el servidor
pm2 startup
pm2 save
```

### Beneficios de Usar PM2 en Este Proyecto

1. **Reinicio Automático**: Si la aplicación falla o el servidor se reinicia, PM2 levantará automáticamente la aplicación sin intervención manual.

2. **Monitoreo en Tiempo Real**: PM2 proporciona métricas de uso de CPU y memoria, permitiendo supervisar el rendimiento de la aplicación.

3. **Gestión de Logs**: Los logs de la aplicación se almacenan y rotan automáticamente, facilitando la depuración.

4. **Modo Cluster**: PM2 puede ejecutar múltiples instancias de la aplicación para distribuir la carga entre los núcleos del CPU disponibles.

5. **Recarga en Caliente**: PM2 permite actualizar la aplicación sin downtime utilizando la funcionalidad de reload.

---

## 🏗️ Arquitectura del Proyecto

```
actividad4/
├── 📁 public/                  # Archivos estáticos del frontend
│   ├── login.html              # Página de inicio de sesión
│   ├── register.html          # Página de registro de usuarios
│   └── dashboard.html          # Dashboard principal (protegido)
├── 📁 src/                     # Código fuente del backend
│   ├── 📁 config/
│   │   └── db.js              # Configuración de conexión a MongoDB
│   ├── 📁 controllers/
│   │   ├── authController.js  # Controlador de autenticación
│   │   └── productController.js # Controlador de productos
│   ├── 📁 middlewares/
│   │   └── authMiddleware.js  # Middleware de verificación JWT
│   ├── 📁 models/
│   │   ├── Product.js          # Modelo de datos de Producto
│   │   └── User.js             # Modelo de datos de Usuario
│   ├── 📁 routes/
│   │   ├── authRoutes.js      # Rutas de autenticación
│   │   └── productRoutes.js    # Rutas de productos
│   └── app.js                  # Configuración principal de Express
├── 📁 tests/                   # Pruebas automatizadas con Jest
│   ├── auth.test.js            # Pruebas de autenticación
│   └── product.test.js         # Pruebas de productos
├── .env                        # Variables de entorno (producción)
├── .env.test                   # Variables de entorno (testing)
├── .gitignore                  # Archivos ignorados por Git
├── jest.config.js              # Configuración de Jest
├── package.json                # Dependencias y scripts del proyecto
├── package-lock.json           # Lock file de dependencias
└── server.js                   # Punto de entrada de la aplicación
```

---

## 📦 Dependencias del Proyecto

### Dependencias de Producción

| Paquete | Versión | Descripción |
|---------|---------|-------------|
| **bcryptjs** | ^3.0.3 | Biblioteca para el hash de contraseñas utilizando el algoritmo bcrypt. Garantiza que las contraseñas almacenadas en la base de datos estén cifradas de forma segura. |
| **cors** | ^2.8.6 | Middleware que habilita las solicitudes Cross-Origin Resource Sharing (CORS), permitiendo que el frontend acceda a la API desde diferentes dominios. |
| **dotenv** | ^17.3.1 | Carga variables de entorno desde un archivo .env, manteniendo información sensible como credenciales de base de datos fuera del código fuente. |
| **express** | ^5.2.1 | Framework web minimalista y flexible para Node.js que simplifica la creación de APIs y aplicaciones web. Proporciona enrutamiento, middleware y gestión de solicitudes HTTP. |
| **jsonwebtoken** | ^9.0.3 | Implementación de JSON Web Tokens (JWT) para autenticación sin estado. Genera tokens que verifican la identidad del usuario en cada solicitud. |
| **mongoose** | ^9.2.1 | ODM (Object Document Mapper) para MongoDB que proporciona una solución elegante para modelar datos, validar esquemas y ejecutar consultas. |

### Dependencias de Desarrollo

| Paquete | Versión | Descripción |
|---------|---------|-------------|
| **cross-env** | ^10.1.0 | Permite establecer variables de entorno de forma compatible entre diferentes sistemas operativos (Windows, Linux, macOS). |
| **jest** | ^30.2.0 | Framework de pruebas de JavaScript con enfoque en simplicidad. Soporta pruebas unitarias, de integración y snapshot. |
| **nodemon** | ^3.1.11 | Herramienta que reinicia automáticamente la aplicación cuando se detectan cambios en los archivos, facilitando el desarrollo. |
| **supertest** | ^7.2.2 | Biblioteca para pruebas de APIs HTTP. Permite enviar solicitudes HTTP simuladas y verificar las respuestas. |

---

## 🔧 Scripts de package.json

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "cross-env NODE_ENV=test jest --detectOpenHandles --forceExit"
  }
}
```

### Explicación de Cada Script

- **`npm start`**: Inicia la aplicación en modo producción utilizando Node.js directamente. Lee las variables de entorno desde el archivo `.env` y conecta con la base de datos MongoDB.

- **`npm run dev`**: Inicia la aplicación en modo desarrollo con Nodemon. Cualquier cambio en los archivos del proyecto provocará un reinicio automático de la aplicación, acelerando el ciclo de desarrollo.

- **`npm test`**: Ejecuta las pruebas automatizadas con Jest. La variable `NODE_ENV=test` indica que se debe usar la configuración de pruebas (base de datos de pruebas). Las opciones `--detectOpenHandles` y `--forceExit` garantizan que Jest termine incluso si hay conexiones abiertas.

---

## 📁 Estructura Detallada del Código

### 📄 server.js (Punto de Entrada)

**Ubicación:** [`server.js`](server.js:1)

Este es el archivo principal que bootstraps toda la aplicación. Su función es cargar la configuración de entorno, importar la aplicación Express, conectar a la base de datos y levantar el servidor HTTP.

**Explicación línea por línea:**

```javascript
// Líneas 1-3: Carga de variables de entorno
// Se utiliza dotenv para leer variables desde .env (producción) o .env.test (testing)
// La elección del archivo depende de la variable NODE_ENV
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});
```

El bloque anterior es crucial para la configuración porque:
- En producción: Lee el archivo `.env` que contiene las credenciales reales de MongoDB
- En testing: Lee `.env.test` que usa una base de datos separada para no contaminar datos de producción

```javascript
// Líneas 5-6: Importación de módulos
// app: La aplicación Express configurada
// connectDB: Función para establecer conexión con MongoDB
const app = require('./src/app');
const connectDB = require('./src/config/db');
```

```javascript
// Líneas 8-9: Definición del puerto
// Usa el puerto definido en variables de entorno o 3000 como predeterminado
const PORT = process.env.PORT || 3000;
```

```javascript
// Líneas 11-17: Arranque del servidor
// Solo conecta y levanta el servidor si NO estamos en modo test
// Esto evita conflictos durante la ejecución de pruebas automatizadas
if (process.env.NODE_ENV !== 'test') {
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  });
}
```

El servidor escucha en el puerto 3000 y muestra un mensaje en consola indicando que está activo. La conexión a MongoDB se establece de forma asíncrona antes de iniciar el servidor.

```javascript
// Línea 19: Exportación para testing
// Permite que Jest importe la aplicación sin levantar el servidor
module.exports = app;
```

---

### 📄 src/app.js (Configuración de Express)

**Ubicación:** [`src/app.js`](src/app.js:1)

Este archivo configura la aplicación Express con todos los middlewares y rutas necesarios.

**Explicación línea por línea:**

```javascript
// Líneas 1-3: Importación de módulos
const express = require('express');
const cors = require('cors');
const path = require('path');
```

```javascript
// Línea 5-6: Importación de rutas
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
```

```javascript
// Línea 8: Inicialización de Express
const app = express(); // 👈 PRIMERO se crea la app
```

Es importante crear la instancia de Express (`app`) antes de cualquier otra configuración porque los middlewares y rutas necesitan acceso a esta instancia.

```javascript
// Líneas 10-12: Middlewares esenciales
app.use(cors());  // Habilita CORS para permitir solicitudes desde el frontend
app.use(express.json());  // Parsea solicitudes con JSON en el cuerpo (req.body)
```

```javascript
// Línea 14: Archivos estáticos
// Express sirve automáticamente archivos HTML, CSS, JS desde la carpeta public
app.use(express.static(path.join(__dirname, '../public')));
```

```javascript
// Líneas 16-17: Registro de rutas API
app.use('/api/auth', authRoutes);      // Rutas de autenticación
app.use('/api/products', productRoutes); // Rutas de productos
```

```javascript
// Líneas 19-28: Rutas de páginas web
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});
```

Estas rutas sirven las páginas HTML del frontend. Cuando un usuario accede a `/login`, Express lee y envía el archivo [`login.html`](public/login.html:1).

```javascript
// Línea 31: Exportación
module.exports = app;
```

---

### 📄 src/config/db.js (Conexión a MongoDB)

**Ubicación:** [`src/config/db.js`](src/config/db.js:1)

Módulo que establece la conexión con MongoDB utilizando Mongoose.

**Explicación línea por línea:**

```javascript
// Líneas 1-2: Importación de Mongoose
const mongoose = require('mongoose');
```

```javascript
// Líneas 3-6: Función de conexión asíncrona
const connectDB = async () => {
  // mongoose.connect establece la conexión usando la URI de MONGO_URI
  await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB conectado');
};
```

La función utiliza `async/await` para manejar la conexión de forma asíncrona. Una vez establecida, muestra un mensaje en consola confirmando la conexión.

```javascript
// Línea 8: Exportación
module.exports = connectDB;
```

---

### 📄 src/models/User.js (Modelo de Usuario)

**Ubicación:** [`src/models/User.js`](src/models/User.js:1)

Define el esquema de datos para los usuarios en MongoDB.

**Explicación línea por línea:**

```javascript
// Líneas 1-2: Importación de Mongoose
const mongoose = require('mongoose');
```

```javascript
// Líneas 3-7: Definición del esquema de usuario
const userSchema = new mongoose.Schema({
  // Campo name: String requerido
  name: { type: String, required: true },
  // Campo email: String único y requerido
  email: { type: String, unique: true, required: true },
  // Campo password: String requerido (será hash)
  password: { type: String, required: true }
});
```

El esquema define tres campos obligatorios para cada usuario. La opción `unique: true` en email garantiza que no existan dos usuarios con el mismo correo electrónico.

```javascript
// Línea 9: Creación del modelo
module.exports = mongoose.model('User', userSchema);
```

El modelo se exporta con el nombre 'User' y se utiliza en el [`authController.js`](src/controllers/authController.js:1) para operaciones de base de datos.

---

### 📄 src/models/Product.js (Modelo de Producto)

**Ubicación:** [`src/models/Product.js`](src/models/Product.js:1)

Define el esquema de datos para los productos.

**Explicación línea por línea:**

```javascript
// Líneas 1-2: Importación de Mongoose
const mongoose = require('mongoose');
```

```javascript
// Líneas 3-12: Definición del esquema de producto
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },        // Nombre del producto (obligatorio)
  description: String,                           // Descripción opcional
  price: Number,                                 // Precio del producto
  stock: Number,                                 // Cantidad en inventario
  createdBy: {                                   // Referencia al usuario que creó el producto
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true }); // Timestamps añade createdAt y updatedAt automáticamente
```

La opción `{ timestamps: true }` añade automáticamente campos `createdAt` (fecha de creación) y `updatedAt` (fecha de última actualización) a cada documento.

```javascript
// Línea 14: Exportación del modelo
module.exports = mongoose.model('Product', productSchema);
```

---

### 📄 src/controllers/authController.js (Controlador de Autenticación)

**Ubicación:** [`src/controllers/authController.js`](src/controllers/authController.js:1)

Maneja las operaciones de registro e inicio de sesión de usuarios.

#### Función `register` (Registro de Usuarios)

```javascript
// Líneas 5-21: Controlador de registro
exports.register = async (req, res) => {
  try {
    // Extrae datos del cuerpo de la solicitud
    const { name, email, password } = req.body;

    // Hashea la contraseña con bcrypt (10 rondas de salt)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea el usuario en MongoDB con la contraseña hasheada
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // Responde con estado 201 (Creado)
    res.status(201).json({ message: 'Usuario creado' });
  } catch (error) {
    // Manejo de errores (email duplicado, etc.)
    res.status(500).json({ message: error.message });
  }
};
```

**Flujo de registro:**
1. Recibe name, email y password del formulario
2. Hashea la contraseña usando bcryptjs (seguridad)
3. Crea el documento en MongoDB
4. Retorna mensaje de éxito

#### Función `login` (Inicio de Sesión)

```javascript
// Líneas 23-45: Controlador de inicio de sesión
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Busca usuario por email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: 'Usuario no encontrado' });

    // Compara contraseña hasheada con la proporcionada
    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(400).json({ message: 'Credenciales inválidas' });

    // Genera token JWT con el ID del usuario
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token expira en 1 hora
    );

    // Retorna el token al cliente
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

**Flujo de inicio de sesión:**
1. Busca usuario por email en MongoDB
2. Verifica contraseña con bcrypt.compare()
3. Genera token JWT válido por 1 hora
4. Retorna token al frontend

---

### 📄 src/controllers/productController.js (Controlador de Productos)

**Ubicación:** [`src/controllers/productController.js`](src/controllers/productController.js:1)

Maneja las operaciones CRUD de productos.

#### Función `createProduct` (Crear Producto)

```javascript
// Líneas 3-14: Crear nuevo producto
exports.createProduct = async (req, res) => {
  try {
    // Crea el producto asociándolo al usuario autenticado
    const product = await Product.create({
      ...req.body,           // Datos del producto del cuerpo
      createdBy: req.user.id // ID del usuario del token JWT
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

#### Función `getProducts` (Listar Productos)

```javascript
// Líneas 16-19: Obtener todos los productos
exports.getProducts = async (req, res) => {
  const products = await Product.find(); // Recupera todos los documentos
  res.json(products);
};
```

#### Función `updateProduct` (Actualizar Producto)

```javascript
// Líneas 21-28: Actualizar producto existente
exports.updateProduct = async (req, res) => {
  // Busca por ID y actualiza con nuevos datos
  // { new: true } retorna el documento actualizado
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(product);
};
```

#### Función `deleteProduct` (Eliminar Producto)

```javascript
// Líneas 30-33: Eliminar producto
exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Producto eliminado' });
};
```

---

### 📄 src/middlewares/authMiddleware.js (Middleware de Autenticación JWT)

**Ubicación:** [`src/middlewares/authMiddleware.js`](src/middlewares/authMiddleware.js:1)

Protege las rutas verificando la validez del token JWT.

**Explicación línea por línea:**

```javascript
// Líneas 1: Importación de JWT
const jwt = require('jsonwebtoken');
```

```javascript
// Líneas 3-18: Middleware de verificación
module.exports = (req, res, next) => {
  // Verifica que exista el header Authorization
  const authHeader = req.header('Authorization');

  if (!authHeader)
    return res.status(401).json({ message: 'Acceso denegado' });

  // Extrae el token (formato: "Bearer <token>")
  const token = authHeader.split(' ')[1];

  try {
    // Verifica y decodifica el token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // Añade la información del usuario a la solicitud
    req.user = verified;
    // Continúa con el siguiente middleware/ruta
    next();
  } catch {
    res.status(400).json({ message: 'Token inválido' });
  }
};
```

**Flujo del middleware:**
1. Verifica presencia del header `Authorization`
2. Extrae el token JWT después de "Bearer "
3. Verifica autenticidad del token con la clave secreta
4. Si es válido, añade el ID del usuario a `req.user`
5. Si es inválido, retorna error 401 (no autorizado) o 400 (token inválido)

---

### 📄 src/routes/authRoutes.js (Rutas de Autenticación)

**Ubicación:** [`src/routes/authRoutes.js`](src/routes/authRoutes.js:1)

Define las rutas relacionadas con la autenticación.

```javascript
// Líneas 1-7: Rutas de autenticación
const router = require('express').Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register); // POST /api/auth/register
router.post('/login', login);       // POST /api/auth/login

module.exports = router;
```

| Método | Ruta | Controlador | Descripción |
|--------|------|-------------|-------------|
| POST | `/api/auth/register` | [`register`](src/controllers/authController.js:5) | Registra un nuevo usuario |
| POST | `/api/auth/login` | [`login`](src/controllers/authController.js:23) | Inicia sesión y retorna JWT |

---

### 📄 src/routes/productRoutes.js (Rutas de Productos)

**Ubicación:** [`src/routes/productRoutes.js`](src/routes/productRoutes.js:1)

Define las rutas de productos, todas protegidas por autenticación JWT.

```javascript
// Líneas 1-15: Rutas de productos con middleware de autenticación
const router = require('express').Router();
const auth = require('../middlewares/authMiddleware');
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router.post('/', auth, createProduct);    // POST /api/products - Crear
router.get('/', auth, getProducts);        // GET /api/products - Listar
router.put('/:id', auth, updateProduct);   // PUT /api/products/:id - Actualizar
router.delete('/:id', auth, deleteProduct);// DELETE /api/products/:id - Eliminar

module.exports = router;
```

| Método | Ruta | Middleware | Controlador | Descripción |
|--------|------|------------|-------------|-------------|
| POST | `/api/products` | JWT requerido | [`createProduct`](src/controllers/productController.js:3) | Crear producto |
| GET | `/api/products` | JWT requerido | [`getProducts`](src/controllers/productController.js:16) | Listar productos |
| PUT | `/api/products/:id` | JWT requerido | [`updateProduct`](src/controllers/productController.js:21) | Actualizar producto |
| DELETE | `/api/products/:id` | JWT requerido | [`deleteProduct`](src/controllers/productController.js:30) | Eliminar producto |

---

### 📄 public/login.html (Página de Inicio de Sesión)

**Ubicación:** [`public/login.html`](public/login.html:1)

Página HTML con formulario de inicio de sesión y estilos CSS integrados.

**Características visuales:**
- Fondo con gradiente púrpura (135deg)
- Tarjeta centrada con sombra suave
- Campos de email y contraseña
- Botón con efecto hover
- Enlace a página de registro

**Funcionalidad JavaScript:**
- Intercepta el envío del formulario
- Envía solicitud POST a `/api/auth/login`
- Almacena el token JWT en `localStorage`
- Redirige al dashboard si es exitoso
- Muestra mensaje de error si falla

---

### 📄 public/register.html (Página de Registro)

**Ubicación:** [`public/register.html`](public/register.html:1)

Página HTML con formulario de registro de nuevos usuarios.

**Características visuales:**
- Fondo con gradiente naranja-rojo
- Tarjeta centrada con diseño consistente
- Campos para nombre, email y contraseña
- Feedback visual con mensajes de éxito/error
- Redirección automática al login después de 2 segundos

**Funcionalidad JavaScript:**
- Intercepta el envío del formulario
- Envía solicitud POST a `/api/auth/register`
- Valida respuesta del servidor
- Redirige al login tras registro exitoso

---

### 📄 public/dashboard.html (Dashboard Protegido)

**Ubicación:** [`public/dashboard.html`](public/dashboard.html:1)

Página de dashboard que solo es accesible con sesión iniciada.

**Características visuales:**
- Fondo con gradiente verde esmeralda
- Diseño con efecto glassmorphism (blur)
- Mensaje de bienvenida
- Botón de cerrar sesión

**Funcionalidad JavaScript:**
- Verifica existencia del token en `localStorage`
- Redirige al login si no hay token
- Función logout que elimina el token y redirige

---

### 📄 tests/auth.test.js (Pruebas de Autenticación)

**Ubicación:** [`tests/auth.test.js`](tests/auth.test.js:1)

Pruebas automatizadas para verificar el funcionamiento de las rutas de autenticación.

```javascript
// Líneas 4-16: Test de registro de usuario
describe('Auth Routes', () => {
  it('Debe registrar un usuario', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test',
        email: 'test@test.com',
        password: '123456'
      });

    expect(res.statusCode).toBe(201);
  });
});
```

Este test verifica que el endpoint de registro retorne código 201 (creado) cuando se envían datos válidos.

---

### 📄 tests/product.test.js (Pruebas de Productos)

**Ubicación:** [`tests/product.test.js`](tests/product.test.js:1)

Pruebas para verificar la protección de rutas mediante JWT.

```javascript
// Líneas 11-18: Test de acceso sin token
describe('Product Routes', () => {
  it('Debe negar acceso sin token', async () => {
    const res = await request(app)
      .get('/api/products');

    expect(res.statusCode).toBe(401);
  });

  // Líneas 20-26: Test de acceso con token válido
  it('Debe permitir acceso con token', async () => {
    const res = await request(app)
      .get('/api/products')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });
});
```

---

## 🔐 Variables de Entorno

### Archivo .env (Producción)

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/product_db
JWT_SECRET=supersecret
```

| Variable | Descripción |
|----------|-------------|
| `PORT` | Puerto donde escucha el servidor Express |
| `MONGO_URI` | URI de conexión a MongoDB |
| `JWT_SECRET` | Clave secreta para firmar tokens JWT |

### Archivo .env.test (Testing)

```env
MONGO_URI=mongodb://127.0.0.1:27017/product_test
JWT_SECRET=testsecret
```

---

## 🚀 Guía de Despliegue en Servidor Debian 13

### Paso 1: Conectar al Servidor

```bash
ssh usuario@168.181.187.215
```

### Paso 2: Instalar Node.js

```bash
# Actualizar paquetes
sudo apt update && sudo apt upgrade -y

# Instalar curl
sudo apt install curl -y

# Instalar Node.js 18.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalación
node --version
npm --version
```

### Paso 3: Instalar MongoDB

```bash
# Importar clave GPG
curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc | \
   sudo gpg --dearmor -o /usr/share/keyrings/mongodb-server-6.0.gpg

# Agregar repositorio (Debian 13)
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] http://repo.mongodb.org/apt/debian bookworm/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Instalar MongoDB
sudo apt update
sudo apt-get install -y mongodb-org

# Iniciar MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod
```

### Paso 4: Transferir Archivos del Proyecto

```bash
# Desde tu máquina local
scp -r actividad4/ usuario@168.181.187.215:/home/usuario/
```

O usar Git:

```bash
git clone <repositorio> /home/usuario/actividad4
```

### Paso 5: Instalar Dependencias

```bash
cd /home/usuario/actividad4
npm install
```

### Paso 6: Instalar PM2 Globalmente

```bash
sudo npm install -g pm2
```

### Paso 7: Configurar Variables de Entorno

```bash
# Editar archivo .env
nano .env
# Asegurarse de que MONGO_URI apunte a localhost
```

### Paso 8: Iniciar la Aplicación con PM2

```bash
pm2 start server.js --name "actividad4"

# Configurar inicio automático
pm2 startup
pm2 save

# Verificar estado
pm2 status
pm2 logs actividad4
```

### Paso 9: Configurar Firewall (Opcional pero Recomendado)

```bash
# Instalar ufw si no está instalado
sudo apt install ufw -y

# Configurar firewall
sudo ufw allow 22/tcp
sudo ufw allow 3000/tcp
sudo ufw enable
sudo ufw status
```

---

## 🔄 Comandos de Mantenimiento

```bash
# Ver logs de la aplicación
pm2 logs actividad4

# Reiniciar aplicación (sin downtime con reload)
pm2 reload actividad4

# Reinicio completo
pm2 restart actividad4

# Detener aplicación
pm2 stop actividad4

# Eliminar de PM2
pm2 delete actividad4

# Monitorear recursos
pm2 monit

# Ver métricas en formato JSON
pm2 jlist
pm2 describe actividad4
```

---

## 🔒 Medidas de Seguridad Implementadas

1. **Contraseñas Hasheadas**: Todas las contraseñas se almacenan hasheadas con bcryptjs
2. **Autenticación JWT**: Tokens con expiración de 1 hora
3. **Middleware de Protección**: Rutas de productos protegidas contra accesos no autorizados
4. **Validación de Datos**: Verificación de email único en MongoDB
5. **Variables de Entorno**: Información sensible fuera del código fuente

---

## 📈 Funcionalidades del Sistema

### Módulo de Autenticación

| Función | Descripción | Endpoint |
|---------|-------------|----------|
| Registro | Crea nueva cuenta de usuario | POST `/api/auth/register` |
| Login | Inicia sesión y obtiene JWT | POST `/api/auth/login` |

### Módulo de Productos

| Función | Descripción | Endpoint |
|---------|-------------|----------|
| Crear | Agrega nuevo producto | POST `/api/products` |
| Listar | Muestra todos los productos | GET `/api/products` |
| Actualizar | Modifica producto existente | PUT `/api/products/:id` |
| Eliminar | Borra producto por ID | DELETE `/api/products/:id` |

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología |
|-----------|-----------|
| Runtime | Node.js |
| Framework Web | Express.js |
| Base de Datos | MongoDB |
| ODM | Mongoose |
| Autenticación | JWT + bcryptjs |
| Frontend | HTML5 + CSS3 + JavaScript |
| Testing | Jest + Supertest |
| Gestor de Procesos | PM2 |
| Sistema Operativo | Debian 13 |

---

## 📝 Licencia

Este proyecto es de uso educativo para el curso de Desarrollo Full Stack de la Universidad Tecmilenio.

---

## 👨‍💻 Autor

Desarrollado como parte de la Actividad 4 del curso de Desarrollo Full Stack - Universidad Tecmilenio

---

## 📅 Fecha de Creación

Febrero 2026

---

## 🌐 Accesos de Producción

- **URL Principal**: [http://168.181.187.215:3000/login](http://168.181.187.215:3000/login)
- **Servidor**: Debian 13 con 1 vCPU y 1 GB RAM
- **Gestor de Procesos**: PM2 (ejecución continua 24/7)
- **Plataforma**: Servidor Cloud Privado

---

*Este README fue generado para documentar extensivamente el proyecto de Actividad 4 - Sistema de Gestión de Usuarios y Productos con autenticación JWT y CRUD de productos.*
