const express = require('express');
const routerApi = require('./routes');
const app = express();

const port = 3000;

/* Definimos una ruta inicial: */
app.get('/api/', (req, res) => {
  res.send('Hello Server in express!');
});

app.get('api//new-route', (req, res) => {
  res.send('Hey, i am a new route or end point!');
});

routerApi(app); // de esta manera modularizamos nuestra aplicación

/* Tenemos que decirle que escuche en un puerto: */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  // en producción no debería estar esto
});
