const express = require('express');
const passport = require('passport');
// const jwt = require('jsonwebtoken');

// const { config } = require('./../config/config.js');

// const CategoryService = require('../services/category.service');

const AuthService = require('../services/auth.service.js'); // lo importamos pq vamos a necesitar usar AuthService en la ruta de login para la comprobación y firma de token.
const router = express.Router();
// const service = new CategoryService();
const service = new AuthService();

router.post(
  '/login',
  passport.authenticate('local', { session: false }), //? passport.authenticate es un middleware que se ejecuta antes de la función que le pasamos como segundo parámetro. En este caso, la función es la que se ejecuta cuando el usuario se loguea correctamente. Si el usuario se loguea correctamente, passport.authenticate le pasa el usuario a la función que le pasamos como segundo parámetro. Si el usuario no se loguea correctamente, passport.authenticate le pasa un error a la función que le pasamos como segundo parámetro. LOCAL es porque la estrategia es local. Le decimso también que no queremos manejar la sesión con passport. La sesión la vamos a manejar nosotros con JWT.
  async (req, res, next) => {
    try {
      // create payload:
      const user = req.user;
      res.json(service.signToken(user)); // sin await pq la función no es asincrona
      // const payload = {
      //   sub: user.id,
      //   role: user.role,
      // };
      // const token = jwt.sign(payload, config.jwtSecret);
      // res.json({ user, token }); //? si el usuario se loguea correctamente, passport.authenticate le pasa el usuario a la función que le pasamos como segundo parámetro.
    } catch (error) {
      next(error);
    }
  }
);

// Ruta recuperar contraseña
router.post('/recovery', async (req, res, next) => {
  try {
    const { email } = req.body;
    const result = await service.sendEmail(email); //? usamos el método sendEmail de AuthService para mandar el email.
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
