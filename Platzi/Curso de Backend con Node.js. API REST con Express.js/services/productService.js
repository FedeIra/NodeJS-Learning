const { faker } = require('@faker-js/faker');

// Utilizamos programación orientada a objetos.

class ProductsService {
  //Acá definimos toda la lógica. Gestionamos acá todo lo que son nuestros productos. Acá deberían estar nuestras funcionalidades

  constructor() {
    this.products = []; // acá deberíamos conectarlo a una fuente de datos
    this.generate(); // cada vez que generamos una instancia del servicio genera los 100 productios iniciales. Gracias a esto los datos quedan vivos en memoria gracias a persistencia, pero muy volatil.
  }
  generate() {
    const limit = 100;

    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(), //clave de forma random
        name: faker.commerce.product(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.avatar(),
      });
    }
  }
  create() {}
  find() {
    return this.products; //con esto devuelvo la lista de los 100 productos
  }
  findOne(id) {
    /* find product by id: */
    return this.products.find((item) => item.id === id); // con esto devuelvo el producto que coincida con el id que le paso
  }
  update() {}
  delete() {}
}

module.exports = ProductsService;
