const supertest = require('supertest-as-promised')(require('../app'))
const expect = require('chai').expect
const controller = require('../controllers/controllers')

describe('/cats', function () {
  beforeEach(function () {
    controller.reset()
  })

  it('GET inicialmente responde con un array vacío', function () {
    return supertest
      .get('/cats')
      .expect(200)
      .expect(function (res) {
        expect(res.body).to.eql([])
      })
  })

  it('GET responde con un array con todos los usuarios', function () {
    controller.addCat('Fifi')
    return supertest
      .get('/cats')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(function (res) {
        expect(res.body).to.eql([
          {
            name: 'Fifi',
            age: '1 year',
            color: [],
            accessories: []
          }
        ])
      })
  })
})
