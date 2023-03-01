const boom = require('@hapi/boom');
const { config } = require('./../config/config.js');

const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['api']; //? el api key lo vamos a pasar por el header de la petición
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized('Invalid API Key'));
  }
};

module.exports = { checkApiKey }; // con esto protegemos nuestros end points
