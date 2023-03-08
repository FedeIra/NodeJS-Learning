import { Router } from 'express';
import { updateUserSchema } from '../schemas/user.schema.js';
import { validatorHandler } from '../middlewares/validator.handler.js';
import passport from 'passport';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../db/models/User.js';
import { UserService } from '../services/user.service.js';
const service = new UserService();

export const updateUser = Router();

updateUser.put(
  '/',
  // @todo: Validación y sanitización de los datos de entrada
  passport.authenticate('jwt', { session: false }),
  validatorHandler(updateUserSchema, 'body'),
  // @todo: Actualizar información usuario según la sesión del token JWT
  async (request, response, next) => {
    try {
      const id = request.user.sub;
      const body = request.body;
      const updatedUser = await service.updateUser(id, body);
      response.json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);
