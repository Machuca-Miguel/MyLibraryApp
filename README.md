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

npm run dev


2. Navega hasta el directorio `client` dentro del proyecto y ejecuta el siguiente comando para iniciar el servidor de desarrollo del frontend:

npm run dev


3. Accede a la aplicación en tu navegador web utilizando la dirección [http://localhost:3000](http://localhost:3000).

## Contribución

Si deseas contribuir a este proyecto, puedes realizar los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con una descripción clara de la función o corrección que planeas agregar.
3. Realiza los cambios en tu rama.
4. Envía un pull request describiendo los cambios que has realizado.

## Autor

Miguel Machuca: https://www.linkedin.com/in/miguel-machuca/



<------------------------------------------------------------------------------------------------------------------------------------------------------>

# MyLibrary



MyLibrary is a web application that allows users to store, organize, and rate books, as well as add friends. The application is built with JavaScript (Node.js) on the backend and React on the frontend.

## Features

- User Registration: Users can create an account in the application by providing their name, email address, and password.
- Login: Users can log in to the application using their registered email and password.
- Book Management: Users can add books to their personal library, mark books as read or in progress, and track their reading progress.
- Ratings and Reviews: Users can assign a rating and add comments for the books they have read.
- Friends List: Users can search for and add friends to their network within the application.
- Intuitive Interface: The application offers a modern and user-friendly interface with clear navigation and search/filtering options.

## Technologies Used

- Backend: JavaScript (Node.js), Express.js, MySQL as the relational database.
- Frontend: React.js, ReactBootstrap, and Axios for HTTP requests.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the root directory of the server project.
3. Run the following command to install the backend dependencies:

      $ npm install

4. Navigate to the root directory of the client project.
5. Run the following command to install the frontend dependencies:

      $ npm install

      
## Database Configuration

1. Create a MySQL database on your local server or a database hosting service.
2. Open the `config.js` file located in the root directory of the project.
3. Update the configuration values for the database connection according to your own credentials:


host: 'localhost',
user: 'your_user',
password: 'your_password',
database: 'your_database_name';


## Ejecución

1. From the root directory of the project, run the following command to start the backend server:

npm run dev


2. Navigate to the client directory within the project and run the following command to start the frontend development server:

npm run dev


3. Access the application in your web browser using the address http://localhost:3000.

## Contribución

If you wish to contribute to this project, you can follow these steps:

1. Fork this repository.
2. Create a branch with a clear description of the feature or fix you plan to add.
3. Make the changes in your branch.
4. Submit a pull request describing the changes you have made.

## Autor

Miguel Machuca: https://www.linkedin.com/in/miguel-machuca/







