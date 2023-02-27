const supertest = require('supertest-as-promised')(require('../app'));
const expect = require('chai').expect;
const controller = require('../controllers/controllers');

const accessories = [
  {
    id: 5,
    color: 'Yellow',
    type: 'Sweater',
    description: 'Warm Sweater',
  },
];

describe('POST /accessories', function () {
  beforeEach(function () {
    controller.reset();
  });
  it('Agrega un nuevo accesorio y responde con un mensaje de confirmación', function () {
    return supertest
      .post('/accessories')
      .send(accessories[0])
      .expect(201)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.eql({
          message: 'El accesorio Yellow Sweater fue agregado correctamente',
        });
        expect(controller.getAccessories()).to.have.length(1);
        expect(controller.getAccessories()[0].type).to.eql('Sweater');
      });
  });

  it('Si el accesorio ya existe, no lo agrega y responde con un error', function () {
    controller.addAccessory(accessories[0]);
    return supertest
      .post('/accessories')
      .send(accessories[0])
      .expect(400)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql({
          error: 'El accesorio con el id 5 ya existe',
        });
        expect(controller.getAccessories()).to.have.length(1);
      });
  });

  it('Si la descripción de accesorio supera los 140 caracteres, responde con un error', function () {
    return supertest
      .post('/accessories')
      .send({
        id: 5,
        color: 'Yellow',
        type: 'Sweater',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat...',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql({
          error: 'La descripción supera los 140 caracteres',
        });
        expect(controller.getAccessories()).to.have.length(0);
      });
  });
});
