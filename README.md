# api-rest-node-js

API REST con MongoDB y Express
Este repositorio contiene una API REST desarrollada con Node.js, MongoDB y Express. La API está diseñada para proporcionar endpoints que permiten interactuar con una base de datos MongoDB mediante solicitudes HTTP. Utiliza varias dependencias esenciales para su funcionamiento, que se detallan a continuación.

Dependencias
Las siguientes dependencias son utilizadas en este proyecto:

bcryptjs: Librería para el hash y la verificación segura de contraseñas.
dotenv: Carga variables de entorno desde un archivo .env para la configuración.
express: Marco de aplicación web de Node.js que facilita la creación de API y rutas.
express-validator: Middleware para validar y sanitizar datos de solicitudes HTTP.
jsonwebtoken: Implementación de JSON Web Tokens (JWT) para autenticación.
mongoose: Modelado de objetos MongoDB y abstracción para Node.js.
nodemon: Utilidad que monitoriza cambios en los archivos y reinicia automáticamente el servidor.
Asegúrate de instalar estas dependencias utilizando el comando npm install antes de ejecutar el proyecto.

Instalación
Para configurar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

Clona este repositorio: git clone https://github.com/nic0im/api-rest-node-js-mongodb.
Navega a la carpeta del proyecto: cd api-rest-node-js-mongodb
Instala las dependencias: npm install.

Uso
Una vez que las dependencias estén instaladas, puedes iniciar el servidor utilizando npm start o npm run dev si deseas utilizar Nodemon para un reinicio automático en caso de cambios.

Asegúrate de configurar tus variables de entorno en un archivo .env para la conexión a la base de datos y otras configuraciones sensibles.

Contribución
Si deseas contribuir al desarrollo de esta API, sigue estos pasos:

Haz un fork de este repositorio.
Crea una rama para tu función o corrección: git checkout -b nombre-de-tu-rama.
Realiza tus modificaciones y commits: git commit -m "Descripción de tus cambios".
Sube tus cambios a tu repositorio fork: git push origin nombre-de-tu-rama.
Abre una solicitud pull en este repositorio.

Créditos
Este proyecto utiliza las dependencias mencionadas anteriormente, que son creadas y mantenidas por la comunidad de código abierto.
