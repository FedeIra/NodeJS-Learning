// PROBAMOS LOS NUEVOS MÉTODOS ACÁ. HABRÍA QUE HACERLO TAMBIÉN EN EL ROUTER MATEMÁTICAS.
const express = require('express'); // se tiene que importar express

const { programacion } = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

//! MIDDLEWARE:
routerProgramacion.use(express.json()); // esto te va a permitir procesar el cuerpo de la solicitud post que hicimos abajo en formato json. Sirve para cualquier tipo de solicitud. Las funciones middleware se ejecutan después de recibir una soliciutd y anes de enviar una respuesta. Tienen acceso al objeto de la solicitud, al objeto de la respuesta y a next(), una función que se llama para ejecutar el próximo middleware.

// Cursos de programación:
routerProgramacion.get('/', (req, res) => {
  // res.send(programacion);
  res.json(programacion); // este metodo envía una respuesta en formato json. Es una forma de enviar una respuesta en formato json. Se pueden reemplazar todos los send acá por este formato y va a funcionar igual. Nos garantiza que se va a enviar la respuesta en formato json sin importar el formato que se envíe.
});

routerProgramacion.get(`/:lenguaje`, (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  if (req.query.ordenarPorVistas === `vistas`) {
    return res.send(resultados.sort((a, b) => b.vistas - a.vistas));
  }
  res.send(resultados); // en realidad no hace falta los json stringify pq estamos viendolos en la api y no en la web
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );
  if (resultados.length === 0) {
    // return res
    //   .status(404)
    //   .send(
    //     `No se encontraron cursos de lenguaje: ${lenguaje} de nivel: ${nivel}`
    //   );

    //Otra opción:
    // return res.status(404).end(); // esto es lo mismo que el return anterior, solo que retorna algo vacío en lugar de una cadena de caracteres.

    //Otra opción:
    //Normalmente el estado 404 es cuando el usuario intenta ingresar a un camino que no es valido, tipo una ruta que no existe. Si en lugar de un error queremos decirle que no hay contenido sobre lo que consultó (lo que es más exacto que un error 404), usamos el error 204.
    return res
      .status(204)
      .send(
        `No se encontraron cursos de lenguaje: ${lenguaje} de nivel: ${nivel}`
      );
  }

  res.send(resultados);
});

//! POST:
routerProgramacion.post(`/`, (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo); // agregamos el curso al arreglo de programación. Esto es una simulación pq en realidad no está guardado en una base de datos.
  res.send(programacion);
});

//! PUT:
/* Es un método http que te permite actualizar una entidad (o conjunto de propiedades que se representa en una base de datos). Con put tenes que enviar TODAS las propiedades del objeto y solo las actualizadas son modificadas: */
routerProgramacion.put(`/:id`, (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id; //así accedemos a los parametros url del recurso.
  const indice = programacion.findIndex((curso) => curso.id == id); // buscamos el indice del curso que se quiere actualizar. Se usa == (no igualdad estricta) pq en la base de datos está representada como un número pero cuando lo busquen por la url va a estar como string.
  if (indice >= 0) {
    programacion[indice] = cursoActualizado; // actualizamos el curso.
  }
  res.status(200).send(programacion);
});

// PATCH:
/* Es un método http que te permite actualizar una entidad (o conjunto de propiedades que se representa en una base de datos). Con patch solo tenes que enviar las propiedades que se van a actualizar: */
routerProgramacion.patch(`/:id`, (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id; //así accedemos a los parametros url del recurso.
  const indice = programacion.findIndex((curso) => curso.id == id); // buscamos el indice del curso que se quiere actualizar. Se usa == (no igualdad estricta) pq en la base de datos está representada como un número pero cuando lo busquen por la url va a estar como string.
  if (indice >= 0) {
    const cursoAModificar = programacion[indice]; // obtenemos el curso que se quiere actualizar.
    Object.assign(cursoAModificar, infoActualizada); // actualizamos el curso. Te permite pasar un objeto que vamos a modificar y otro que tiene propiedades y valores que queremos modificar.
  }
  res.status(200).send(programacion);
});

// DELETE:
routerProgramacion.delete(`/:id`, (req, res) => {
  const id = req.params.id; //así accedemos a los parametros url del recurso.
  const indice = programacion.findIndex((curso) => curso.id == id);
  if (indice >= 0) {
    programacion.splice(indice, 1); // eliminamos el curso.
  }
  res.status(200).send(programacion);
});

module.exports = routerProgramacion;
