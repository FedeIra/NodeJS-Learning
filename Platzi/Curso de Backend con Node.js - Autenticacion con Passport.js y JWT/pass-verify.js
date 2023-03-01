// Ejemplo de cómo funciona un hash
const bcrypt = require('bcrypt');

const verifyPassword = async () => {
  // const myPassword1 = 'admin 123 .202'; // true

  const myPassword2 = 'admin 123'; //false

  const hash = '$2b$10$BM5PiUY7Bpj7BzgtKF.bHut.72w2Qmtjkc42Zhfd4o6LRvtMt1coC';

  const isMatch = await bcrypt.compare(myPassword2, hash); //? este método es asincrono y devuelve true o false si coinciden o no las passwords con el hash que le pasamos como parámetro (en este caso el hash que está en la base de datos)

  // const hash = await bcrypt.hash(myPassword, 10);

  console.log(isMatch);
};

verifyPassword(); // si manda true es pq coincido la password con el hash
