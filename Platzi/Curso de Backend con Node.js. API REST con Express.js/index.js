const express = require('express');

const app = express();

const port = 3000;

/* Definimos una ruta: */
app.get('/', (req, res) => {
  res.send('Hello Server in express!');
});

/* Tenemos que decirle que escuche en un puerto: */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  // en producción no debería estar esto
});
