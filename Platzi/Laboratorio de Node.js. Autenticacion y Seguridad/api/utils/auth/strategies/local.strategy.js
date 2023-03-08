import { Strategy } from 'passport-local';
import LoginService from '../../../services/login.service.js';

const service = new LoginService();

const LocalStrategy = new Strategy(
  {
    usernameField: 'username',
    passwordField: 'password',
  },
  async (username, password, done) => {
    try {
      const user = await service.logUser(username, password);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

export default LocalStrategy;
