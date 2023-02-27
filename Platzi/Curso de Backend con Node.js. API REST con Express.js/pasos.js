/*
!EXPRESS.JS

PASOS:

!1) ENTORNO DE PRODUCCIÓN:

Primero trabajamos con el entorno utilizando nodemon como servidor de desarrollo.

*1) npm init -y
*2) .gitignore
Puedo usar gitignore.io (https://www.toptal.com/developers/gitignore/) Le agregamos node, windows, linux y macOS y luego create
Te da una configuración de todos los archivos que no deberíamos tener en cuenta en neustro repo. Copiamos y pegamos en .gitignore
*3) .editorconfig
Para que todos los desarrolladores tengan una misma configuración de editor.
*4) .eslintrc.json
Lo mismo de editorconfig con eslint. Para usar mismo standard
*5) index.js (crear archivo)
*6) package.json
A) En scripts agregamos "dev": "nodemon index.js" para levantar un entorno de desarrollo.
B) Para producción: "start": "node index.js"
C) "lint": "eslint" para correr eslint
*7) agregar dependencias
A) npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
El -D es porque son dependencias para modo de desarrollo y no para producción.
*8) npm run dev
Corres el entorno de desarrollo.
*9) npm run start
Corres el entorno de producción.

*/

/*
!2) INSTALACIÓN DE EXPRESS Y SERVIDOR
*1) npm i express
*2) index.js
*3) npm run dev
Para correrlo en modo de desarrollo
Abrir localhost, puerto que le hayas puesto.

!3) RUTAS
*1) Podes agregar nuevas rutas. En general hay que usar res.json
*2) instalar JSON viewer si no lo tenes

?API Restfull
REST:: representational state transfer. Servicios web que se comunican por el protocolo http. Tiene 4 metodos: get, put, post y delete.

CRUD: create, read, update, delete.

Get: solicitar info.
Put: trabaja sobre modificaciones.
Patch: update
Post: para crear nuevos productos, categorías, etc.
Delete: para hacer eliminación.

Table with method of rest, application in /products route and application in /products{id} route:

Method | /products | /products/:id
-------|-----------|---------------
GET    | get list  | Get
PUT    | replace   | Update/Get a product
PATCH  | No apply  | Update
POST   | Create    | No apply
DELETE | Delete    | Delete

Patch debería enviarle solo los datos que quiero modificar. En put se reemplaza todo por lo que tengo que mandar todos los datos del producto por ejemplo.

Los endpoints son las URLs de un API o un backend que responden a una petición. Los mismos entrypoints tienen que calzar con un endpoint para existir. Algo debe responder para que se renderice un sitio con sentido para el visitante.

!4: DATA FAKE
Para usar data fake y probar distintos endpoints podemos usar una librería. Permite generar date fake.

*1) npm i faker
*2) se importa en index.js
*/

/*
?Single Responsability Principle(SRP):
Cada función debe tener una única responsabilidad. Si una función hace más de una cosa, es mejor separarla en dos funciones. Aplica para clases, archivos, métodos. Esto también aplica a las rutas.
*/

/*
!ROUTERS:
Para modularizar todo lo máximo posible, separamos las rutas según categoría o lo que busquen creando una carpeta routers. Ahi vamos separando archivos con rutas de la misma categoría/
*1) folder routes
*2) copy/pase routes en distintos archivos según categoría.
*3) require express y express.router
*4) cambiar ruta app por router, y borrar primera ruta de la url /products = /
*5) exportar router
*6) importar router en nuevo index.js dentro de carpeta routes
*7) crear e importar router en index.js principal
*8) require routerApi en index principal de las rutas y routerApi(app);
*/
