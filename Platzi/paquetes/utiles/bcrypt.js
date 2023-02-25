/*
!MODULOS ÚTILES:
?Bcrypt:
modulo que funciona sobre cript q te permite cifrar y comparar resultados.

*/
const bcrypt = require('bcrypt');

const password = '1234Segura!';

bcrypt.hash(password, 5, function (err, hash) {
  // Store hash in your password DB.
  console.log(hash);

  bcrypt.compare(password, hash, function (err, res) {
    console.log(res); // te dice que la password que ha generado es de este hash
  });
});

//$2b$05$O9x.49kbBAJIXzXNrymVpOOnbFserCpiIqalevwGl8ArA/VQkjqnG
//true
