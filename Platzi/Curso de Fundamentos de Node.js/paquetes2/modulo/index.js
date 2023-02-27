/*
Cuando hacemos código y queremos un software más escalable, podemos crear nuestros propios modulos.

Vamos a traer nuestro modulo y ejecutar una función del modulo.

Primero lo creamos en un archivo aparte: modulo.js
*/

const modulo = require('./modulo.js'); // accedemos desde su ruta

console.log(modulo); // { saludar: [Function: saludar], prop1: 'Hola que tal' }

console.log(modulo.saludar()); // Hola mundo

console.log(modulo.prop1); // Hola que tal
