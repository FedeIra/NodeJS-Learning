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

  it('POST tiene que devolver un 404 porque el accesorio ya estaba en el gato', function () {
    controller.addCat('Franco', 'Black');
    controller.addAccessory(accessories[1]);
    controller.addCatAccessory('Franco', accessories[1].id);
    return supertest
      .post('/cats/accessories')
      .send({
        catName: 'Franco',
        catAccessoryId: accessories[1].id,
      })
      .expect(404)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.eql({
          error: 'El gato Franco ya tiene el accesorio puesto',
        });
      });
  });

  it('POST tiene que devolver un error porque <El gato <nombre_gato> no existe>', function () {
    controller.addAccessory(accessories[0]);
    return supertest
      .post('/cats/accessories')
      .send({
        catName: 'Firulais',
        catAccessoryId: accessories[0],
      })
      .expect(404)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.eql({ error: 'El gato Firulais no existe' });
      });
  });
});
