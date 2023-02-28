const { faker } = require('@faker-js/faker');

const boom = require('@hapi/boom');
// Utilizamos programación orientada a objetos.

class ProductsService {
  //Acá definimos toda la lógica. Gestionamos acá todo lo que son nuestros productos. Acá deberían estar nuestras funcionalidades

  constructor() {
    this.products = []; // acá deberíamos conectarlo a una fuente de datos
    this.generate(); // cada vez que generamos una instancia del servicio genera los 100 productios iniciales. Gracias a esto los datos quedan vivos en memoria gracias a persistencia, pero muy volatil.
  }
  async generate() {
    const limit = 100;

    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(), //clave de forma random
        name: faker.commerce.product(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.avatar(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      // name,
      // price,
      // image,
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  find() {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(this.products);
    //   }, 5000);
    // });
    return this.products; //con esto devuelvo la lista de los 100 productos
  }
  async findOne(id) {
    /* find product by id: */
    const product = this.products.find((item) => item.id === id); // con esto devuelvo el producto que coincida con el id que le paso
    if (!product) {
      // throw new Error('Product not found');
      throw boom.notFound('Apologies. Product not found.'); //? con boom podemos manejar los errores de una manera más amigable
    }
    if (product.isBlock) {
      // throw new Error('Product not found');
      throw boom.conflict('Apologies. Product is blocked.'); //? con boom podemos manejar los errores de una manera más amigable
    }
    return product;
  }
  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      // throw new Error('Apologies. Product not found.');
      throw boom.notFound('Apologies. Product not found.');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    }; // de esta manera persiste la info anterior
    return this.products[index];
  }
  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      // throw new Error('Apologies. Product not found.');
      throw boom.notFound('Apologies. Product not found.');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
