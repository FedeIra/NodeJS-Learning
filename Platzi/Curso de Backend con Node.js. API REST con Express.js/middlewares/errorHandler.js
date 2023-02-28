// error handler general
const logErrors = (err, req, res, next) => {
  console.log('se ejecutó logErrors');
  console.log(err);
  next(err); //que siga con la ejecución normal. Lo estamos ejecutando como un middleware de tipo error pq enviamos el error.
};

// Con esto bloqueamos errores
const errorHandler = (err, req, res, next) => {
  console.log('se ejecutó errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}; // aunque no utilizamos next hay que ponerle los 4 parametros. Es la forma para que detecte que estamos usando un middleware.

// Agregamos middleware para boom errors:
const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err; //? destructuring. En el output boom tiene toda la info. del error
    res.status(output.statusCode).json(output.payload); //? statusCode y payload son propiedades de output.
  }
  next(err); //? si no es de tipo boom, para que siga con la ejecución normal. Lo estamos ejecutando como un middleware de tipo error pq enviamos el error. Acá va a la función errorHandler();
};

module.exports = { logErrors, errorHandler, boomErrorHandler };
