const http = require(`http`);

const server = http.createServer((req, res) => {
  //! PARA VER LAS SOLICITUDES QUE SE HACEN AL SERVIDOR:
  console.log(`===> req(solicitud)`);
  console.log(
    req.url
  ); /* /freecodecamp/exercises... Esto te devuelve lo que escribís en el buscador luego de localhost/  */
  console.log(
    req.method
  ); /* GET: Esto te devuelve el método de la solicitud (GET, POST, PUT, DELETE)*/
  console.log(
    req.headers
  ); /* Esto te devuelve los headers de la solicitud (headers de la solicitud)*/
  //!PARA VER Y MODIFICAR ESTADOS DE LAS RESPUESTAS DEL SERVIDOR:
  console.log(`===> res(respuesta)`);
  console.log(
    res.statusCode
  ); /* Esto te devuelve el código de estado de la respuesta (200, 404, 500, etc). Ahroa, como tuvo éxito el request te devuelve 200*/
  // res.statusCode = 404;
  // console.log(
  // res.statusCode
  // ); /* Esto te devuelve el código de estado de la respuesta que ahora la seteamos a 404*/
  //! CONFIGURAR LA CABECERA DE LA RESPUESTA
  res.setHeader(
    'content-type',
    `application/json`
  ); /* Esto te configura la cabecera de la respuesta (content-type) Información adicional que le vamos a enviar al cliente. Por ejemplo, el tipy de info. Permite incluir ese tipo de archivo en la cabecera de la respuesta*/
  console.log(
    res.getHeaders()
  ); /* Esto te devuelve el tipo de info que hay en la cabecera de la respuesta*/
  res.end('Hola, mundo ponele');
});

const PUERTO = 3000;
server.listen(PUERTO, () => {
  console.log(`===> server listening on http://localhost:${PUERTO}...`);
});

/*
!USAR LA EXTENSIÓN REST CLIENT con el archivo index.http  */
