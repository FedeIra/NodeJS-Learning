const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');

const routerApi = (app) => {
  app.use('/api/products', productsRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/categories', categoriesRouter);
}; //? Para que el router se use en el index.js y no en el app.js (que es donde se usa el app) se crea este archivo y se exporta la función routerApi que recibe el app y se usa en el index.js con routerApi(app);

module.exports = routerApi;
