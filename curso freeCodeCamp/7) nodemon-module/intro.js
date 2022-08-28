/*
!NODEMON
Herramienta que reinicia la aplicación de node cuando detecta algún cambio.

npm install -g nodemon
El g es para instalarlo de forma global.

Cuando la ejecutas escribis: nodemon <aplicación>

Si no funciona poner directamente: npx nodemon <scriptname.js>
*/

const http = require('http');

const servidor = http.createServer((req, res) => {
  res.end('Hola, freecodecamp');
});

const PUERTO = 1337;

servidor.listen(PUERTO, () => {
  console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});
