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
*/
