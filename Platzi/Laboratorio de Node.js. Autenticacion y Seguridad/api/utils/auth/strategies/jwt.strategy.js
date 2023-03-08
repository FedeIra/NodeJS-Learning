import { Strategy, ExtractJwt } from 'passport-jwt';
import config from '../../../config/config.js';

const option = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

const JwtStrategy = new Strategy(option, (payload, done) => {
  return done(null, payload);
});

export default JwtStrategy;
