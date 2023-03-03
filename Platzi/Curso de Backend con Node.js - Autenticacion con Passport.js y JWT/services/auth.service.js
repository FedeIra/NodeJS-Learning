const UserService = require('./user.service.js'); //? para poder usar los métodos de UserService.
const bcrypt = require('bcrypt'); //? para poder usar bcrypt y encriptar la password.
const boom = require('@hapi/boom'); //? para poder usar boom y manejar los errores.
const jwt = require('jsonwebtoken');
const { config } = require('../config/config.js');
const nodemailer = require('nodemailer');

const service = new UserService(); //? creamos una instancia de UserService para poder usar sus métodos.

// lógica para el email y usuario y la eliminación del email para recuperar contraseña
class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email); //? usamos el método findByEmail de UserService para buscar el usuario por email.
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }
  // ahora metemos la lógica de la firma del token q antes estaba directamente en la ruta:
  async signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return { user, token };
  }
  // lógica para resetear password:
  async sendRecovery(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    // lógica para crear token y luego mandar link para recuperar contraseña:
    const payload = {
      sub: user.id,
      role: user.role,
    }; //? el payload es el objeto que va a ir dentro del token. En este caso, el id del usuario.
    const token = jwt.sign(payload, config.jwtSecretRecovery, {
      expiresIn: '15 mins',
    }); //? creamos el token con jwt.sign. Le pasamos el payload y la secret key y le damos una expiración de 15 minutos
    // ahora creamos el link para recuperar contraseña:
    const link = `http://myfrontend.com/recovery/?token=${token}`; //? creamos el link con el token que acabamos de crear. El link es el que va a ir en el email. El token es el que va a ir en el link.
    //
    await service.update(user.id, { recoveryToken: token }); //? actualizamos el usuario con el token de recuperación.
    const mail = {
      from: config.email, // sender address
      to: `${user.email}`, // list of receivers
      subject: 'recuperar contraseña.', // Subject line
      // text: 'Este es un nuevo correo para recuperar contraseña',
      html: `<b>Ingresa a este link para recuperar contraseña => ${link}</b>`,
    };
    const result = await this.sendEmail(mail);
    return result;
  }

  // ahora lógica para mandar email:
  async sendEmail(infoMail) {
    // Antes de mandar un email comprobamos que el email del usuario exista:
    // const user = await service.findByEmail(email);
    // if (!user) {
    //   throw boom.unauthorized();
    // }
    // Comprobado mandamos el email:
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true, // true for 465, false for other ports
      port: 465,
      auth: {
        user: config.email,
        pass: config.emailPassword,
      },
    });
    await transporter.sendMail(infoMail);
    return { message: 'email sent' };
  }
}

module.exports = AuthService;
