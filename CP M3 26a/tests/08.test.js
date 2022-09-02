const supertest = require('supertest-as-promised')(require('../app'));
const expect = require('chai').expect;
const controller = require('../controllers/controllers');

describe('/cats', function () {
  beforeEach(function () {
    controller.reset();
  });

  it('POST agrega un nuevo usuario felin@, responde con un mensaje de confirmación y su status correspondiente', function () {
    return supertest
      .post('/cats')
      .send({ name: 'Michigan' })
      .expect(201)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.eql({
          msg: 'Exito',
          data: { accessories: [], age: '1 year', color: [], name: 'Michigan' },
        });
      });
  });

  it('POST si el usuario ya existe, responde con un error con su status correspondiente', function () {
    controller.addCat('Michigan');
    return supertest
      .post('/cats')
      .send({ name: 'Michigan' })
      .expect(400)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.eql({ error: `Michigan already exists` });
        expect(controller.listCats()).to.have.length(1);
      });
  });
});
