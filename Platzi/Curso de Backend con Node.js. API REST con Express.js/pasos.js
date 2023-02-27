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

!4) API Restfull
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

*/
