const express = require('express');
const passport = require('passport');

const CategoryService = require('./../services/category.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
} = require('./../schemas/category.schema');

const router = express.Router();
const service = new CategoryService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
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
  passport.authenticate('jwt', { session: false }),
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
