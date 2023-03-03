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

const checkAdminRole = (req, res, next) => {
  // console.log(req.user);
  const user = req.user;
  if (user.role === 'admin') {
    next(); //? si el usuario es admin, pasa al siguiente middleware
  } else {
    next(boom.unauthorized('You are not an admin'));
  }
};

// Hacemos uno con lógica parecida a la anterior, pero para varios roles:
const checkRoles = (...roles) => {
  //? recibe los roles y los convierte en un array
  return (req, res, next) => {
    const user = req.user;
    console.log(roles);
    if (
      roles.includes(user.role) //? si el array de roles incluye el rol del usuario
    ) {
      next();
    } else {
      next(boom.unauthorized('You are not authorized'));
    }
  };
};

module.exports = { checkApiKey, checkAdminRole, checkRoles }; // con esto protegemos nuestros end points
