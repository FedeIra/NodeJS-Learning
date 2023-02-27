const expect = require('chai').expect
const controller = require('../controllers/controllers')

describe('---------- `addCat`----------', function () {
  beforeEach(function () {
    controller.reset()
  })

  it('Inicialmente devuelve un arreglo de gatos vacío', function () {
    expect(controller.listCats()).to.eql([])
  })

  it('Agrega gatos a la lista y devuelve un mensaje de confirmación', function () {
    expect(controller.addCat('Fifi')).eql('Fifi fue creado correctamente');
    expect(controller.listCats()).have.length(1);
    expect(controller.addCat('Bubbles')).eql('Bubbles fue creado correctamente');
    expect(controller.listCats()).to.have.length(2);
    expect(controller.listCats()[0].accessories).not.be.undefined;
    expect(controller.listCats()[0].color).not.be.undefined;
  })

  it('Si el name del gato o gata ya existe, no se agrega a la lista y devuelve un error', function () {
    controller.addCat('Fifi', 'pink')
    expect(controller.listCats()).to.have.length(1)
    controller.addCat('Bubbles', 'blue')
    expect(controller.listCats()).to.have.length(2)
    expect(() => controller.addCat('Bubbles', 'red')).to.throw('El gato o gata ya existe')
    expect(controller.listCats()).to.have.length(2)
  })
})
