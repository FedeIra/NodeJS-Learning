import { Strategy, ExtractJwt } from 'passport-jwt';
import 'dotenv/config';

const option = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const JwtStrategy = new Strategy(option, (payload, done) => {
  return done(null, payload);
});

export default JwtStrategy;
