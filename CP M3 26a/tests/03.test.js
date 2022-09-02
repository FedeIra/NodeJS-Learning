const expect = require('chai').expect

const controller = require('../controllers/controllers')

describe('---------- `addAccessory` y `getAccesories` ----------', function () {
  beforeEach(function () {
    controller.reset()
  })

  it('Inicialmente devuelve un arreglo vacío', function () {
    expect(controller.getAccessories()).to.eql([])
  })

  it('Agrega accesorios al arreglo', function () {
    controller.addAccessory({ id: 7, color: 'Black', type: 'Shoes', description: 'Black warm cat shoes' })
    expect(controller.getAccessories()).to.have.length(1)
  })

  it('Asigna un id correctamente', function () {
    controller.addAccessory({ id: 8, color: 'Red', type: 'Necklace', description: 'Golden Necklace' })
    expect(controller.getAccessories()).to.have.length(1)
    expect(controller.getAccessories()[0].id).to.eql(8)
    controller.addAccessory({ id: 2, color: 'Blue', type: 'Bun', description: 'Ocean blue bun' })
    expect(controller.getAccessories()).to.have.length(2)
    expect(controller.getAccessories()[1].id).to.eql(2)
    controller.addAccessory({ id: 16, color: 'Red', type: 'Bracelet', description: 'Red bracelet' })
    expect(controller.getAccessories()).to.have.length(3)
    expect(controller.getAccessories()[2].id).to.eql(16)
  })

  it('Su propiedad <popularity> será inicialmente "low"', function () {
    controller.addAccessory({ id: 8, color: 'Red', type: 'Necklace', description: 'Golden Necklace' })
    expect(controller.getAccessories()).to.have.length(1)
    expect(controller.getAccessories()[0].popularity).to.eql('low')
  })

  it('Si el accesorio ya existe, no la agrega y arrojar un error', function () {
    controller.addAccessory({ id: 8, color: 'Red', type: 'Necklace', description: 'Golden Necklace' })
    expect(controller.getAccessories()).to.have.length(1)
    expect(() => controller.addAccessory({ id: 8, color: 'Red', type: 'Necklace', description: 'Golden Necklace' })).to.throw('El accesorio con el id 8 ya existe')
    expect(controller.getAccessories()).to.have.length(1)
  })

  it('En caso de recibir un parámetro (type, color o ambos), devuelve sólo los accesorios correspondientes', function () {
    controller.addAccessory({ id: 8, color: 'White', type: 'Necklace', description: 'Golden Necklace'})
    controller.addAccessory({ id: 2, color: 'Blue', type: 'Bun', description: 'Ocean blue bun' })
    controller.addAccessory({ id: 16, color: 'Red', type: 'Bracelet', description: 'Red bracelet' })
    controller.addAccessory({ id: 19, color: 'White', type: 'Bracelet', description: 'Cloud white bracelet'})
    expect(controller.getAccessories('Bracelet')).to.have.length(2)
    expect(controller.getAccessories(null, 'Blue')).to.have.length(1)
    expect(controller.getAccessories('Bracelet', 'Blue')).to.have.length(3)
  })

  it('Si la descripción supera los 140 caracteres, arroja un error', function () {
    expect(() => controller.addAccessory({ id: 2, color: 'Purple', type: 'Bracelet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat...' }))
      .to.throw('La descripción supera los 140 caracteres')
    expect(controller.getAccessories()).to.have.length(0)
  })
})
