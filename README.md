# MyLibrary


## Descripción
MyLibrary es una aplicación web que permite a los usuarios almacenar, organizar y valorar libros, así como también agregar amigos. La aplicación está construida con JavaScript (Node.js) en el backend y React en el frontend.

## Características

- Registro de usuarios: Los usuarios pueden crear una cuenta en la aplicación proporcionando su nombre, dirección de correo electrónico y contraseña.
- Inicio de sesión: Los usuarios pueden iniciar sesión en la aplicación utilizando su correo electrónico y contraseña registrados.
- Gestión de libros: Los usuarios pueden agregar libros a su biblioteca personal, marcar libros como leídos o en progreso, y registrar su progreso de lectura.
- Valoraciones y opiniones: Los usuarios pueden asignar una calificación y agregar comentarios sobre los libros que han leído.
- Lista de amigos: Los usuarios pueden buscar y agregar amigos a su red de contactos en la aplicación.
- Interfaz intuitiva: La aplicación ofrece una interfaz de usuario moderna y fácil de usar, con una navegación clara y opciones de búsqueda y filtrado.

## Tecnologías utilizadas

- Backend: JavaScript (Node.js), Express.js, MySQL como base de datos relacional.
- Frontend: React.js, ReactBootstrap y Axios para las solicitudes HTTP.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio raíz del proyecto server
3. Ejecuta el siguiente comando para instalar las dependencias del backend:
   
   $npm i
   
5. Navega hasta el directorio raíz del proyecto client
6. Ejecuta el siguiente comando para instalar las dependencias del frontend:

   $npm i

## Configuración de la base de datos

1. Crea una base de datos MySQL en tu servidor local o en un servicio de alojamiento de bases de datos.
2. Abre el archivo `config.js` ubicado en el directorio raíz del proyecto.
3. Actualiza los valores de configuración para la conexión a la base de datos según tus propias credenciales:

host: 'localhost',
user: 'tu_usuario',
password: 'tu_contraseña',
database: 'nombre_de_tu_base_de_datos'


## Ejecución

1. Desde el directorio raíz del proyecto, ejecuta el siguiente comando para iniciar el servidor backend:

npm run start


2. Navega hasta el directorio `client` dentro del proyecto y ejecuta el siguiente comando para iniciar el servidor de desarrollo del frontend:

npm run start


3. Accede a la aplicación en tu navegador web utilizando la dirección [http://localhost:3000](http://localhost:3000).

## Contribución

Si deseas contribuir a este proyecto, puedes realizar los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con una descripción clara de la función o corrección que planeas agregar.
3. Realiza los cambios en tu rama.
4. Envía un pull request describiendo los cambios que has realizado.

## Autor

Miguel Machuca: https://www.linkedin.com/in/miguel-machuca/



