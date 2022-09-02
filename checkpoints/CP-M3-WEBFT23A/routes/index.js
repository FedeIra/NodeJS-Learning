'use strict';

var express = require('express');

var router = express.Router();

const {
  listCharacters,
  addHouse,
  listHouses,
  addCharacter,
  addSpell,
  showSpells,
  addWand,
  showWand,
} = require('../models/model.js');

// var model = require('../models/model.js');

// escriban sus rutas acá

//GET HOUSES:
router.get(`/houses`, (req, res) => {
  res.json(listHouses());
});

//POST HOUSE:
router.post(`/houses`, (req, res) => {
  const { house } = req.body;
  res.json(addHouse(house));
});

//GET PERSONAJES:
router.get(`/characters`, (req, res) => {
  const { house, fullName } = req.body;
  res.json(listCharacters(house, fullName));
});

//POST PERSONAJE:
router.post(`/characters`, (req, res) => {
  const { name, lastName, house, dateOfBirth, isMuggle } = req.body;

  let personaje = addCharacter(name, lastName, house, dateOfBirth, isMuggle);

  if (personaje.msg) {
    res.status(404).json(personaje);
  } else {
    res.json(personaje);
  }
});

// GET CHARACTERS
router.get(`/characters/:houseName`, (req, res) => {
  const { houseName } = req.params;
  const { fullName } = req.query;
  res.json(listCharacters(houseName, Boolean(fullName)));
});

// router.post('/characters', (req, res) => {
//   let { name, lastName, house, dateOfBirth, isMuggle } = req.body;
//   if (listHouses().includes(house)) {
//     res
//       .status(200)
//       .json(models.addCharacter(name, lastName, house, dateOfBirth, isMuggle));
//   } else {
//     res
//       .status(404)
//       .json(models.addCharacter(name, lastName, house, dateOfBirth, isMuggle));
//   }
// });

//GET SPELLS:
router.get(`/spells`, (req, res) => {
  const { name } = req.query;
  res.json(showSpells(name));
});

//POST SPELLS:
router.post(`/spells`, (req, res) => {
  const { name, id, spellName, description } = req.body;
  res.status(201).json({ msg: addSpell(name, id, spellName, description) });
});

// GET WAND
router.get(`/wand`, (req, res) => {
  const { name } = req.body;

  res.json(showWand(name));
});

//POST WAND:
router.post(`/wand`, (req, res) => {
  const { name, wood, core, length } = req.body;
  res.status(201).json(addWand(name, wood, core, length));
});

// siéntanse libres de dividir entre archivos si lo necesitan
module.exports = router;
