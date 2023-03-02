const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy.js');
const JwtStrategy = require('./strategies/jwt.strategy.js');

passport.use(LocalStrategy); // acá le decimos que estrategia vamos a usar
passport.use(JwtStrategy);
