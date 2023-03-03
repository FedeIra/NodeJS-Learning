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

  // ahora lógica para mandar email:
  async sendEmail(email) {
    // Antes de mandar un email comprobamos que el email del usuario exista:
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
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
    await transporter.sendMail({
      from: config.email, // sender address
      to: `${user.email}`, // list of receivers
      subject: 'cambio de contraseña.', // Subject line
      text: 'Este es un nuevo correo para cambiar contraseña', // plain text body
      html: '<b>Este es un nuevo correo para cambiar contraseña</b>', // html body
    });
    return { message: 'email sent' };
  }
}

module.exports = AuthService;
