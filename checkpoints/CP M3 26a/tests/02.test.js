const expect = require('chai').expect

const controller = require('../controllers/controllers')

describe('---------- `listCats` ----------', function () {
  beforeEach(function () {
    controller.reset()
  })

  it('Debe tener la propiedad <age> inicialmente en 1 year', function () {
    controller.addCat('Fifi', 'green')
    expect(controller.listCats()[0].age).to.eql('1 year')
  })

  it('En caso de recibir un parámetro, devuelve sólo los gatos correspondientes al age indicado', function () {
    controller.addCat('Bubbles', 'orange')
    controller.addCat('Fifi', 'purple')
    expect(controller.listCats('1 year')).to.have.length(2)
    expect(controller.listCats('2 year')).to.have.length(0)
  })
})
