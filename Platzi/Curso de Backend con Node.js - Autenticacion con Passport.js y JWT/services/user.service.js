const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const { models } = require('./../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10); //? este método es asincrono y encripta la password del cliente. Luego la guardamos junto con la info. restante.
    const newUser = await models.User.create({
      ...data,
      password: hash,
    });
    delete newUser.dataValues.password; //? Eliminamos la password del objeto que se devuelve al cliente. No es buena práctica devolver la password. Es mejor devolver un token. La password se guarda encriptada en la base de datos. El cliente no tiene que saber la password. El cliente tiene que saber el token. Crea el usuario con la contraseña en la base de datas, pero no le pasa la contraseña al cliente.
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll({
      include: ['customer'],
    });
    return rta;
  }

  //? Necesito hacer una búsqueda por email en especifico.
  async findByEmail(email) {
    const rta = await models.User.findOne({
      where: { email },
    });
    return rta;
  }
  //? Necesitamos usar esta función en el localStrategy

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
