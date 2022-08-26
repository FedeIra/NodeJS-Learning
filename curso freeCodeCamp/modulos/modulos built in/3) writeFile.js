/*
!WriteFile:
Para reemplazar todo el contenido o crear en el caso de que no exista.
*/

const fs = require('fs');

fs.writeFile(
  `${__dirname}/cambiado.html`,
  'Cambiado por Node.js a través de writeFile',
  (err) => {
    if (err) throw err;
    console.log('Contenido reemplazado!');
  }
);
