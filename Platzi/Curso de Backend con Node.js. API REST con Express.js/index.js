const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errorHandler.js'); //? importamos los middlewares de error

const app = express(); //? creamos una instancia de express

const port = 3000; //? creamos una variable para el puerto

/* Middleware: */
app.use(express.json()); //? para que entienda los json que le llegan

/* CORS */
// const whitelist = ['http://localhost:8080', 'https://myapp.co'];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };
// app.use(cors(options));
app.use(cors()); //? para que no haya problemas de cors

/* Definimos una ruta inicial: */
app.get('/', (req, res) => {
  res.send('Hello Server in express!');
});

app.get('/new-route', (req, res) => {
  res.send('Hey, i am a new route or end point!');
});

routerApi(app); // de esta manera modularizamos nuestra aplicación

/* Middleware de error. Tiene que ir siempre después del router. Los ponemos en el orden que queremos que se ejecuten: */
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

/* Tenemos que decirle que escuche en un puerto: */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  // en producción no debería estar esto
});
