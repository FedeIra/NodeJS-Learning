/*
!DEBUGGER:
Node.js viene integrado con un debugger con flap

En lugar de correr nodemon de una:
!node --inspect "nombre del archivo.js"
Te devuelve: Debugger listening on ws://127.0.0.1:9229/065f6f08-888c-4beb-a217-9d5c161f1944
Ingresas en el debugger de chrome con:
!chrome://inspect
Clickeas abajo de todo en inspect
En profiler podes ver cada acción que se realiza en el server y cuánto del tiempo usa. Sirve para darte cuenta que es lo que está demorando la ejecución del programa.
*/

const http = require('http');

const router = (req, res) => {
  console.log('nueva petición');
  console.log(req.url);
  switch (req.url) {
    case '/hola':
      let saludo = hola();
      res.write(saludo);
      res.end();
      break;
    default:
      res.write('Error 404: No sé lo que quieres');
      res.end();
  }
};

const hola = () => {
  return 'Hola que tal';
};

http.createServer(router).listen(3000);

console.log('Escuchando http en el puerto 3000');
