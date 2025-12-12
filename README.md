# Frontend - Sistema de Gestión de Proyectos

Este es el cliente Frontend para el Sistema de Gestión de Proyectos Ágiles. Es una aplicación Single Page Application (SPA) construida con **React** y **Vite**, diseñada para interactuar con una API RESTful.

La aplicación permite gestionar una jerarquía completa de trabajo: **Proyectos -> Épicas -> Historias -> Tareas**, incluyendo autenticación segura y manejo de estados.

## 🚀 Tecnologías Utilizadas

* **Core:** React 18
* **Build Tool:** Vite
* **Enrutamiento:** React Router DOM (v6)
* **Peticiones HTTP:** Axios (con interceptores para JWT)
* **Gestión de Formularios:** React Hook Form
* **Iconos:** React Icons (fa, io5)
* **Estilos:** CSS Modules (diseño modular y aislado)
* **Estado Global:** React Context API (AuthProvider)

## 📋 Requisitos Previos

Asegúrate de tener instalado:

* **Node.js** (v14 o superior)
* **npm** o **yarn**

## 🛠️ Instalación y Configuración

1.  **Clonar el repositorio:**

``` bash
git clone https://github.com/gonzaloLT/frontend-tracker-task
cd frontend
```

2.  **Instalar dependencias:**

``` bash
npm install
# O si usas yarn
yarn install
```

3.  **Configurar Variables de Entorno:**

Crea un archivo `.env` en la raíz del proyecto (al mismo nivel que `package.json`). Puedes usar `.env.example` como referencia si existe.

``` env
VITE_API_URL=http://localhost:8000/api
```

* `VITE_API_URL`: Es la dirección donde corre tu Backend.

## ▶️ Ejecución

Para iniciar el servidor de desarrollo:

``` bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## 📂 Estructura del Proyecto

La estructura de carpetas sigue un patrón modular y organizado:

``` text
src/
├── api/            # Funciones para llamadas HTTP (axios) por entidad
│   ├── auth.js
│   ├── projects.js
│   ├── epics.js
│   ├── stories.js
│   └── tasks.js
├── components/     # Componentes reutilizables y específicos
│   ├── auth/       # Formularios de Login/Registro
│   ├── epics/      # Listas y detalles de Épicas
│   ├── project/    # Tarjetas y detalles de Proyectos
│   ├── stories/    # Componentes de Historias
│   ├── tasks/      # Items, listas y formularios de Tareas
│   ├── routes/     # ProtectedRoute y PublicRoute
│   └── ui/         # Modales, Mensajes de Carga, Errores
├── context/        # Contexto global (AuthProvider)
├── layouts/        # Plantillas de diseño (LayoutDefault, PublicLayout)
├── pages/          # Vistas principales (Páginas)
│   ├── auth/
│   ├── projects/
│   ├── epics/
│   ├── stories/
│   └── Dashboard.jsx
└── router.jsx      # Configuración de rutas (React Router)
```

## 🔐 Autenticación y Seguridad

La aplicación maneja la seguridad mediante **JWT (JSON Web Tokens)**.

* El token se almacena en `localStorage` al iniciar sesión.
* **Axios Interceptor:** Cada petición saliente intercepta el tráfico para inyectar automáticamente el header `Authorization: Bearer <token>`.
* **Rutas Protegidas:** El componente `ProtectedRoute` verifica si el usuario está autenticado antes de permitir el acceso a las vistas privadas (Proyectos, Dashboard, etc.).

## ✨ Funcionalidades Principales

1.  **Gestión de Usuarios:** Registro e Inicio de sesión.
2.  **Proyectos:** Crear, listar, editar y eliminar proyectos.
3.  **Navegación Jerárquica:**
    * Entrar a un Proyecto para ver sus Épicas.
    * Entrar a una Épica para ver sus Historias.
    * Entrar a una Historia para ver y gestionar sus Tareas.
4.  **Gestión de Tareas:**
    * Crear tareas mediante Modales.
    * Marcar tareas como completadas/pendientes.
    * Editar y eliminar tareas sin recargar la página.

## 📦 Scripts Disponibles

* `npm run dev`: Inicia el servidor de desarrollo.
* `npm run build`: Compila la aplicación para producción en la carpeta `dist`.
* `npm run preview`: Sirve localmente la versión de producción para pruebas.