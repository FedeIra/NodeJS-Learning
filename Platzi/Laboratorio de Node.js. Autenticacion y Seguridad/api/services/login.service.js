import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import jwtService from 'jsonwebtoken';
import config from '../config/config.js';
import { UserService } from './user.service.js';

const service = new UserService();

class AuthService {
  // logUSer service
  async logUser(username, password) {
    const user = await service.getUser(username);
    if (!user) {
      throw boom.notFound('Invalid username or password.');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.notFound('Invalid username or password.');
    }
    return user;
  }
  // authentication and signature of token service:
  async signToken(user) {
    const payload = {
      sub: user.id,
    };
    const token = jwtService.sign(payload, config.jwtSecret);

    return {
      token,
      user: {
        username: user.username,
      },
    };
  }
}

export default AuthService;
