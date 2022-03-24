


# Simulación del backend de un videoclub online
***

### **Descripción del proyecto**

En este proyecto crearemos un backend 
con las siguientes funcionalidades:

- Comunicación mediante apiRest a API externa TheMovieDatabase.
- Sistema de usuarios con usuario genérico y superusuario.
- Base de datos mediante sequelize y mysql.
- Sistema de token temporal para acceso a los endpoints.
- Encriptación de contraseñas mediante bcrypt.
- Testing de la base de datos con seeders.


***


### **Instalación**

#### ***Dependencias y software***


![Software](/img/dependencias.png)

Cree una carpeta y ábrala en *Visual Studio Code* u otro editor de código.
Clone el repositorio. *`git@github.com:RafaelOrti/backend-peliculas.git`*
```bash
git clone git@github.com:RafaelOrti/backend-peliculas.git
```

En primer lugar, debemos instalar una serie de dependencias necesarias para nuestro proyecto utilizando el administrador de paquetes npm.

Abra una nueva terminal y escriba:
```bash
npm i
```

Instalará automáticamente todas las dependencias necesarias.

Abra *MySQL Workbench* y cree un nuevo esquema con el mismo nombre que en config.json en *"development".*

Ahora debe migrar la base de datos a *MySQL Workench*.

Abra una nueva terminal en *VSC*.

Instale Sequelize .

```bash
npm i sequelize
```

Ahora cree y migre su base de datos.

```bash
sequelize db:create
sequelize db:migrate
```

Ejecute el servidor con node.js:
```bash
npm run dev
```

Ahora podrá leer y modificar datos de *Postman*.



<!-- Sequelieze no es necesario para el usuario -->


***

### ***Endpoints & Postman testing***


### ***endpoints de usuario***

Campos de usuario:

`{`

   ` "name" : <insertar nombre aquí>`,

   ` "age": <inserte aquí la fecha de nacimiento con este formato: '1000-01-01 00:00:00'>`,

   ` "surname": <inserte apellido de usuario aquí>`,

   `"email": <insertar correo electrónico aquí>`

   `"password": <inserte la contraseña aquí>`,

   ` "nickname": <inserte nickname de usuario aquí>`,

   ` "rol": <inserte rol de usuario aquí>`,

   
   
`}`


#### - ***crear nuevos usuarios***
- ``
http://localhost:3000/usuarios/``

Método POST: crear un nuevo usuario

#### - ***mostrar usuarios***

- ``
http://localhost:3000/usuarios/``

Método GET: muestra una lista de todos los usuarios


#### - ***modificar datos de usuario***

##### **JWT o privilegios de administrador necesarios**

- ``
http://localhost:3000/usuarios/:id``

Método PUT: modificar datos de usuario


#### - ***eliminar datos de usuario***

##### **Se necesitan privilegios de administrador**
- ``
http://localhost:3000/usuarios/``

Método DELETE: eliminar todos los usuarios
- ``
http://localhost:3000/usuarios/:id``

Método DELETE: eliminar usuario por id

***

### ***Endpoints de películas***

Campos de películas:

`{`

   `"titulo": <insertar título aquí>`,

   ` "sinopsis": <inserte la sinopsis aquí`,

   ` "adulto" : <verdadero o falso>`,

   `"popularity": <insertar popularidad aquí>`,

   `"image": <insertar imagen aquí>`
   
   `"fecha" : <insertar fecha aquí>`
   
`}`


#### - ***añadir nuevas películas***

- ``
http://localhost:3000/películas/``

Método POST: agregar una nueva película

#### - ***busca una película***


- ``
http://localhost:3000/películas/``

Método GET: muestra una lista de todas las películas


- ``
http://localhost:3000/movies/novedades``

Método GET: muestra las películas más recientes


- ``
http://localhost:3000/películas/adultos``


Método GET: muestra una lista de películas para adultos


#### - ***actualizar datos de la película***

##### **JWT (privilegios de usuario) o privilegios de administrador necesarios**

#### - ***eliminar películas***

##### **Se necesitan privilegios de administrador**

***

### ***Puntos finales del pedido***

##### **JWT (privilegios de usuario) o privilegios de administrador necesarios**

Campos de pedido:

`{`
   `price: <insertar precio aquí>`
   
   ` peliculaId : <inserte movieId aquí>`

   ` usuarioId: <insertar ID de usuario aquí>`

   ` fecha: <inserte la fecha aquí con este formato '1000-01-01 00:00:00'>`

`}`


#### - ***crear pedidos***

- ``
http://localhost:3000/pedidos/``

Método GET: muestra una lista de todos los pedidos

- ``
http://localhost:3000/pedidos/nuevo``

Método POST: crear un nuevo pedido
***

#### ***Privilegios de nivel***

  

Los usuarios genéricos pueden explorar nuestra base de datos y crear solicitudes para un pedido.

Los usuarios de nivel Admin podrán crear un máximo de 5 pedidos cada mes cuando lo deseen.
=======
<a name="top"></a>
# Título de nuestro documento
 
## Índice de contenidos
* [Contenido 1](#item1)
* [Contenido 2](#item2)
* [Contenido 3](#item3)
* [Contenido 4](#item4)
 
Lorem ipsum dolor
 
<a name="item1"></a>
### Contenido 1
 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 
[Subir](#top)
 
<a name="item2"></a>
### Contenido 2
 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 
[Subir](#top)
 
<a name="item3"></a>
### Contenido 3
 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 
[Subir](#top)
 
<a name="item4"></a>
### Contenido 4
 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 
[Subir](#top)
>>>>>>> dev
