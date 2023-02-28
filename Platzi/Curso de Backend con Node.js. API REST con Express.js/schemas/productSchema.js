const Joi = require('joi'); //? importamos joi para validar los datos que nos mandan desde el cliente

// Hacemos un esquema para cada campo del producto:
const id = Joi.string().uuid(); //? le decimos que tiene que tipo sting y ser un uuid
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

// Creamos un esquema para la creación del producto:
const createProductSchema = Joi.object({
  name: name.required(), //? le decimos que es requerido, lo que no aplica al uuid que se crea automaticamente
  price: price.required(),
});

// Creamos un esquema para la actualización del producto:
const updateProductSchema = Joi.object({
  name: name, // esta vez no es requerido y podemos reusar las validaciones de arriba para cada campo del producto
  price: price,
});

// Creamos un esquema para la validación del get por id:
const getProductSchema = Joi.object({
  id: id.required(),
});

// Creamos un esquema para la validación del delete por id:
const deleteProductSchema = Joi.object({
  id: id.required(),
});

// Exportamos los esquemas:
module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  deleteProductSchema,
};
