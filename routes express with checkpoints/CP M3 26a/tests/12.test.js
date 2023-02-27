const supertest = require('supertest-as-promised')(require('../app'));
const expect = require('chai').expect;
const controller = require('../controllers/controllers');

const accessories = [
  { id: 8, color: 'Red', type: 'Necklace', description: 'Golden Necklace' },
  { id: 3, color: 'Black', type: 'Bun', description: 'Black Bun' },
  { id: 5, color: 'Grey', type: 'Bracelet', description: 'Silver Bracelet' },
];

describe('DELETE /accessories', function () {
  beforeEach(function () {
    controller.reset();
  });

  it('Responde con el id del accesorio eliminado', function () {
    controller.addAccessory(accessories[0]);
    controller.addAccessory(accessories[1]);
    controller.addAccessory(accessories[2]);
    return supertest
      .delete('/accessories/3')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql({
          message: 'El accesorio con el id 3 fue eliminado correctamente',
        });
        expect(controller.getAccessories()).to.have.length(2);
      });
  });

  it('Si el accesorio no fue encontrado responde con un error', function () {
    controller.addAccessory(accessories[1]);
    return supertest
      .delete('/accessories/2')
      .expect(404)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.deep.eql({
          error: 'El accesorio con el id 2 no fue encontrado',
        });
        expect(controller.getAccessories()).to.have.length(1);
      });
  });
});
