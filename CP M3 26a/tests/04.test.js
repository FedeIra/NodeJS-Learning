const expect = require('chai').expect;

const controller = require('../controllers/controllers');

describe('---------- `deleteAccessory` y `modifyAccessory` ----------', function () {
  beforeEach(function () {
    controller.reset();
  });

  it('deleteAccessory: si el id no se encuentra en el array, arroja un error', function () {
    expect(() => controller.deleteAccessory(2)).to.throw(
      'El accesorio con el id 2 no fue encontrado'
    );
  });

  it('deleteAccessory: elimina un accesorio del array y devuelve un mensaje', function () {
    controller.addAccessory({
      id: 3,
      color: 'Red',
      type: 'Necklace',
      description: 'Golden Necklace',
    });
    controller.addAccessory({
      id: 4,
      color: 'Black',
      type: 'Bun',
      description: 'Black Bun',
    });
    expect(controller.deleteAccessory(3)).to.eql(
      'El accesorio con el id 3 fue eliminado correctamente'
    );
    expect(controller.getAccessories()).to.have.length(1);
  });

  it('modifyAccessory: si no se encuentra un accesorio con el id asociado, arroja un error', function () {
    controller.addAccessory({
      id: 3,
      color: 'Red',
      type: 'Necklace',
      description: 'Golden Necklace',
    });
    expect(() => controller.modifyAccessory({ id: 123 })).to.throw(
      'accesorio no encontrado'
    );
  });

  it('modifyAccessory: si el objeto viene vacío arroja un error', function () {
    expect(() => controller.modifyAccessory({})).to.throw(
      'No se detectaron cambios a aplicar'
    );
  });

  it('modifyAccessory: modifica el accesorio y lo devuelve', function () {
    const changes = {
      id: 3,
      type: 'Necklace',
      color: 'Black',
      description: 'Black necklace',
    };
    controller.addAccessory({
      id: 3,
      color: 'Red',
      type: 'Necklace',
      description: 'Golden Necklace',
    });
    controller.addAccessory({
      id: 4,
      color: 'Black',
      type: 'Bun',
      description: 'Black bun',
    });
    controller.addAccessory({
      id: 5,
      color: 'White',
      type: 'Necklace',
      description: 'Cloudy Necklace',
    });
    expect(JSON.stringify(controller.modifyAccessory(changes))).to.eql(
      JSON.stringify(controller.getAccessories()[0])
    );
  });

  it('modifyAccessory: modifica el accesorio parcialmente y lo devuelve', function () {
    controller.addAccessory({
      id: 3,
      color: 'Red',
      type: 'Necklace',
      description: 'Golden Necklace',
    });
    const accesoryBeforeUpdate = controller.getAccessories()[0];
    const changes = { id: accesoryBeforeUpdate.id, color: 'Blue' };
    const returnedValue = JSON.stringify(controller.modifyAccessory(changes));
    const accesoryAfterUpdate = controller.getAccessories()[0];

    expect(returnedValue).to.eql(JSON.stringify(accesoryAfterUpdate));
    expect(accesoryBeforeUpdate.color).not.eq(accesoryAfterUpdate.color);
    expect(accesoryBeforeUpdate.description).eq(
      accesoryAfterUpdate.description
    );
  });
});
