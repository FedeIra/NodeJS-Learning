const supertest = require('supertest-as-promised')(require('../app'));
const expect = require('chai').expect;
const controller = require('../controllers/controllers');

const accessories = [
  { id: 8, color: 'Red', type: 'Necklace', description: 'Golden Necklace' },
  { id: 3, color: 'Black', type: 'Bun', description: 'Black Bun' },
  { id: 5, color: 'Grey', type: 'Bracelet', description: 'Silver Bracelet' },
];

describe('POST /cats/accessories', function () {
  beforeEach(function () {
    controller.reset();
  });

  it('POST, agrega un accesorio al gato', function () {
    controller.addCat('Franco', 'Black');
    controller.addAccessory(accessories[0]);
    return supertest
      .post('/cats/accessories')
      .send({
        catName: 'Franco',
        catAccessoryId: accessories[0].id,
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.eql({ msg: 'Exito' });
      });
  });

  it('Modifica la popularidad de un accesorio', function () {
    controller.addCat('Fex');
    controller.addCat('Pip');
    controller.addCat('Bubbles');
    controller.addCat('Michi');

    controller.addAccessory(accessories[2]);

    controller.addCatAccessory('Fex', accessories[2].id);
    controller.addCatAccessory('Pip', accessories[2].id);
    controller.addCatAccessory('Bubbles', accessories[2].id);

    return supertest
      .post('/cats/accessories')
      .send({
        catName: 'Michi',
        catAccessoryId: accessories[2].id,
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function () {
        expect(controller.getAccessories()[0].popularity).to.eql('high');
      });
  });

  it('Si el accesorio no existe responde con un error', function () {
    controller.addCat('Michi');
    controller.addAccessory(accessories[2]);

    return supertest
      .post('/cats/accessories')
      .send({
        catName: 'Michi',
        catAccessoryId: accessories[0].id,
      })
      .expect(404)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql({ error: 'accesorio no encontrado' });
      });
  });
});
