'use strict';

const express = require('express');
const controller = require('../controllers/controllers');
const router = express.Router();

// Escriban sus rutas acá
// Siéntanse libres de dividir entre archivos si lo necesitan

// Hint:  investigá las propiedades del objeto Error en JS para acceder al mensaje en el mismo.
module.exports = router;

router.get('/cats', (require, resolve) => {
  resolve.json(controller.listCats());
});

router.post('/cats', (require, resolve) => {
  let { name } = require.body;
  try {
    controller.addCat(name);
  } catch (error) {
    return resolve.status(400).json({ error: `${name} already exists` });
  }
  resolve
    .status(201)
    .json({ msg: 'Exito', data: controller.listCats(false, name) });
});

router.get('/accessories', (require, resolve) => {
  let { type, color } = require.query;
  try {
    resolve.json(controller.getAccessories(type, color));
  } catch (error) {
    resolve.status(400).json({ error: error.message });
  }
});

router.put('/accessories/:id', (require, resolve) => {
  let { type, color, description } = require.body;
  let id = require.params.id;
  id = Number(id);
  let returnedObj = {};

  if (type) returnedObj.type = type;
  if (color) returnedObj.color = color;
  if (description) returnedObj.description = description;
  if (id) returnedObj.id = id;

  try {
    returnedObj = controller.modifyAccessory(returnedObj);
  } catch (error) {
    return resolve.status(404).json({ error: error.message });
  }

  id = returnedObj.id;
  type = returnedObj.type;
  color = returnedObj.color;
  description = returnedObj.description;

  resolve.json({ id, type, color, description });
});

router.post('/accessories', (require, resolve) => {
  let { id, color, type, description } = require.body;
  try {
    resolve
      .status(201)
      .json(controller.addAccessory({ id, color, type, description }));
  } catch (error) {
    resolve.status(400).json({ error: error.message });
  }
});

router.delete('/accessories/:id', (require, resolve) => {
  let { id } = require.params;
  id = Number(id);
  let str;
  try {
    str = controller.deleteAccessory(id);
  } catch (error) {
    return resolve.status(404).json({ error: error.message });
  }
  resolve.status(200).json({ message: str });
});

router.post('/cats/accessories', (require, resolve) => {
  let { catName, catAccessoryId } = require.body;
  catAccessoryId = Number(catAccessoryId);
  try {
    controller.addCatAccessory(catName, catAccessoryId);
  } catch (error) {
    if (error.message === 'Accesorio no encontrado')
      error.message = 'accesorio no encontrado';
    return resolve.status(404).json({ error: error.message });
  }
  resolve.json({ msg: 'Exito' });
});
