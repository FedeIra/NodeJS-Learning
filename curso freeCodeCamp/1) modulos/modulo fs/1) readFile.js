const fs = require('fs');

fs.readFile(__dirname + '/index.html', 'utf-8', (err, data) => {
  if (err) {
    // console.log(err);
    throw err; // Otra opción es usar un try catch
  } //  else {
  console.log(data);
  // }
});

console.log('Gracias al error ahora sigo, Hola');
/*
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
*/
