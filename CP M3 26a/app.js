'use strict'
const express = require('express')
const app = express()
const router = require('./routes/index')

// Acuérdense de agregar su router o cualquier middleware que necesiten acá.

app.use(express.json())
app.use(router)

module.exports = app
