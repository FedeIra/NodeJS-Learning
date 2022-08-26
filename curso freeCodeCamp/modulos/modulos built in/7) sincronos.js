/*
!SINCRONIZADOS:
1) Le agrego sync al final del método.
2) Cuando hacemos operaciones sincronas, no necesitamos el error y data handling. Te lo retorna solo y le podes asignar una constante.
Ejemplo con todos los archivos:*/

const fs = require('fs');

// Leer archivo:

console.log('Antes de leer el archivo');

const archivo = fs.readFileSync(__dirname + '/index.html', 'utf-8');

console.log(archivo);

// Cambiar nombre archivo:
fs.renameSync(__dirname + '/index.html', __dirname + `/cambiado.html`);

console.log('Después de cambiar el nombre del archivo');

// Escribir archivo:
fs.writeFileSync(
  `${__dirname}/index.html`,
  'Cambiado por Node.js a través de writeFile'
);

console.log('Después de reemplazar el contenido del archivo');

// Agregar contenido al final del archivo:
fs.appendFileSync(
  `${__dirname}/index.html`,
  '<p>Hola, le agregué este contenido a través de append file!</p>'
);

console.log('Después de agregar contenido al archivo');

// Eliminar archivo:
fs.unlinkSync(`${__dirname}/index.html`);

console.log('Después de eliminar el archivo');

/*
Te devuelve:
Antes de leer el archivo
<!DOCTYPE html>

<html lang="es">

<head>
  <title>Node.js</title>
</head>

<body>
  <h1>freeCodeCamp</h1>
  <p>Estoy aprendiendo Node.js</p>
</body>

</html>
Después de cambiar el nombre del archivo
Después de reemplazar el contenido del archivo
Después de agregar contenido al archivo
Después de eliminar el archivo

SE EJECUTA SINCRONAMENTE!!
*/
