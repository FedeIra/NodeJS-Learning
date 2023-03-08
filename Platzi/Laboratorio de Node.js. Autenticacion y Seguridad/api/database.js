import Mongoose from 'mongoose';
import 'dotenv/config';

// const { MONGODB_HOST, MONGODB_DATABASE } = process.env;

// const url = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error('DATABASE_URL is not set');
}

export const connect = async () => {
  await Mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('[db] Connected');
};
