const { Strategy } = require('passport-local');

const AuthService = require('./../../../services/auth.service.js');

const service = new AuthService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await service.findByEmail(email, password);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;

//? Lógica anterior a la implementación de AuthService.js
// const boom = require('@hapi/boom');
// const bcrypt = require('bcrypt');

// const UserService = require('./../../../services/user.service.js');

// const service = new UserService(); //? creamos una instancia de UserService para poder usar sus métodos.

// const LocalStrategy = new Strategy(
//   {
//     usernameField: 'email', //? le decimos que el campo que va a venir en el body es email.
//     passwordField: 'password', //? le decimos que el campo que va a venir en el body es password.
//   },
//   async (email, password, done) => {
//     // aquí va la lógica de validación de la estrategia
//     // si todo sale bien, se llama a done con null y el usuario
//     // si todo sale mal, se llama a done con un error
//     try {
//       // primero chequeo si existe el usuario
//       const user = await service.findByEmail(email);
//       if (!user) {
//         done(boom.unauthorized(), false); //? Si no encuentra el usuario, se llama a done con un error y false.
//       }
//       // si encuentra el usuario chequear password que llega con hash:
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         done(boom.unauthorized(), false); //? Si no coincide la password, se llama a done con un error y false.
//       }
//       delete user.dataValues.password; //delete password so client does not receive password
//       done(null, user); //? Si todo sale bien, se llama a done con null porque no hay error y le enviamos el usuario.
//     } catch (error) {
//       done(error, false); //? por si algo sale mal. Si hay un error, se llama a done con el error y false.
//     }
//   }
// );

// module.exports = LocalStrategy;
