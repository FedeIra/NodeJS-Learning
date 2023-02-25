/*
!MODULO HTTP:
Nos permite crear un servidor o conectar con un servidor externo.
*/

const http = require('http');

/* con esto podemos construir nuestros servidores: */

http
  .createServer((req, res) => {
    console.log('nueva petición');
    console.log(req.url); // traemos la url q estamos llamando
    res.end(); // cerramos la petición
  })
  .listen(3000); //El servidor tiene que estar escuchando en un puerto.

const http = require('http');

/* con esto podemos construir nuestros servidores: */

http
  .createServer((req, res) => {
    console.log('nueva petición');
    console.log(req.url); // traemos la url q estamos llamando
    // Escribir respuesta al usuario:
    res.writeHead(201, { 'Content-Type': 'text/plain' }); // 200 es el código de que todo está bien
    res.write('Hola, ya se usar HTTP de node.js');
    res.end(); // cerramos la petición
  })
  .listen(3000); //El servidor tiene que estar escuchando en un puerto.

console.log('Escuchando http en el puerto 3000'); // está bueno poner esto para saber doónde está escuchando el servidor

/*
Si ingresas en el puerto en la terminal te aparee lo siguiente:
nueva petición
/
nueva petición
/favicon.ico
*/

// ?Cómo podemos ordenar y limpiar este código?
const http = require('http');

const router = (req, res) => {
  console.log('nueva petición');
  console.log(req.url);
  switch (req.url) {
    case '/hola':
      res.write('Hola, que tal');
      res.end();
      break;
    default:
      res.write('Error 404: No sé lo que quieres');
      res.end();
  }
  // res.writeHead(201, { 'Content-Type': 'text/plain' });
  // res.write('Hola, ya se usar HTTP de node.js');
  // res.end();
};

/* con esto ya podemos crear nuestros primeros routers */

http.createServer(router).listen(3000);

console.log('Escuchando http en el puerto 3000');
