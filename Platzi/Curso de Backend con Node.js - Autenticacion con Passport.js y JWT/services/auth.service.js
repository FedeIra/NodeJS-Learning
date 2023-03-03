const UserService = require('./user.service.js'); //? para poder usar los métodos de UserService.
const bcrypt = require('bcrypt'); //? para poder usar bcrypt y encriptar la password.
const boom = require('@hapi/boom'); //? para poder usar boom y manejar los errores.

const service = new UserService(); //? creamos una instancia de UserService para poder usar sus métodos.

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
  }
}

module.exports = AuthService;
