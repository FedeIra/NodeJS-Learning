const express = require('express');
const router = express.Router();

//? GET WITH QUERY PARAMS
/* Puedo tener por medio de parametros query comportamientos como paginar, paginación con limit y offset, con filtros como ?region, y con doble parametro query &. Normalmente se usan para hacer filtros.
 */
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  // como son opcionales debería hacer una validación:
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
}); //http://localhost:3000/api/users?limit=10&offset=200

module.exports = router;
