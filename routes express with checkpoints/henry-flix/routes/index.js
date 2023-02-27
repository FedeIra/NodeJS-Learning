'use strict';

const {
  addUser,
  listUsers,
  switchPlan,
  addSerie,
  listSeries,
  play,
  watchAgain,
  rateSerie,
} = require('../models/model');

const express = require('express');
const { response } = require('../app');

const router = express.Router();
module.exports = router;

// Escriban sus rutas acá
// GET LIST USERS
router.get('/users', (req, res) => {
  const { plan } = req.body;
  res.json(listUsers(plan));
});

// AGREGAR NUEVO USUARIO
router.post('/users', (req, res) => {
  const { email, name } = req.body;

  try {
    res.status(201).json({ msg: `${addUser(email, name)}` });
  } catch (error) {
    res.status(400).json({ error: `${error.message}` });
  }
});

// ALTERNAR TIPO DE PLAN PATCH
router.patch('/users/plan', (req, res) => {
  const { user } = req.query;

  try {
    res.json({ msg: `${switchPlan(user)}` });
  } catch (error) {
    res.status(404).json({ error: `${error.message}` });
  }
});

// GET LIST USERS
router.get('/series', (req, res) => {
  res.json(listSeries());
});

// AGREGAR NUEVA SERIE
router.post('/series', (req, res) => {
  const { name, seasons, category, year } = req.body;

  try {
    res.status(201).json({ msg: addSerie(name, seasons, category, year) });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET LIST USERS
router.get('/series/:category', (req, res) => {
  const { category } = req.params;
  try {
    res.json(listSeries(category));
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// GET PLAY
router.get('/play/:serie', (req, res) => {
  const { serie } = req.params;
  const { user } = req.query;

  try {
    res.json({ msg: play(serie, user) });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// GET WATCH AGAIN
router.get('/watchAgain', (req, res) => {
  const { user } = req.query;
  try {
    res.json(watchAgain(user));
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// POST TEST
router.post('/rating/:serie', (req, res) => {
  const { email, score } = req.body;
  const { serie } = req.params;

  try {
    res.json({ msg: rateSerie(serie, email, score) });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
// Siéntanse libres de dividir entre archivos si lo necesitan

// Hint:  investigá las propiedades del objeto Error en JS para acceder al mensaje en el mismo.
