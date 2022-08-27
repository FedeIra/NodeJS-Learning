/*
!ROUTING EN NODE.JS
Significa manjear las solicitudes del cliente en el navegador en base a ciertos criterios.

Se trata de crear distintas rutas en el servidor para cuando desde e; navegador hagan una solicitud hacer tal cosa. Por eso, el método es importante. GET, POST, PUT, DELETE, etc.

Con el path sabes el recurso especifico que quieres acceder.

Y por último, hay que decirle al servidor cómo manejar el request.

Es decir, MÉTODO + PATH + CÓMO MANEJAR EL REQUEST. Qué, dónde y cómo manejar el request.
*/

const http = require('http');

// const cursos = require(`./D) cursos.js`);
const { infoCursos } = require(`./D) cursos.js`);

const server = http.createServer((req, res) => {
  // const { method } = req;
  const method = req.method;
  switch (method) {
    case `GET`:
      return manejarSolicitudGET(req, res);
    case `POST`:
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      console.log(
        `el metodo usado no puede ser manejador por el servidor: ${method}`
      );
      res.end(
        `El metodo usado no puede ser manejador por el servidor: ${method}`
      );
  }
});

//Definimos la solicitud manejarSolicitudGET:
const manejarSolicitudGET = (req, res) => {
  const path = req.url;

  console.log(res.statusCode); // el 200 es por defecto por lo que no hace falta establecerlo explicitamente en nuestro código. Para el resto (ej: 404) si no se establece, el servidor devuelve un error.

  /* También aquellos routing que son a apis se recomienda agregarle api */

  if (path === `/`) {
    // res.statusCode = 200;
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(`Bienvenidos a mi primer servidor y API creado por Node.js`);
  } else if (path === `/api/cursos`) {
    // res.statusCode = 200;
    return res.end(JSON.stringify(infoCursos));
  } else if (path === `/api/cursos/programacion`) {
    // res.statusCode = 200;
    return res.end(JSON.stringify(infoCursos.programacion));
  } else if (path === `/api/cursos/matematicas`) {
    // res.statusCode = 200;
    return res.end(JSON.stringify(infoCursos.matematicas));
  } else {
    res.statusCode = 404;
    return res.end(`El recurso solicitado no existe...`);
  }
};

//Definimos la solicitud manejarSolicitudPOST:
const manejarSolicitudPOST = (req, res) => {
  const path = req.url;
  if (path === `/cursos/programacion`) {
    // res.statusCode = 200;
    // Si le quiero agregar un post al servidor, debo hacerlo de la siguiente manera. En este caso, el request recibo información:
    let cuerpo = '';
    req.on('data', (contenido) => {
      cuerpo += contenido.toString();
    });
    req.on('end', () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);
      cuerpo =
        JSON.parse(
          cuerpo
        ); /* estoy pasando el cuerpo como argumento reemplazando su valor.  */
      console.log(
        cuerpo
      ); /* ahora va a estar representado como objeto de javascript */
      console.log(cuerpo.titulo);
      res.end(`El servidor recibió una solicitud POST para el recurso ${path}`);
    });
  } else {
    res.statusCode = 404;
    return res.end(`El recurso solicitado no existe...`);
  }
};
/*
!CON EXPRESS ES MUCHO MÁS SIMPLE  */
const PUERTO = 3000;

server.listen(PUERTO, () => {
  console.log(`Servidor corriendo en el puerto  http://localhost:${PUERTO}`);
});
