// const { Strategy } = require('passport-local');
import { Strategy } from 'passport-local';

// const AuthService = require('./../../../services/auth.service.js');
import LoginService from "../../../services/login.service.js"

const service = new LoginService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'username',
    passwordField: 'password',
  },
  async (username, password, done) => {
    try {
      // console.log("Se está ejecutando la local strategy");
      const user = await service.logUser(username, password);
      done(null, user);
    }
    catch (error) {
      done(error, false);
    }
  }
);

// module.exports = LocalStrategy;
export default LocalStrategy;
