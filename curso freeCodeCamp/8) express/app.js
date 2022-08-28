/*
!EXPRESS
Framework más popular de node.js.
Ayuda a desarrollar aplicaciones del node.js.

Mecanismo para definir routing.

!CRUD:
Operaciones básicas que se pueden realizar con la información de una base de datos. Relacionada con las APIs.

CREATE: Insertar un nuevo registro. // POST
READ: Obtener un registro. // GET
UPDATE: Actualizar un registro. // PUT
DELETE: Eliminar un registro. // DELETE

API: Interfaz de programación de aplicaciones. Es un tipo de interfaz que permite a los desarrolladores crear aplicaciones de forma sencilla. Permite que un software se comporte de forma similar a una aplicación web. No es usada directamente por el usuario, sino que se usa para crear una API para que el usuario pueda interactuar con ella. Es decir, es usada por el programador que usa la API para implementar su programa. Es la CONEXIÓN entre en navegador y el servidor.

!REST:
Es un estilo de arquitectura de software que permite que los programadores puedan crear aplicaciones de forma sencilla. Es una arquitectura de software que permite que los programadores puedan crear aplicaciones de forma sencilla.

!RESTFUL API:
Es una API basada en el estilo REST.
*/

/*
!PARÁMETROS QUERY:
Ej: http://localhost:1337/api/cursos/programacion/Javascript?ordenar=vistas

EJEMPLO:

console.log(req.query.ordenar);

  if (req.query.ordenarPorVistas === `vistas`) {
    res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)));
  }
*/

/*
!ROUTERS
const routerProgramacion = express.Router();
app.use(`/api/cursos/programacion`, routerProgramacion); // usamos el routerProgramacion para poder usarlo. Podes ir expandiendo esta base inicial

*/

const { infoCursos } = require('./cursos.js');

const express = require('express'); // lo importamos para poder usarlo
const app = express(); // nos retorna una aplicación de express

//! ROUTING:
app.get('/', (req, res) => {
  // cuando el usuario ingrese a la ruta '/'
  res.send('Mi primer servidor 💻 con express'); // le respondemos con un mensaje
});

//!ROUTERS, parte 1):
// router para programación:
const routerProgramacion = express.Router();
app.use(`/api/cursos/programacion`, routerProgramacion); // usamos el routerProgramacion para poder usarlo. Podes ir expandiendo esta base inicial

// router para matemáticas:
const routerMatematicas = express.Router();
app.use(`/api/cursos/matematicas`, routerMatematicas);

/*
!EXPRESS: Agregar rutas:
*/
app.get('/api/cursos', (req, res) => {
  res.send(
    JSON.stringify(infoCursos)
  ); /* Si lo queres convertir a formato json */
});

//Cursos de programación:

//Sin Router:
// app.get('/api/cursos/programacion', (req, res) => {
//   res.send(JSON.stringify(infoCursos.programacion));
// });
//! con ROUTERS, parte 2):
routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

// Cursos de matemáticas:
routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});

/*
!Parametros de ruta:
Si tenes muchas rutas podes usar lo siguiente:
*/

// Cursos de programación:
// app.get(`/api/cursos/programacion/:lenguaje`, (req, res) => {
//   const lenguaje = req.params.lenguaje;
//   const resultados = infoCursos.programacion.filter(
//     (curso) => curso.lenguaje === lenguaje
//   );

// Cursos de programación con ROUTER:
routerProgramacion.get(`/:lenguaje`, (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  // con dos parámetros de búsqueda (por lo que dos parámetros de filtro)
  // app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
  //   const lenguaje = req.params.lenguaje;
  //   const nivel = req.params.nivel;
  //   const resultados = infoCursos.programacion.filter(
  //     (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  //   );
  //   if (resultados.length === 0) {
  //     return res
  //       .status(404)
  //       .send(
  //         `No se encontraron cursos de lenguaje: ${lenguaje} de nivel: ${nivel}`
  //       );
  //   }

  //   res.send(JSON.stringify(resultados));
  // });

  // con dos parámetros de búsqueda (por lo que dos parámetros de filtro) + ROUTER:
  routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = infoCursos.programacion.filter(
      (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
    );
    if (resultados.length === 0) {
      return res
        .status(404)
        .send(
          `No se encontraron cursos de lenguaje: ${lenguaje} de nivel: ${nivel}`
        );
    }

    res.send(JSON.stringify(resultados));
  });

  //!CONSULTA QUERY:
  if (req.query.ordenarPorVistas === `vistas`) {
    res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)));
  } // esto ordena de menor a mayor los lenguajes de python respecto al valor de la propiedad vistas.
  res.send(JSON.stringify(resultados));
});

// Cursos de matemáticas (sin query):
app.get('/api/cursos/matematicas/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = infoCursos.matematicas.filter(
    (curso) => curso.tema === tema
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }
  res.send(JSON.stringify(resultados));
});

//!PUERTO:
const PUERTO = process.env.PORT || 1337;

app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto ${PUERTO}...`);
});
