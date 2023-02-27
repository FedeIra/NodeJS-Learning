const expect = require('chai').expect;
const controller = require('../controllers/controllers');

const awesomeAccessory = {
  id: 4,
  type: 'Bun',
  color: 'Gold',
  description: 'Golden Bun',
};
const fancyAccessory = {
  id: 5,
  type: 'Shoes',
  color: 'Blue',
  description: 'Blue Shoes',
};

const premiumAccessory = {
  id: 8,
  type: 'Bracelet',
  color: 'Gold',
  description: 'Golden Bracelet',
};

describe('---------- `addCatAccessory` ----------', function () {
  beforeEach(function () {
    controller.reset();
  });

  it('Agrega el accesorio a cualquier felin@', function () {
    controller.addCat('Fifix');
    controller.addAccessory(awesomeAccessory);
    controller.addAccessory(fancyAccessory);
    expect(controller.addCatAccessory('Fifix', awesomeAccessory.id)).to.eql(
      'El accesorio Bun fue agregado a Fifix con exito'
    );
    controller.addCatAccessory('Fifix', fancyAccessory.id);
    expect(controller.listCats()[0].accessories).to.have.length(2);
  });

  it('Si el gato no existe, arroja un error', function () {
    expect(() => controller.addCatAccessory('Fifi')).to.throw(
      'El gato Fifi no existe'
    );
  });

  it('Si el gato ya tiene el accesorio, devuelve un error', function () {
    controller.addCat('Fifix');
    controller.addAccessory(premiumAccessory);
    controller.addCatAccessory('Fifix', premiumAccessory.id);
    expect(() =>
      controller.addCatAccessory('Fifix', premiumAccessory.id)
    ).to.throw('El gato Fifix ya tiene el accesorio puesto');
    expect(controller.listCats()[0].accessories).to.have.length(1);
  });
});
