const boom = require('@hapi/boom');

const validatorHandler = (schema, property) => {
  // no tienen el párametro de err pq no es un middleware de error. Recibimos solo el esquema que queremos validar y la propiedad. Evaluas de cada request la información y aplicar el esquema. Aplicando CLOSURES (función que retorna otra función) para construir middleware de forma dinamica.
  return (req, res, next) => {
    // req, res, next son los parámetros que recibe el middleware
    const data = req[property]; // obtenemos la propiedad que queremos validar. Puede venir de un body, params o query. Ej: req.body, req.params, req.query
    const { error } = schema.validate(data, { abortEarly: false }); // aplicamos el esquema a la propiedad que queremos validar
    //? abortEarly: false para que no se detenga en el primer error que encuentre. Si no lo ponemos, cuando encuentre el primer error, se detiene y no valida el resto de los campos. De esta forma, se le da al cliente todos los errores sucedidos en una sola validación.
    if (error) {
      next(boom.badRequest(error)); // pasamos el error al middleware de error tipo 400. El next es para que sea procesado por el middleware de errores.
    }
    next(); // le decimos que siga para ingresar al servicio.
  };
};

//exportamos el middleware
module.exports = { validatorHandler };
