/*
!Modulo fileSystem (fs):
Es un modulo que nos permite interactuar (acceder, modificar, leer, etc) con el sistema de archivos de nuestro ordenador, incluyendo bases de datos.
*/

const fs = require('fs');

//ya podemos acceder a este archivo

const leer = (route, callback) => {
  fs.readFile(route, (err, data) => {
    callback(data.toString());
  });
};

leer(__dirname + '/archivo.txt', console.log);
// Hola, yo soy un archivo
// Y tengo varias líneas!

const escribir = (route, contenido, cb) => {
  fs.writeFile(route, contenido, (err) => {
    if (err) {
      console.error('No he podido escribirlo', err);
    } else {
      console.log('Se ha escrito correctamente');
    }
  });
};

escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log); // te crea el nuevo archivo con el texto indicado.

const borrar = (route, cb) => {
  fs.unlink(route, cb);
};

borrar(__dirname + '/archivo1.txt', console.log); // te borra el archivo indicado.
