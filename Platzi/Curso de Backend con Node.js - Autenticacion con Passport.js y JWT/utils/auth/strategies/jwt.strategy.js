const { Strategy, ExtractJwt } = require('passport-jwt');

const { config } = require('../../../config/config.js'); // donde están guardadas las variables de entorno

const option = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //? 1) extrae el token del header de la petición y lo guarda en jwtFromRequest
  secretOrKey: config.jwtSecret,
};

const JwtStrategy = new Strategy(option, (payload, done) => {
  return done(null, payload); //? devuelve el payload del token que le pasamos como parámetro (token)
});

module.exports = JwtStrategy;
