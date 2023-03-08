import { Router } from 'express';
// import { body, check, validationResult } from 'express-validator';
import { validatorHandler } from '../middlewares/validator.handler.js';
import { createUserSchema } from '../schemas/user.schema.js';
import { UserService } from '../services/user.service.js';
const service = new UserService();

export const signUp = Router();

signUp.post(
  '/',
  // Validación y sanitización de los datos de entrada
  validatorHandler(createUserSchema, 'body'),
  //
  async (request, response, next) => {
    try {
      const body = request.body;
      const newUser = await service.createUser(body);
      response.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);
