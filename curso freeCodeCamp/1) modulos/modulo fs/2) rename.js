const fs = require('fs');

fs.rename(__dirname + '/index.html', __dirname + `/cambiado.html`, (err) => {
  if (err) {
    throw err;
  }
  console.log('nombre cambiado'); // Si no hay error, se ejecuta el código
});
