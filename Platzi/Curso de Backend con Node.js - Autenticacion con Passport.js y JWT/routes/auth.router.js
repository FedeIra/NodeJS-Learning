const express = require('express');
const passport = require('passport');

// const CategoryService = require('../services/category.service');

const router = express.Router();
// const service = new CategoryService();

router.post(
  '/login',
  passport.authenticate('local', { session: false }), //? passport.authenticate es un middleware que se ejecuta antes de la función que le pasamos como segundo parámetro. En este caso, la función es la que se ejecuta cuando el usuario se loguea correctamente. Si el usuario se loguea correctamente, passport.authenticate le pasa el usuario a la función que le pasamos como segundo parámetro. Si el usuario no se loguea correctamente, passport.authenticate le pasa un error a la función que le pasamos como segundo parámetro. LOCAL es porque la estrategia es local. Le decimso también que no queremos manejar la sesión con passport. La sesión la vamos a manejar nosotros con JWT.
  async (req, res, next) => {
    try {
      res.json(req.user); //? si el usuario se loguea correctamente, passport.authenticate le pasa el usuario a la función que le pasamos como segundo parámetro.
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
