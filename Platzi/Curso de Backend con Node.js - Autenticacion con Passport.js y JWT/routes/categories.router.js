const express = require('express');
const passport = require('passport');

const CategoryService = require('./../services/category.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
} = require('./../schemas/category.schema');
const {
  // checkAdminRole,
  checkRoles,
} = require('./../middlewares/auth.handler.js');

const router = express.Router();
const service = new CategoryService();

router.get(
  '/',
  // passport.authenticate('jwt', { session: false }),
  // checkRoles('admin', 'seller', 'customer'),
  async (req, res, next) => {
    try {
      const categories = await service.find();
      res.json(categories);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  // passport.authenticate('jwt', { session: false }),
  // checkRoles(['admin', 'seller', 'customer']),
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

// router.post(
//   '/',
//   passport.authenticate('jwt', { session: false }), //? passport.authenticate es un middleware que se ejecuta antes de la función que le pasamos como segundo parámetro. En este caso, la función válida si el usuario tiene el token correspondiente para poder usar este servicio y crear una categoría. Podría depender, por ejemplo, que en el token salga que tiene como rol admin. Le decimos session false pq no vamos a manejar sesiones que necesita de cookies. Acá solo manejamos sesion por token. De ahora en más el usuario necesita de un token en los headers de su petición para mantenerse en la sesión.
//   validatorHandler(createCategorySchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const body = req.body;
//       const newCategory = await service.create(body);
//       res.status(201).json(newCategory);
//     } catch (error) {
//       next(error);
//     }
//   }
// );
router.post(
  '/',
  passport.authenticate('jwt', { session: false }), // tiene que estar si o si la autenticación antes del chequeo del rol pq sino no recibe la info del usuario
  // checkAdminRole, //? checkAdminRole es un middleware que se ejecuta antes de seguir al siguiente middleware. Chequeamos que el usuario tenga el rol de admin. Si no tiene el rol de admin, no puede crear una categoría.
  checkRoles('admin', 'seller'), // aplico el middleware directamente pasandole que roles aceptamos para pasar la validación y continuar con el siguiente middleware.
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  checkRoles('admin', 'seller'),
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);
//example of url:

router.delete(
  '/:id',
  checkRoles('admin', 'seller'),
  passport.authenticate('jwt', { session: false }),
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
); // status code for deleted:

module.exports = router;
