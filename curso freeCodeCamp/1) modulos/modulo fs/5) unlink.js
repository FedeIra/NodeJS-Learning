/*
!Unlink
Asynchronously removes a file or symbolic link. No arguments other than a possible exception are given to the completion callback.
*/

const fs = require('fs');

fs.unlink(`${__dirname}/cambiado.html`, (err) => {
  if (err) throw err;
  console.log('Archivo eliminado!');
});
