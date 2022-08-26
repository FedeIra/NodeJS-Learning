/*
!MODULO:
Funcionalidad organizada en uno o varios archivos javascript que puede ser reutilizada en una aplicación. En lugar de escribir todo en un solo archivo.
*/

function saludar(nombre) {
  return `Hola ${nombre}`;
}

module.exports.saludar = saludar;
console.log(module.exports); //{ saludar: [Function: saludar] }
