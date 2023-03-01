const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy.js');

passport.use(LocalStrategy); // acá le decimos que estrategia vamos a usar
