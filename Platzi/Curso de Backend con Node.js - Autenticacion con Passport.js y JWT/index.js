const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { checkApiKey } = require('./middlewares/auth.handler'); // importamos el middleware de autenticación

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors(options));

require('./utils/auth/index.js'); //? importamos el archivo de autenticación

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get(
  '/nueva-ruta',
  checkApiKey, // le pasamos el middleware de autenticación
  (req, res) => {
    res.send('Hola, soy una nueva ruta');
  }
); // ahora la ruta funciona solo cuando tiene en el header la api 123. Si en el header se pone en mayuscula, te lo pasa siempre a minuscula.

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
