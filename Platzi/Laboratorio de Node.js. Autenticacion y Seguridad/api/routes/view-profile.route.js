import { Router } from 'express';
import passport from 'passport';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../models/User.js';
import {UserService} from '../services/user.service.js';
const service = new UserService();

export const viewUser = Router();

viewUser.get(
  '/',
  // @todo: Validación y sanitización de los datos de entrada
  passport.authenticate('jwt', { session: false }),
  // @todo: Ver información del usuario actual según la sesión del token JWT
  async (request, response, next) => {
  try {
    const id = request.user.sub;
    const infoUser = await service.getUserById(id);
    response.status(200).json(infoUser);
    } catch (error) {
    next(error);
    }
  }
);
