# Avance de Proyecto: Aplicación de Guías de Estudio

## 📋 Descripción del Proyecto

Esta aplicación full-stack permite a los usuarios crear, gestionar y estudiar guías de estudio personalizadas. Consiste en una API REST desarrollada con FastAPI y una aplicación móvil construida con React Native y Expo.

## 🛠️ Tecnologías Utilizadas

### Backend (API)
- **FastAPI**: Framework web moderno y rápido para construir APIs con Python
- **Firebase Admin SDK**: Para la integración con Firebase Realtime Database
- **Pydantic**: Para validación de datos y modelos
- **Uvicorn**: Servidor ASGI para FastAPI

### Frontend (Aplicación Móvil)
- **React Native**: Framework para desarrollo de aplicaciones móviles nativas
- **Expo**: Plataforma para desarrollo, construcción y despliegue de aplicaciones React Native
- **React Navigation**: Para navegación entre pantallas
- **Firebase SDK**: Para autenticación y base de datos en tiempo real
- **React Native Reanimated**: Para animaciones fluidas

### Base de Datos
- **Firebase Realtime Database**: Base de datos NoSQL en tiempo real de Google

### Despliegue
- **Docker Web**: Contenedorización de la aplicación
- **Debian 13**: Sistema operativo del servidor
- **PM2**: Gestor de procesos para Node.js/Express (usado para el despliegue)

## 📁 Estructura del Proyecto

```
Avance-Proyecto/
├── api/                          # API Backend
│   ├── main.py                   # Archivo principal de FastAPI
│   ├── firebase-key.json         # Credenciales de Firebase
│   ├── README.md                 # Documentación de la API
│   └── .venv/                    # Entorno virtual de Python
├── App/                          # Aplicación Móvil React Native
│   ├── App.js                    # Punto de entrada de la app
│   ├── package.json              # Dependencias de Node.js
│   ├── app.json                  # Configuración de Expo
│   ├── index.js                  # Archivo de entrada
│   ├── navigation/               # Configuración de navegación
│   │   ├── RootNavigation.js     # Navegación raíz (Stack)
│   │   ├── DrawerNavigation.js   # Navegación con drawer
│   │   ├── TabNavigation.js      # Navegación con pestañas
│   │   ├── homeStack.js          # Stack para home
│   │   └── settingStack.js       # Stack para configuraciones
│   ├── screens/                  # Pantallas de la aplicación
│   │   ├── login.js              # Pantalla de inicio de sesión
│   │   ├── Register.js           # Pantalla de registro
│   │   ├── home.js               # Pantalla principal (lista de guías)
│   │   ├── agregar.js            # Pantalla para crear guías
│   │   ├── study.js              # Pantalla de estudio de guías
│   │   ├── profile.js            # Perfil de usuario
│   │   ├── settings.js           # Configuraciones
│   │   ├── ajustes.js            # Ajustes adicionales
│   │   └── settingsDetail.js     # Detalles de configuración
│   ├── utils/                    # Utilidades
│   │   └── firebaseConfig.js     # Configuración de Firebase
│   └── assets/                   # Recursos estáticos
│       ├── adaptive-icon.png
│       ├── favicon.png
│       ├── icon.png
│       ├── splash-icon.png
│       └── wasd.png
└── README.md                     # Este archivo
```

## 🚀 Funcionalidades

### API Backend
La API proporciona endpoints RESTful para gestionar guías de estudio:

