# 📝 Proyecto de Desarrollo Frontend

Este repositorio contiene un mini ejercicio Frontend desarrollado con **React**, que simula una aplicación de publicaciones tipo blog. El objetivo principal es practicar el manejo del estado, el consumo de APIs, y la autenticación de usuarios.

## 🚀 Funcionalidades

- ✅ Autenticación de usuarios mediante **Firebase Authentication** (email y contraseña).
- 📄 Listado de publicaciones obtenidas desde [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
- ➕ Creación de nuevas publicaciones.
- ✏️ Edición de publicaciones existentes.
- 🗑️ Eliminación de publicaciones.
- 🔄 Manejo completo del estado local para gestionar los datos.

## 🛠️ Tecnologías Utilizadas

- [React](https://reactjs.org/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Firebase Authentication](https://firebase.google.com/products/auth)
- [Material UI (MUI)](https://mui.com/)
- [Node.js](https://nodejs.org/)

## ▶️ Cómo ejecutar el proyecto localmente

### 1. Clonar el repositorio

git clone https://github.com/FacundoAcostaG/mini-proyecto-retoWinter.git

### 2. Instalar dependencias

npm install
npm install firebase

### 3. Crear un proyecto en Firebase

Ingresá a Firebase Console
Creá un nuevo proyecto (o usá uno que ya tengas).
Ir al proyecto y seleccioná Web App (</>).
Copiá la configuración que te da Firebase (la usaremos en el siguiente paso).

### 4. Configurar Firebase en el proyecto

Abrí el archivo firebase.js y reemplazá los valores del objeto firebaseConfig con los datos de tu propio proyecto

### 5. Habilitar autenticación por correo en Firebase

Dentro de tu proyecto de Firebase, andá a la sección Authentication.
Hacé clic en “Método de inicio de sesión”.
Activá Correo electrónico y contraseña.

### 6. Ejecutar el proyecto

npm run dev
