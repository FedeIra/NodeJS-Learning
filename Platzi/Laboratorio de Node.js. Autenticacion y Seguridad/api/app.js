import express from 'express';
import cors from 'cors';
import { signUp } from './routes/sign-up.route.js';
import { login } from './routes/login.route.js';
import { profile } from './routes/index.js';
import { boomErrorHandler } from './middlewares/error.handler.js';

export const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// import authentication strategies:
import './utils/auth/index.js';

// API
// @todo: Almancenar el password de forma segura
app.use('/api/v1/sign-up', signUp);
// @todo: generar un token jwt seguro para la sesión del usuario
app.use('/api/v1/login', login);
// @todo: completar las rutas de profile
app.use('/api/v1/profile', profile);

app.get('/', async (req, res) => {
  res.send('Platzi laboratio Autenticación con Node.js');
});

// use handler errors:
app.use(boomErrorHandler);
