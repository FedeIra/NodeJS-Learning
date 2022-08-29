const { infoCursos } = require('..datos/cursos.js');
const routerProgramacion = require('./routers/programacion.js');
const routerMatematicas = require('./routers/matematicas');

const express = require('express');
const app = express();

// const routerProgramacion = express.Router(); LO MANDAMOS A CARPETA ROUTERS. LLevo también todo lo que inicie con routerProgramacion.
app.use(`/api/cursos/programacion`, routerProgramacion);

// const routerMatematicas = express.Router(); LO MANDAMOS A CARPETA ROUTERS. LLevo también todo lo que inicie con routerMatematicas.
app.use(`/api/cursos/matematicas`, routerMatematicas);

//! ROUTING:
app.get('/', (req, res) => {
  res.send('Mi primer servidor 💻 con express');
});

//!EXPRESS: Agregar rutas:

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

//!PUERTO:
const PUERTO = process.env.PORT || 1337;

app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto ${PUERTO}...`);
});
