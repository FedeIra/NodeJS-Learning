//1) Si quiero incluir todos los elementos de docExporta:
const saludos = require('./docExporta.js');

console.log(saludos.saludar(`fede`)); // Hola fede

console.log(saludos.despide(`fede`)); // Chau fede

//2) Si quiero incluir uno de los elementos de docExporta:
const { saludar } = require('./docExporta.js');

console.log(saludar(`fede`)); // Hola fede

console.log(despide(`fede`)); // error

//3) Puedo incluirlos a todos con destructuración
const { saludar, despide } = require('./docExporta.js');

console.log(saludar(`fede`)); // Hola fede

console.log(despide(`fede`)); // Chau fede
