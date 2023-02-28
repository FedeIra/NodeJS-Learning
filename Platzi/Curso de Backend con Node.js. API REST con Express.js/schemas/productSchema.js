const Joi = require('joi'); //? importamos joi para validar los datos que nos mandan desde el cliente

// Hacemos un esquema para cada campo del producto:
const idRule = Joi.string().uuid(); //? le decimos que tiene que tipo sting y ser un uuid
const nameRule = Joi.string().min(3).max(15);
const priceRule = Joi.number().integer().min(10);
const imageRule = Joi.string().uri();

// Creamos un esquema para la creación del producto:
const createProductSchema = Joi.object({
  name: nameRule.required(), //? le decimos que es requerido, lo que no aplica al uuid que se crea automaticamente
  price: priceRule.required(),
  image: imageRule.required(),
});

// Creamos un esquema para la actualización del producto:
const updateProductSchema = Joi.object({
  name: nameRule, // esta vez no es requerido y podemos reusar las validaciones de arriba para cada campo del producto
  price: priceRule,
  image: imageRule,
});

// Creamos un esquema para la validación del get por id:
const getProductSchema = Joi.object({
  id: idRule.required(),
});

// Creamos un esquema para la validación del delete por id:
const deleteProductSchema = Joi.object({
  id: idRule.required(),
});

// Exportamos los esquemas:
module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  deleteProductSchema,
};
