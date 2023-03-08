import bcrypt from 'bcrypt';
import boom from '@hapi/boom';
import 'dotenv/config';
import jwtService from 'jsonwebtoken';

// const UserService = require('./user.service.js');
import { UserService } from './user.service.js';

const service = new UserService();

class AuthService {
  // logUSer service
  async logUser(username, password) {
    const user = await service.getUser(username);
    if (!user) {
      throw boom.unauthorized('Invalid username or password');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized('Invalid username or password');
    }
    return user;
  }
  // authentication and signature of token service:
  async signToken(user) {
    const payload = {
      sub: user.id,
    };
    const token = jwtService.sign(payload, process.env.JWT_SECRET);
    return {
      token,
      user: {
        username: user.username,
        createdAt: user.createdAt,
      }
    }
  }
}

export default AuthService;
