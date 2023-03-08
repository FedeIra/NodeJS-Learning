import Mongoose from 'mongoose';
import config from '../config/config.js';

const url = config.databaseUrl;

if (!url) {
  throw new Error('Database URL is not set.');
}

export const connect = async () => {
  await Mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Database connected.');
};
