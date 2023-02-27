const supertest = require('supertest-as-promised')(require('../app'));
const expect = require('chai').expect;
const controller = require('../controllers/controllers');

const accessories = [
  { id: 8, color: 'Red', type: 'Necklace', description: 'Golden Necklace' },
  { id: 3, color: 'Black', type: 'Bun', description: 'Black Bun' },
  { id: 5, color: 'Grey', type: 'Bracelet', description: 'Silver Bracelet' },
];

describe('GET /accessories', function () {
  beforeEach(function () {
    controller.reset();
  });

  it('GET inicialmente responde con un array vacío', function (done) {
    supertest
      .get('/accessories')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.eql([]);
      })
      .expect(200, done);
  });

  it('GET responde con un array de todos los acccesorios', function (done) {
    controller.addAccessory(accessories[0]);
    controller.addAccessory(accessories[1]);
    controller.addAccessory(accessories[2]);
    supertest
      .get('/accessories')
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql(controller.getAccessories());
      })
      .expect(200, done);
  });
  it('GET responde un array filtrado por tipo', function (done) {
    controller.addAccessory(accessories[0]);
    controller.addAccessory(accessories[1]);
    controller.addAccessory(accessories[2]);
    supertest
      .get('/accessories')
      .query({
        type: 'Bun',
      })
      .query({
        color: null,
      })
      .expect('Content-type', /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql(controller.getAccessories('Bun'));
        expect(res.body).to.have.lengthOf(1);
      })
      .expect(200, done);
  });

  it('GET responde un array filtrado por color', function (done) {
    controller.addAccessory(accessories[0]);
    controller.addAccessory(accessories[1]);
    controller.addAccessory(accessories[2]);
    supertest
      .get('/accessories')
      .query({
        type: null,
        color: 'Black',
      })
      .expect('Content-type', /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql(controller.getAccessories(null, 'Black'));
        expect(res.body).to.have.lengthOf(1);
      })
      .expect(200, done);
  });

  it('GET responde un array filtrado por tipo y color', function (done) {
    controller.addAccessory(accessories[0]);
    controller.addAccessory(accessories[1]);
    controller.addAccessory(accessories[2]);
    supertest
      .get('/accessories')
      .query({
        type: 'Bracelet',
      })
      .query({
        color: 'Red',
      })
      .expect('Content-type', /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql(
          controller.getAccessories('Bracelet', 'Red')
        );
        expect(res.body).to.have.lengthOf(2);
      })
      .expect(200, done);
  });
});
