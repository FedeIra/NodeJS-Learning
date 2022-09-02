'use strict';

var express = require('express');

const {
  addCategory,
  listCategories,
  addProduct,
  listProducts,
  addReview,
  getReviews,
  getRating,
} = require('../models/model');

var router = express.Router();

// escriban sus rutas acá
router.get('/categories', (req, res) => {
  res.json(listCategories());
});

// ----addCategory---
router.post('/categories', (req, res) => {
  let resultado;
  try {
    resultado = addCategory(req.body.category);
  } catch (error) {
    res.status(400).json({ error: `${error.message}` });
  }
  res.status(201).json({ msg: resultado });
});

// ----products---
router.get('/products', (req, res) => {
  res.json(listProducts());
});

// ----addProducts---
router.post('/products', (req, res) => {
  const { name, brand, category, stock } = req.body;
  try {
    res.status(201).json(addProduct(name, brand, category, stock));
  } catch (error) {
    res.status(404).json({ error: `${error.message}` });
  }
});

//products/:categoryName
router.get(`/products/:categoryName`, (req, res) => {
  const { categoryName } = req.params;
  const { fullName } = req.query;

  try {
    res.status(200).json(listProducts(categoryName, fullName));
  } catch (error) {
    res.status(404).json({ error: `${error.message}` });
  }
});

/*
  /reviews
    × GET responde con un error si el producto no existe (167 ms)
    × GET responde con un arreglo vacío si el producto no tiene reseñas (17 ms)
    × POST agrega una reseña a un producto existente (41 ms)
    × POST responde con mensaje de confirmación y status correspondinete si la reseña fue agreada (26 ms)
    × POST responde con un error si el producto no existe (23 ms)
    × POST responde con un error si el puntaje es inválido (16 ms)
    × POST responde con un error si faltan parámetros (18 ms)
*/

// Get reviews
router.get(`/reviews`, (req, res) => {
  const { name } = req.query;

  try {
    res.status(200).json(getReviews(name));
  } catch (error) {
    res.status(404).json({ error: `${error.message}` });
  }
});

// get Post
router.post(`/reviews`, (req, res) => {
  const { name, stars, text, user } = req.body;

  try {
    res.status(201).json({ msg: addReview(name, stars, text, user) });
  } catch (error) {
    res.status(400).json({ error: `${error.message}` });
  }
});

// rating
router.get(`/rating`, (req, res) => {
  const { name } = req.body;

  res.status(200).json(getRating(name));
});

//  Routes
//     /rating/:product
//       × GET responde con el rating del producto (134 ms)
//       × GET si no existe el producto responde con un error (17 ms)
router.get(`/rating/:product`, (req, res) => {
  const { product } = req.params;
  try {
    res.status(200).json({ rating: `${getRating(product)}` });
  } catch (error) {
    res.status(404).json({ error: `${error.message}` });
  }
});

// ------------------------------------------
module.exports = router;
