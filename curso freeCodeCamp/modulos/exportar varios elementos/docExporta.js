function saludar(nombre) {
  return `Hola ${nombre}`;
}

function despide(nombre) {
  return `Chau ${nombre}`;
}

// 1) Exportar función por función
module.exports.saludar = saludar;
module.exports.despide = despide;

// 2) La siguiente forma es lo mismo, pero es una forma más corta de hacerlo:
module.exports = {
  // saludar: saludar,
  saludar,
  despide,
};
