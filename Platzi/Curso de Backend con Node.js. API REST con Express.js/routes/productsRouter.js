const express = require('express');

const ProductsService = require('../services/productService.js'); //? importamos el servicio de productos para poder usarlo en el router de productos y así poder usarlo en el index.js

const service = new ProductsService(); //? creamos una instancia del servicio de productos ya que se trata de una clase y no de un objeto literal

const router = express.Router(); // Para crear un router y no tener que usar app.get, app.post, etc. sino router.get, router.post, etc. y luego exportar el router y usarlo en el index.js con app.use('/products', productsRouter); // así se usa el router en el index.js y se le pasa la ruta que va a tener el router y el router que se va a usar en esa ruta (productsRouter) que es el que se importa en el index.js con const productsRouter = require('./routes/productsRouter');

// Para agarrar data del faker
router.get('/', (req, res) => {
  //!Pasamos toda la lógica al archivo de productsService.js en la función generate y la reemplazo por el service:
  // antes estaba: /products , pero ahora por el router solo queda luego del /products, es decir solo la / ya que eso se codea aparte por el router.
  // const products = [];
  // const { size } = req.query; //  para limitar la cantidad de productos mediante query y si no está limitado lo limito a 10.

  // const limit = size || 10;

  // for (let i = 0; i < limit; i++) {
  //   products.push({
  //     name: faker.commerce.product(),
  //     price: parseInt(faker.commerce.price(), 10),
  //     image: faker.image.avatar(),
  //   });
  // }

  const products = service.find(); //? así llamamos a la función find del servicio de productos y saca todos los productos del servicio mediante metodo find que devuelve todo. Toda la lógica de la generación de los productos se encuentra en el servicio de productos.

  res.json(products);
});

// Las rutas más específicas van arriba de las rutas que sean dinamicas. De lo contrario, si pongo esta ruta debajo de /products/:id, va a tomar el "filter" como id
router.get('/filter', (req, res) => {
  res.send('yo soy un filter');
});

//? GET WITH PARAMS
router.get('/:id', (req, res) => {
  const { id } = req.params; // recogemos el id con destructuración
  //! Mandamos la lógica del get with id a product services
  // if (id === '999') {
  //   res.status(404).json({
  //     // solo para probar status de error
  //     message: 'not found',
  //   });
  // } else {
  //   res.status(200).json({
  //     //El status 200 viene por default así ue no hace falta agregarlo.
  //     id, // asi usamos el id
  //     name: 'Keyboard',
  //     price: 300,
  //   });
  // }
  const product = service.findOne(id); //? así llamamos a la función findOne del servicio de productos y saca el producto del servicio mediante metodo findOne que devuelve el producto que coincida con el id que le pasamos. Toda la lógica de la generación de los productos se encuentra en el servicio de productos.

  res.json(product);
}); // los dos puntos indica que va a ser un parametro

// {
//   "id": ":123", // cambia según lo que pongamos en la url
//   "name": "Keyboard",
//   "price": 300
// }

// app.get('/products', (req, res) => {
//   res.json({
//     products: [
//       {
//         name: 'Keyboard',
//         price: 300,
//       },
//       {
//         name: 'Mouse',
//         price: 200,
//       },
//     ],
//   }); //Json es el formato más utilizado. Si es un solo objeto, debería obtener con id
// });

//? POST para crear un producto
router.post('/', (req, res) => {
  /* obtain in body name, price and image and send response with json of new product: */
  const { name, price, image } = req.body;
  // http://localhost:3000/products
  res.status(201).json({
    // message: 'created',
    name,
    price,
    image,
  });
});

//? PATCH para modificar un producto.
//Debe recibir el id, y aparte en body los atributos que quieran cambiarse
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});
// url example: http://localhost:3000/api/v1/products/123

/* Response:
{
	"message": "updated",
	"data": {
		"name": "New product",
		"price": 23
	},
	"id": "123"
}
*/

//? PUT: para modificar un producto.
//Debe recibir el id, y aparte en body los atributos que quieran cambiarse
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

//? DELETE: para eliminar un producto.
//Debe recibir el id sin cuerpo
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
