import { Router } from 'express';
// import { body, check, validationResult } from 'express-validator';
import { validatorHandler } from '../middlewares/validator.handler.js';
import { createUserSchema } from '../schemas/user.schema.js';
import {UserService} from '../services/user.service.js';
const service = new UserService();

export const signUp = Router();

signUp.post(
  '/',
  // Validación y sanitización de los datos de entrada
  // body('username').not().isEmpty().trim(),
  // body('password').isLength({ min: 6 }),
  validatorHandler(createUserSchema, 'body'),
  //
  async (request, response, next) => {
    try {
      // const errors = validationResult(request);
      // if (!errors.isEmpty()) {
      //   return response.status(400).json({ errors: errors.array() });
      // }
      const body = request.body;
      const newUser = await service.createUser(body);
      response.status(201).json(newUser);
    } catch (error) {
      // console.error(`[signIn]: ${error}`);
      next(error);

      // return response.status(500).json({
      //   message: error.message
      // });
    }
  }
);
