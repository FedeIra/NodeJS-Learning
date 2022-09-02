const expect = require('chai').expect;
const controller = require('../controllers/controllers');

const accessories = [
  {
    id: 1,
    type: 'Sweater',
    color: 'White',
    description: 'White Sweater',
  },
  {
    id: 2,
    type: 'Bun',
    color: 'Purple',
    description: 'Purple Bun',
  },
  {
    id: 3,
    type: 'Shoes',
    color: 'Black',
    description: 'Black Shoes',
  },
];

describe('---------- `Popularity` ----------', function () {
  beforeEach(function () {
    controller.reset();
  });

  it('Actualiza la popularidad del accesorio dependiendo de cuantos gatos lo vistan', function () {
    controller.addCat('Fex');
    controller.addCat('Pip');
    controller.addCat('Bubbles');
    controller.addAccessory(accessories[0]);
    controller.addAccessory(accessories[1]);
    controller.addAccessory(accessories[2]);

    controller.addCatAccessory('Pip', accessories[0].id);
    controller.addCatAccessory('Fex', accessories[0].id);
    controller.addCatAccessory('Fex', accessories[1].id);
    controller.addCatAccessory('Bubbles', accessories[0].id);
    controller.addCatAccessory('Bubbles', accessories[1].id);
    controller.addCatAccessory('Bubbles', accessories[2].id);
    expect(controller.getAccessories()[0].popularity).to.eql('high');
    expect(controller.getAccessories()[1].popularity).to.eql('average');
    expect(controller.getAccessories()[2].popularity).to.eql('low');
  });

  it('Devuelve la popularidad de un accesorio correctamente', function () {
    controller.addCat('Fex');
    controller.addCat('Pip');
    controller.addCat('Bubbles');
    controller.addAccessory(accessories[0]);
    controller.addAccessory(accessories[1]);
    controller.addAccessory(accessories[2]);

    controller.addCatAccessory('Pip', accessories[0].id);
    controller.addCatAccessory('Fex', accessories[0].id);
    controller.addCatAccessory('Fex', accessories[1].id);
    controller.addCatAccessory('Bubbles', accessories[0].id);
    controller.addCatAccessory('Bubbles', accessories[1].id);
    controller.addCatAccessory('Bubbles', accessories[2].id);
    expect(controller.getAccessoryPopularity(accessories[0].id)).to.eql('high');
    expect(controller.getAccessoryPopularity(accessories[1].id)).to.eql(
      'average'
    );
    expect(controller.getAccessoryPopularity(accessories[2].id)).to.eql('low');
    expect(controller.getAccessoryPopularity(accessories[2].id)).to.eql('low');
  });

  it('Si el accesorio no existe devuelve un error', function () {
    controller.addCat('Fifix');
    expect(() => controller.addCatAccessory('Fifix', 23)).to.throw(
      'Accesorio no encontrado'
    );
  });
});
