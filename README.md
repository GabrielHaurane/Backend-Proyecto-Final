# Hotel Code - Backend

Bienvenido al repositorio del backend de **Hotel Code**, un sistema de gestión para hoteles que permite a los usuarios realizar reservas, gestionar habitaciones, y mantener la disponibilidad de las habitaciones de forma centralizada. Este backend está construido para servir como API para el frontend del proyecto.

## 🌐 Repositorio del Proyecto
El backend está diseñado para funcionar en conjunto con el frontend. Asegúrate de que ambos componentes estén en ejecución para probar la aplicación completa.
Repositorio del backend: [https://github.com/GabrielHaurane/Backend-Proyecto-Final](https://github.com/GabrielHaurane/Backend-Proyecto-Final)

## 👥 Integrantes

- [**Haurane Gabriel Alejandro**](https://github.com/GabrielHaurane)
- [**Brito Augusto Patricio**](https://github.com/BritoAugusto)

## 🚀 Características
- **Gestión de Habitaciones**: CRUD (Crear, Leer, Actualizar, Borrar) de habitaciones.
- **Gestión de Reservas**: Permite a los usuarios realizar y gestionar sus reservas.
- **Gestión de Usuarios**: Registro, inicio de sesión y autenticación de usuarios.
- **Validación de Datos**: Validación de entradas para mantener la integridad de los datos.
- **Seguridad**: Uso de JWT para la autenticación segura de usuarios.

## 🛠️ Tecnologías Utilizadas
- **Node.js** y **Express.js**: Framework de JavaScript en el lado del servidor para construir la API.
- **MongoDB** y **Mongoose**: Base de datos NoSQL y biblioteca de modelado de datos para MongoDB.
- **bcrypt**: Para el hashing de contraseñas y garantizar la seguridad de las credenciales de usuario.
- **cors**: Permite el acceso a la API desde diferentes orígenes (Cross-Origin Resource Sharing).
- **date-fns**: Librería de utilidades para trabajar con fechas y horas en JavaScript.
- **express-validator**: Validación de datos entrantes en las rutas de Express para garantizar que los datos sean correctos y seguros.
- **jsonwebtoken (JWT)**: Autenticación basada en tokens, permitiendo el manejo de sesiones de usuario de forma segura.
- **morgan**: Middleware de logging para registrar solicitudes HTTP en el servidor, útil para el seguimiento y depuración.

## 📂 Instalación y Ejecución Local
Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### Pasos de Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/GabrielHaurane/Backend-Proyecto-Final.git
2. Accede al directorio del proyecto:
   cd Backend-Proyecto-Final
3. Instala las dependencias:
   npm install
4. Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto y agrega las configuraciones necesarias (por ejemplo, la URL de conexión a MongoDB).
5. Inicia el servidor
   npm run dev
6. El backend debería estar corriendo en http://localhost:4000
## 📖 Uso del Proyecto
API REST: Utiliza herramientas como Postman para interactuar con la API. Consulta la documentación para conocer los endpoints disponibles.
Autenticación: Los usuarios pueden registrarse y autenticarse para acceder a funciones restringidas.
Gestión de Habitaciones y Reservas: Administra habitaciones y reservas a través de los endpoints proporcionados.
## 📄 Variables de Entorno
Asegúrate de configurar las siguientes variables en el archivo .env:
MONGODB: URL de conexión a tu base de datos MongoDB.
SECRET_JWT: Secreto para firmar los tokens JWT.

¡Gracias por visitar el repositorio de Hotel Code!
