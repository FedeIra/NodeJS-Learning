/// =========================================================================== ///
/// =============================== HENRY-CATS ================================ ///
/// =========================================================================== ///

'use strict';

let cats = [];
let accessories = [];

module.exports = {
  reset: function () {
    // No es necesario modificar esta función. La usamos para "limpiar" los arreglos entre test y test.

    cats = [];
    accessories = [];
  },

  // ==== COMPLETAR LAS SIGUIENTES FUNCIONES (vean los test de `controller.js`) =====

  addCat: function (name) {
    // Agrega un nuevo felin@, verificando que no exista anteriormente en base a su nombre.
    // En caso de existir, no se agrega y debe arrojar el Error ('El gato o gata ya existe') >> ver JS throw Error
    // Debe tener una propiedad <age> que inicialmente debe ser '1 year'.
    // Debe tener una propiedad <color> que inicialmente es un array vacío.
    // Debe tener una propiedad <accesories> que inicialmente es un array vacío.
    // El gato o gata debe guardarse como un objeto con el siguiente formato:
    // { name: name,  age: '1 year' , color: []}
    // En caso exitoso debe retornar el string '<nombre del gato o gata> fue creado correctamente'.
    if (!cats.some((el) => el.name === name)) {
      cats.push({ name, age: '1 year', color: [], accessories: [] });
      return `${name} fue creado correctamente`;
    }
    throw Error('El gato o gata ya existe');
  },

  listCats: function (agregado) {
    // En caso de recibir el parámetro <age>, devuelve sólo los gatos correspondientes a dicho age.
    // Si no recibe parámetro, devuelve un arreglo con todos los gatos.

    if (age) return cats.filter((el) => el.age === age);
    return cats;
  },

  addAccessory: function ({ id, color, type, description }) {
    // Agrega un nuevo accesorio.
    // Si el accesorio ya existe, no es agregado y arroja un Error ('El accesorio con el id <id> ya existe')
    // Debe devolver el mensaje 'El accesorio <type> fue agregado correctamente'
    // Inicialmente debe guardar la propiedad <popularity> del accesorio como 'low' por defecto
    // Si la descripción supera los 140 caracteres, debe arrojar un error
    if (accessories.some((el) => el.id === id))
      throw Error(`El accesorio con el id ${id} ya existe`);
    if (description.length > 140)
      throw Error('La descripción supera los 140 caracteres');
    accessories.push({ id, color, type, description, popularity: 'low' });
    return {
      message: `El accesorio ${color} ${type} fue agregado correctamente`,
    };
  },

  getAccessories: function (type, color) {
    // Devuelve un array con todos los accesorios.
    // Si recibe parámetro "type", debe retornar  los accesorios que coincidan con el tipo.
    // Si recibe parámetro "color" debe retornar los accesorios que coincidan con el color
    // Si recibe ambos parámetros, se devuelven los accesorios que coincidan con el color o con el tipo
    if (type && color)
      return [
        ...accessories.filter((el) => el.type === type),
        ...accessories.filter((el) => el.color === color),
      ];
    if (type) return accessories.filter((el) => el.type === type);
    if (color) return accessories.filter((el) => el.color === color);
    return accessories;
  },

  deleteAccessory: function (id) {
    // Elimina un accesorio del array
    // Si el id no existe dentro del array de accesorios, arrojar un Error ('El accesorio con el id <id> no fue encontrado')
    // Una vez eliminado el accesorio del array, devolver un mensaje que diga 'El accesorio con el id <id> fue eliminado correctamente'
    if (!accessories.some((el) => el.id === id))
      throw Error(`El accesorio con el id ${id} no fue encontrado`);
    accessories = accessories.filter((el) => el.id !== id);
    return `El accesorio con el id ${id} fue eliminado correctamente`;
  },

  modifyAccessory: function (obj) {
    // Modifica un accesorio del array
    // Si el id no existe dentro del array de accesorios arrojar un Error ('accesorio no encontrado')
    // Si el objeto viene vacio, arrojar un Error ('No se detectaron cambios a aplicar')
    // Una vez modificado el accesorio del array, devolver el accesorio modificado
    if (JSON.stringify(obj) === '{}')
      throw Error('No se detectaron cambios a aplicar');
    let idx = accessories.findIndex((el) => el.id === obj.id);
    if (idx === -1) throw Error('accesorio no encontrado');
    accessories[idx] = { ...accessories[idx], ...obj };
    return accessories[idx];
  },

  increaseAccesoryPopularity: function (accessoryId) {
    // Este método es complementario a 'addCatAccessory'
    // Actualiza la propiedad <popularity> del accesorio,
    // Si se actualizó la popularidad del accesorio, devolver true
    // Si no se actualizó la popularidad del accesorio, debe devolver false
    let accesory = accessories.find((el) => el.id === accessoryId);

    let howManyCatsWearsTheSameShitcats = cats.reduce((acc, el) => {
      if (el.accessories.some((el) => el.id === accessoryId)) return acc + 1;
      return acc + 0;
    }, 0);

    if (howManyCatsWearsTheSameShitcats === 2) {
      accesory.popularity = 'average';
      return true;
    }

    if (howManyCatsWearsTheSameShitcats === 3) {
      accesory.popularity = 'high';
      return true;
    }

    return false;
  },

  addCatAccessory: function (catName, accessoryId) {
    // Agrega un accesorio a un felin@
    // Si el felin@ ya tiene puesto el accesorio, arrojar un Error('El gato <nombre_gato> ya tiene el accesorio puesto') y no lo agrega
    // Si el gato no existe arrojar un Error ('El gato <nombre_gato> no existe')
    // Si el id de accesorio no existe arrojar un Error ('accesorio no encontrado' y no actualiza la popularidad)
    let cat = cats.find((el) => el.name === catName);
    let accesory = accessories.find((el) => el.id === accessoryId);
    if (!cat) throw Error(`El gato ${catName} no existe`);
    if (!accesory) throw Error('Accesorio no encontrado');
    if (
      cat.accessories.length > 0 &&
      cat.accessories.some((el) => el.id === accessoryId)
    )
      throw Error(`El gato ${catName} ya tiene el accesorio puesto`);
    cat.accessories.push(accesory);
    this.increaseAccesoryPopularity(accessoryId);
    return `El accesorio ${cat.accessories[0].type} fue agregado a ${catName} con exito`;
  },

  getAccessoryPopularity: function (accessoryId) {
    //Devuelve la popularidad de un accesorio
    // Para eso deberás comprobar cuantos gatos visten el accesorio recibido por parámetros (es un id)
    // Si la cantidad de gatos que visten el accesorio son 2, entonces la popularidad del accesorio debe valer 'average'
    // Si la cantidad de gatos que visten el accesorio son 3, entonces la popularidad del accesorio debe valer 'high'
    return accessories.find((el) => el.id === accessoryId).popularity;
  },
};
