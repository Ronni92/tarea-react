<h1 align="center">🎉 Ecuador</h1>

<p align="left">
  <img src="https://github.com/user-attachments/assets/e511abd3-9953-4b1e-b52e-98a3fa18314a"
       alt="Selección Ecuatoriana"
       width="440">
</p>
Selección Ecuatoriana

Aplicación móvil desarrollada con React Native y Expo que muestra información de la Selección Ecuatoriana de Fútbol. Incluye pantalla de bienvenida con el logo oficial y una pantalla principal con datos del equipo.

Estructura proyecto 
| Archivo/Directorio | Descripción                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `app/`             | Contiene las pantallas y rutas de la aplicación.                   |
| `_layout.js`       | Define la estructura y navegación global.                          |
| `index.js`         | Pantalla inicial mostrada al iniciar la aplicación.                |
| `home.js`          | Pantalla principal con la información de la Selección Ecuatoriana. |
| `assets/images/`   | Almacena imágenes y recursos gráficos.                             |
| `logo-ecuador.png` | Logotipo utilizado en la interfaz de la aplicación.                |
| `app.json`         | Configuración general de Expo y metadatos de la aplicación.        |
| `package.json`     | Gestión de dependencias y scripts de ejecución.                    |
| `babel.config.js`  | Configuración del transpiler Babel para JavaScript.                |

Funcionamiento el contexto de tunnel
Sin Tunnel (modo LAN):
PC (IP local) ←→ Router WiFi ←→ Teléfono
❌ Puede fallar si la red bloquea dispositivos

Con Tunnel:
PC ←→ Servidores Expo (internet) ←→ Teléfono
✅ Funciona en cualquier red

Características

- Pantalla de bienvenida (Splash Screen) con logo de Ecuador
- Navegación automática después de 3 segundos
- Botón "Ingresar" para navegación manual
- Pantalla de inicio con información:
  - Información general (asociación, confederación, estadio)
  - Logros destacados en mundiales
  - Lista de jugadores destacados
-  Diseño responsivo con colores de la bandera (#FFD700, #003399, #ED2E38)
-  Compatible con Android e iOS

Flujo completo 

1. Usuario abre Expo Go y escanea QR
   ↓
2. Expo muestra su splash screen temporal
   ↓
3. Se carga nuestra app (index.js)
   ↓
4. Pantalla amarilla con logo de Ecuador
   ↓
5. Espera 3 segundos O usuario presiona "Ingresar"
   ↓
6. Navega a home.js
   ↓
7. Muestra información del equipo en tarjetas

 Tecnologías utilizadas

| Componente         | Versión | Función en el Proyecto                                                                     |
| ------------------ | ------- | ------------------------------------------------------------------------------------------ |
| React Native       | 0.74.5  | Base principal para la construcción de la interfaz móvil multiplataforma.                  |
| Expo               | 54.0.0  | Entorno de desarrollo que proporciona herramientas para compilación, pruebas y despliegue. |
| Expo Router        | 4.0.0   | Gestión de navegación entre pantallas mediante enrutamiento basado en archivos.            |
| Expo Splash Screen | 0.29.0  | Personalización y administración de la pantalla de carga inicial de la aplicación.         |


Requisitos previos

- Node.js (versión 18 o superior)
- npm o yarn
- Expo Go instalado en tu teléfono móvil
  - [Android - Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

Solución de problemas comunes
Error: "Cannot find module 'babel-preset-expo'"
npm install babel-preset-expo@~54.0.10 --save-dev

 Instalación

instalar dependencia
npm install

Para solucionar el problema de ejecutar la aplicación desde el cecular usar modo tunnel
npx expo start --tunnel

ejecutar aplicación
npx expo start --tunnel
