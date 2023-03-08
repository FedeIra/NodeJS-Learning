import { Router } from 'express';
// import { body, validationResult } from 'express-validator';
import { UserModel } from '../models/User.js';
import bcrypt from 'bcrypt';
import { validatorHandler } from '../middlewares/validator.handler.js';
import { createUserSchema } from '../schemas/user.schema.js';
import passport from 'passport';

import AuthService from '../services/login.service.js';
const service = new AuthService();



export const login = Router();

login.post(
  '/',
  // Validación y sanitización de los datos de entrada
  // body('username').not().isEmpty().trim(),
  // body('password').isLength({ min: 6 }),
  passport.authenticate('local', { session: false }),
  // validatorHandler(createUserSchema, 'body'),

  //
  async (request, response, next) => {
    try {
      // const errors = validationResult(request);
      // if (!errors.isEmpty()) {
      //   return response.status(400).json({ errors: errors.array() });
      // }
      const user = request.user;

      // const isPasswordValid = password === user.password;
      // if (!isPasswordValid) {
      //   return response.status(400).json({
      //     error: 'username or password is incorrect',
      //   });
      // }
      // const isMatch = await bcrypt.compare(password, user.password);

      // if (!isMatch) {
      //   return response.status(400).json({
      //     error: 'username or password is incorrect',
      //   });
      // } else {
      // // @todo: generate a JWT token
      // const token = 'jwt-token';
      response.json(await service.signToken(user))
    } catch (error) {
      // console.error(`[signIn]: ${error}`);

      // return response.status(500).json({
      //   error: 'An unexpected error happened. Please try again later',
      // });
      next(error);
    }
  }
);
