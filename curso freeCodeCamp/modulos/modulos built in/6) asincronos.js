/* Todos los métodos de fs son asincronos, salvo que les aclares lo contrario.

Ejemplo con todos los archivos:*/

const fs = require('fs');

// Leer archivo:

console.log('Antes de leer el archivo');

fs.readFile(__dirname + '/index.html', 'utf-8', (err, data) => {
  if (err) {
    // console.log(err);
    throw err; // Otra opción es usar un try catch
  } //  else {
  console.log(data);
  // }
});

console.log('Después de leer el archivo');

// Cambiar nombre archivo:
fs.rename(__dirname + '/index.html', __dirname + `/cambiado.html`, (err) => {
  if (err) {
    throw err;
  }
  console.log('nombre cambiado'); // Si no hay error, se ejecuta el código
});

console.log('Después de cambiar el nombre del archivo');

// Escribir archivo:
fs.writeFile(
  `${__dirname}/index.html`,
  'Cambiado por Node.js a través de writeFile',
  (err) => {
    if (err) throw err;
    console.log('Contenido reemplazado!');
  }
);

console.log('Después de reemplazar el contenido del archivo');

// Agregar contenido al final del archivo:
fs.appendFile(
  `${__dirname}/index.html`,
  '<p>Hola, le agregué este contenido a través de append file!</p>',
  (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }
);

console.log('Después de agregar contenido al archivo');

// Eliminar archivo:
fs.unlink(`${__dirname}/index.html`, (err) => {
  if (err) throw err;
  console.log('Archivo eliminado!');
});

console.log('Después de eliminar el archivo');

/*
Antes de leer el archivo
Después de leer el archivo
Después de cambiar el nombre del archivo
Después de reemplazar el contenido del archivo
Después de agregar contenido al archivo
Después de eliminar el archivo

Devuelve primero los console.log y después ejecuta las funciones desordenadamente dependiendo de cuánto tarda cada una.

Esto es pq son métodos asincronos!!!

Probemos sincronizando el código en el archivo sincronos.js
*/