- **GET /**: Mensaje de bienvenida
- **GET /guias**: Obtener todas las guías
- **GET /guias/{user_id}**: Obtener guías de un usuario específico
- **POST /guias**: Crear una nueva guía
- **PUT /guias/{guia_id}**: Actualizar una guía existente
- **DELETE /guias/{guia_id}**: Eliminar una guía

### Aplicación Móvil
La app móvil ofrece una experiencia completa para el estudio:

#### Autenticación
- Inicio de sesión con email y contraseña
- Registro de nuevos usuarios
- Integración con Firebase Authentication

#### Gestión de Guías
- Crear guías de estudio personalizadas
- Agregar preguntas y respuestas a las guías
- Ver lista de guías creadas
- Editar y eliminar guías

#### Modo de Estudio
- Navegar por preguntas de una guía
- Mostrar/ocultar respuestas
- Marcar preguntas como completadas
- Seguimiento del progreso de estudio

#### Navegación
- Navegación por pestañas (Home, Agregar, Study)
- Drawer navigation para acceder a perfil y configuraciones
- Stack navigation para flujos específicos

## 📱 Cómo Usar la Aplicación

### 1. Instalación y Configuración

#### API Backend
```bash
cd api
python -m venv .venv
source .venv/bin/activate  # En Windows: .venv\Scripts\activate
pip install fastapi uvicorn firebase-admin pydantic
uvicorn main:app --reload
```

#### Aplicación Móvil
```bash
cd App
npm install
npm start
# O usar Expo CLI: expo start
```

### 2. Flujo de Uso

1. **Registro/Inicio de Sesión**: El usuario debe crear una cuenta o iniciar sesión
2. **Crear Guía**: En la pestaña "Agregar", crear una nueva guía con nombre y preguntas/respuestas
3. **Ver Guías**: En la pestaña "Home", ver todas las guías creadas
4. **Estudiar**: Tocar una guía para entrar en modo estudio
5. **Progreso**: Marcar preguntas como completadas y navegar entre ellas

### 3. Endpoints de la API

#### Crear una Guía
```bash
POST /guias
Content-Type: application/json

{
  "nombre": "Matemáticas Básicas",
  "preguntas": [
    {"pregunta": "¿Qué es 2+2?", "respuesta": "4"},
    {"pregunta": "¿Qué es 3x3?", "respuesta": "9"}
  ],
  "user": "user_id"
}
```

#### Obtener Guías de un Usuario
```bash
GET /guias/{user_id}
```

## 🔧 Despliegue

### Configuración del Servidor
- **Sistema Operativo**: Debian 13
- **Contenedorización**: Docker Web
- **Gestión de Procesos**: PM2

### Pasos de Despliegue

1. **Preparar el servidor Debian 13**
2. **Instalar Docker y PM2**
3. **Configurar el contenedor Docker Web**
4. **Desplegar la API con PM2**
5. **Configurar variables de entorno**
6. **Configurar firewall y seguridad**

### Comandos de Despliegue
```bash
# Instalar dependencias
sudo apt update
sudo apt install docker.io pm2

# Construir y ejecutar contenedor
docker build -t guia-estudio-api .
docker run -d -p 8000:8000 guia-estudio-api

# Gestionar con PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 🎨 Diseño y UX

### Tema Visual
- **Colores**: Tema oscuro con blanco y gris claro
- **Estilo**: Minimalista y moderno
- **Tipografía**: Sans-serif con pesos variables

### Componentes Principales
- **Cards**: Para mostrar guías y preguntas
- **Botones**: Estilo outlined con bordes blancos
- **Inputs**: Campos transparentes con bordes
- **Navegación**: Headers negros con texto blanco

## 🔐 Seguridad

### Autenticación
- Firebase Authentication para manejo seguro de usuarios
- Validación de tokens en cada request
- Protección de rutas sensibles

### Base de Datos
- Reglas de seguridad de Firebase Realtime Database
- Validación de datos en el backend
- Filtrado de datos por usuario

## 📈 Estado del Proyecto

Este es un **avance de proyecto** que incluye:

✅ **Completado**:
- API REST completa con FastAPI
- Aplicación móvil funcional con React Native
- Autenticación con Firebase
- Base de datos en tiempo real
- Navegación completa
- Interfaz de usuario moderna
- Despliegue configurado

🔄 **En Desarrollo**:
- Funcionalidades avanzadas de estudio
- Sincronización offline
- Notificaciones push
- Análisis de progreso

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear un Pull Request

## 👥 Autor

Proyecto desarrollado como parte de la materia de Desarrollo Full Stack.

---

*Documentación creada para el avance de proyecto - Universidad Tecmilenio*