const express = require('express'); // se tiene que importar express

const { programacion } = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

//!Parametros de ruta:
// Cursos de programación con ROUTER:
routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get(`/:lenguaje`, (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = infoCursos.programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  //!CONSULTA QUERY:
  if (req.query.ordenarPorVistas === `vistas`) {
    res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)));
  }
  res.send(JSON.stringify(resultados));
});

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

module.exports = routerProgramacion;
