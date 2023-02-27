/*
!NPM
?qué es NPM?
Es un gestor de paquetes. Todo lo que no fuese modulos del sistema operativo, uno de los registros populares de paquetes es npm:

https://www.npmjs.com/package/node

Ejemplo: paquete para ver si números son pares o impares:

npm install is-odd

y luego en el archivo donde lo quieras usar:

const isOdd = require('is-odd');

express.js es una dependencia npm que tiene a su vez sus propias dependencias.

Hay que usar paquetes pero con cuidado pq pueden tener fallos, y temas de seguridad. Hay que comprobar que las versiones no estén en 0, ni que la última actualización no sea hace más de 6 meses... etc. como cantidad de descargas, etc.
*/

const isOdd = require('is-odd');

const isOdd = require('is-odd');

console.log(isOdd(3)); // true
console.log(isOdd(4)); // false

/* Te saca muchísimo trabajo aprovenchando los modulos. */
