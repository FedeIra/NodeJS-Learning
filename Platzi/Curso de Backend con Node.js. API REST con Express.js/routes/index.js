const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router); //? Para que todas las rutas tengan /api/v1 al principio
  router.use('/products', productsRouter); //al poner el router /api/v1 cambia app.use por router,use así se le agrega el api/v1
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}; //? Para que el router se use en el index.js y no en el app.js (que es donde se usa el app) se crea este archivo y se exporta la función routerApi que recibe el app y se usa en el index.js con routerApi(app);

module.exports = routerApi;
