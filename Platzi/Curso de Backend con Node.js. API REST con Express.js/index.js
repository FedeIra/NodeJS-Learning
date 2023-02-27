const express = require('express');

const app = express();

const port = 3000;

/* Definimos una ruta inicial: */
app.get('/', (req, res) => {
  res.send('Hello Server in express!');
});

app.get('/new-route', (req, res) => {
  res.send('Hey, i am a new route or end point!');
});

app.get('/products', (req, res) => {
  res.json({
    products: [
      {
        name: 'Keyboard',
        price: 300,
      },
      {
        name: 'Mouse',
        price: 200,
      },
    ],
  }); //Json es el formato más utilizado
});

/* Tenemos que decirle que escuche en un puerto: */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  // en producción no debería estar esto
});
