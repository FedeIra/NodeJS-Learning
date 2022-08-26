/*
!APPENDFILE
Para agregar contenido al final del archivo
*/

const fs = require('fs');

fs.appendFile(
  `${__dirname}/cambiado.html`,
  '<p>Hola, le agregué este contenido a través de append file!</p>',
  (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }
);
