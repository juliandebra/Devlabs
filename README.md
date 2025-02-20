# DevLabs - Gestión de Tareas

Este proyecto es una aplicación full-stack para la gestión de tareas, desarrollada con un backend en Node.js (Express) y un frontend en Next.js. A continuación, se detallan las instrucciones para configurar y ejecutar el proyecto localmente.

---

## 📋 Tabla de Contenidos

1. [Requisitos](#requisitos)
2. [Instalación](#instalación)
3. [Configuración del Entorno](#configuración-del-entorno)
4. [Ejecución del Proyecto](#ejecución-del-proyecto)
5. [Despliegue](#despliegue)
6. [Testing](#testing)
7. [Tecnologías Utilizadas](#tecnologías-utilizadas)

---

## Requisitos

Asegúrate de tener instaladas las siguientes versiones en tu sistema:

- **Node.js**: `v18.x` o superior.
- **npm**: `v9.x` o superior.
- **MongoDB**: `v6.x` o superior (para el backend).

---

## Instalación

### Backend

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/devlabs-backend.git
   cd devlabs-backend
   ```

2.Instala las dependencias:

```bash

npm install
```

### Frontend

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/devlabs-frontend.git
cd devlabs-frontend
```

2. Instala las dependencias:

```bash
npm install
```

## Configuración del Entorno

### Backend

Crea un archivo .env en la raíz del proyecto backend con las siguientes variables:

```env
MONGO_URI=tu_cadena_de_conexión_de_mongodb
JWT_SECRET=tu_clave_secreta_para_jwt
PORT=3000
```

### Frontend

Crea un archivo .env en la raíz del proyecto frontend con la siguiente variable:

```env
NEXT_PUBLIC_API_BASE_URL=https://devlabs-sv.onrender.com/
```

## Ejecución del Proyecto

### Backend

Ejecuta el servidor en modo desarrollo:

```bash
npm run dev
```

Para compilar y ejecutar en producción:

```bash
npm run build
npm start
```

### Frontend

Ejecuta el servidor en modo desarrollo:

```bash
npm run dev
```

Para compilar y ejecutar en producción:

```bash
npm run build
npm start
```

## Despliegue

El proyecto está desplegado en las siguientes URLs:

**Backend**: [Deploy en Render](https://devlabs-sv.onrender.com/)

**Frontend**: [Deploy en Vercel](https://devlabs-client.vercel.app/)

## Testing

### Backend

Para ejecutar las pruebas en el backend:

```bash
npm test
```

### Frontend

Para ejecutar las pruebas en el frontend:

```bash
npm test
```

## Tecnologías Utilizadas

### Backend

- Node.js: Entorno de ejecución de JavaScript.

- Express: Framework para construir APIs.

- MongoDB: Base de datos NoSQL.

- Mongoose: ODM para MongoDB.

- JWT: Autenticación basada en tokens.

- Jest: Framework de testing.

### Frontend

- Next.js: Framework de React para aplicaciones web.

- React: Biblioteca para construir interfaces de usuario.

- Axios: Cliente HTTP para realizar peticiones.

- Jest: Framework de testing.

- Sass: Preprocesador de CSS.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

**Nombre**: Julián Debrabandere

**Email**: julian.debra25@gmail.com

**GitHub**: /juliandebra
