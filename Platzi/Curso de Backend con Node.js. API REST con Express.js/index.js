const express = require('express');
// const faker = require('faker');

const { faker } = require('@faker-js/faker');

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
  }); //Json es el formato más utilizado. Si es un solo objeto, debería obtener con id
});

// Para agarrar data del faker
app.get('/fakerproducts', (req, res) => {
  const products = [];
  const { size } = req.query; //  para limitar la cantidad de productos mediante query y si no está limitado lo limito a 10.

  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.product(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.avatar(),
    });
  }
  res.json(products);
});

// Las rutas más específicas van arriba de las rutas que sean dinamicas. De lo contrario, si pongo esta ruta debajo de /products/:id, va a tomar el "filter" como id
app.get('/products/filter', (req, res) => {
  res.send('yo soy un filter');
});

//? GET WITH PARAMS
app.get('/products/:id', (req, res) => {
  const { id } = req.params; // recogemos el id con destructuración
  res.json({
    id, // asi usamos el id
    name: 'Keyboard',
    price: 300,
  });
}); // los dos puntos indica que va a ser un parametro

// {
//   "id": ":123", // cambia según lo que pongamos en la url
//   "name": "Keyboard",
//   "price": 300
// }

// Otro ejemplo:
app.get('/categories/:categoryId/products/:productId', (req, res) =>
  // de esta manera recibimos dos params por medio de la ruta
  {
    const { categoryId, productId } = req.params;
    res.json({
      categoryId,
      productId,
    });
  }
);

//? GET WITH QUERY PARAMS
/* Puedo tener por medio de parametros query comportamientos como paginar, paginación con limit y offset, con filtros como ?region, y con doble parametro query &. Normalmente se usan para hacer filtros.
 */
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  // como son opcionales debería hacer una validación:
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
}); //http://localhost:3000/users?limit=10&offset=200

/* Tenemos que decirle que escuche en un puerto: */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  // en producción no debería estar esto
});
