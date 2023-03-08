import Joi from 'joi';

const username = Joi.string()
  .alphanum()
  .min(6)
  .max(20)
const password = Joi.string()
.min(6)
.max(20)

const createUserSchema = Joi.object({
  username: username.required(),
  password: password.required()
});

const updateUserSchema = Joi.object({
  username: username,
  password: password
});

export { createUserSchema, updateUserSchema };
