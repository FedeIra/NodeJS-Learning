import { Router } from 'express';
// import { body, validationResult } from 'express-validator';
import { UserModel } from '../db/models/User.js';
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
  passport.authenticate('local', { session: false }),
  //
  async (request, response, next) => {
    try {
      const user = request.user;
      response.json(await service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);
