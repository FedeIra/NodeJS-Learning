const supertest = require('supertest-as-promised')(require('../app'));
const expect = require('chai').expect;
const controller = require('../controllers/controllers');

const accessories = [
  { id: 8, color: 'Red', type: 'Necklace', description: 'Golden Necklace' },
];

describe('PUT /accessories', function () {
  beforeEach(function () {
    controller.reset();
  });

  it('Responde con el accesorio modificado', function () {
    controller.addAccessory(accessories[0]);
    return supertest
      .put(`/accessories/${accessories[0].id}`)
      .send({
        type: 'Bracelet',
        color: 'Gold',
        description: 'Golden Bracelet',
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql({
          id: 8,
          type: 'Bracelet',
          color: 'Gold',
          description: 'Golden Bracelet',
        });
        expect(controller.getAccessories()).to.have.length(1);
      });
  });

  it('Responde con el accesorio modificado parcialmente', function () {
    controller.addAccessory(accessories[0]);
    return supertest
      .put(`/accessories/${accessories[0].id}`)
      .send({
        color: 'Red',
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql({
          id: 8,
          type: 'Necklace',
          color: 'Red',
          description: 'Golden Necklace',
        });
        expect(controller.getAccessories()).to.have.length(1);
      });
  });

  it('Si el accesorio no es encontrado, responde con un error 404', function () {
    controller.addAccessory(accessories[0]);
    return supertest
      .put(`/accessories/45`)
      .send({
        type: 'Bracelet',
        color: 'Gold',
      })
      .expect(404)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql({ error: 'accesorio no encontrado' });
      });
  });
});
