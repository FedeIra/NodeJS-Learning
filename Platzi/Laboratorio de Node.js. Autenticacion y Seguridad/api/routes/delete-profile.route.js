import { Router } from 'express';
import passport from 'passport';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../db/models/User.js';
import { UserService } from '../services/user.service.js';
const service = new UserService();

export const deleteUser = Router();

deleteUser.delete(
  '/',
  // @todo: Validación y sanitización de los datos de entrada
  passport.authenticate('jwt', { session: false }),
  // @todo: Eliminar el usuario actual según la sesión del token JWT
  async (request, response, next) => {
    try {
      const id = request.user.sub;
      await service.deleteUser(id);
      response.status(200).json(id);
    } catch (error) {
      next(error);
    }
  }
);
