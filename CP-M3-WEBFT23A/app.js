'use strict';
var router = require('./routes');
var express = require('express');
var app = express();

// Acuérdense de agregar su router o cualquier middleware que necesiten acá.

app.use(express.json());
app.use(router);

// El condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent)
  app.listen(3000, () => console.log('Servidor levantado en el puerto 3000'));

// Esto es solo para testear mas fácil
module.exports = app;
