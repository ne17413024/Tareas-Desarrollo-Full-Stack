# Avance Proyecto Desarrollo Full Stack

## Descripción del Proyecto

Este proyecto es una aplicación móvil desarrollada con React Native y Expo, diseñada para ayudar a los usuarios a crear y realizar cuestionarios o guías de estudio de manera interactiva. Los usuarios pueden registrarse, iniciar sesión, crear guías personalizadas con preguntas de opción múltiple (tres opciones cada una), y luego estudiarlas respondiendo las preguntas con retroalimentación visual inmediata sobre las respuestas correctas e incorrectas.

La aplicación permite a cada usuario gestionar sus propias guías de estudio, almacenadas en la nube mediante Firebase, asegurando que los datos sean persistentes y accesibles desde cualquier dispositivo.

## Tecnologías Utilizadas

- **React Native**: Framework principal para el desarrollo de la aplicación móvil, permitiendo crear interfaces nativas para iOS y Android desde un único código base.
- **Expo**: Plataforma para el desarrollo, construcción y despliegue de aplicaciones React Native, facilitando el proceso de desarrollo y pruebas.
- **Firebase**: 
  - **Authentication**: Para el manejo de registro e inicio de sesión de usuarios.
  - **Realtime Database**: Para almacenar y sincronizar las guías de estudio en tiempo real.
- **React Navigation**: Librería para la navegación entre pantallas, incluyendo navegación por pestañas (tabs), cajón lateral (drawer) y pilas de navegación (stacks).
- **React Native Dropdown Picker**: Componente para seleccionar la respuesta correcta al crear preguntas.
- **Expo Vector Icons**: Para los iconos utilizados en la interfaz de usuario.

## Pantallas de la Aplicación

La aplicación cuenta con las siguientes pantallas principales, organizadas en una estructura de navegación jerárquica:

### Pantallas de Autenticación
- **Login**: Pantalla de inicio de sesión donde los usuarios pueden ingresar con su correo electrónico y contraseña.
- **Register**: Pantalla de registro para nuevos usuarios, permitiendo crear una cuenta con correo y contraseña.

### Pantallas Principales (Accesibles después de autenticación)
- **Home**: Pantalla principal que muestra una lista de las guías de estudio creadas por el usuario actual. Cada guía se presenta como una tarjeta con el nombre y el número de preguntas. Al tocar una guía, se navega a la pantalla de estudio.
- **Study**: Pantalla para realizar el cuestionario. Muestra las preguntas una por una con tres opciones de respuesta. Al seleccionar una opción, se proporciona retroalimentación visual:
  - Verde: Respuesta correcta.
  - Rojo: Respuesta incorrecta seleccionada.
  - Amarillo: Respuesta correcta cuando se seleccionó una incorrecta.
- **Agregar**: Pantalla para crear nuevas guías de estudio. Permite:
  - Ingresar el nombre de la guía.
  - Agregar múltiples preguntas, cada una con tres opciones de respuesta.
  - Seleccionar la respuesta correcta para cada pregunta mediante un menú desplegable.
  - Subir la guía completa a la base de datos.
- **Settings**: Pantalla de configuración general de la aplicación (parte de la pila de ajustes).
- **SettingsDetail**: Pantalla de detalles adicionales de configuración.
- **Ajustes**: Pantalla de ajustes accesible desde el cajón lateral, posiblemente para configuraciones adicionales.
- **Profile**: Pantalla de perfil del usuario, accesible desde el cajón lateral.

### Navegación
- **Navegación Raíz**: Incluye las pantallas de Login y Register, y la aplicación principal.
- **Navegación por Cajón (Drawer)**: Cajón lateral derecho con acceso a Ajustes y Perfil, además de la opción de cerrar sesión.
- **Navegación por Pestañas (Tabs)**: Tres pestañas principales en la parte inferior:
  - Home: Para ver las guías.
  - Agregar: Para crear nuevas guías.
  - Setting: Para acceder a la pila de configuraciones.
- **Navegación en Pila (Stacks)**:
  - Home Stack: Incluye Home y Study.
  - Setting Stack: Incluye Settings y SettingsDetail.

## Funcionalidades Principales

- **Autenticación de Usuarios**: Registro e inicio de sesión seguro mediante Firebase Authentication.
- **Creación de Guías**: Interfaz intuitiva para crear cuestionarios con preguntas de opción múltiple.
- **Estudio Interactivo**: Modo de estudio con retroalimentación visual para aprender de los errores.
- **Almacenamiento en la Nube**: Todas las guías se guardan en Firebase Realtime Database, asociadas al usuario.
- **Navegación Fluida**: Transiciones suaves entre pantallas con React Navigation.
- **Interfaz Oscura**: Diseño con tema oscuro para una experiencia visual cómoda.
- **Cerrar Sesión**: Opción en el cajón lateral para salir de la cuenta.

## Despliegue

La aplicación ha sido desplegada en la web utilizando **Netlify**, y se puede acceder a ella en el siguiente enlace: [https://avance-proyecto-dfs.netlify.app/](https://avance-proyecto-dfs.netlify.app/).

Además, se planea generar un archivo APK para su distribución en dispositivos Android, permitiendo una instalación nativa en móviles y tablets.

## Instalación y Uso (para Desarrolladores)

Si deseas contribuir o ejecutar el proyecto localmente:

1. Clona el repositorio.
2. Instala las dependencias: `npm install`.
3. Configura Firebase: Agrega tu configuración de Firebase en `utils/firebaseConfig.js`.
4. Ejecuta la aplicación:
   - Para web: `npm run web`.
   - Para Android: `npm run android`.
   - Para iOS: `npm run ios`.

Asegúrate de tener Expo CLI instalado y configurado.

## Contribución

Este proyecto es parte de un curso de Desarrollo Full Stack. Las contribuciones son bienvenidas, especialmente para mejorar la interfaz, agregar nuevas funcionalidades o optimizar el rendimiento.