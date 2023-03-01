const bcrypt = require('bcrypt');
// Ejemplo de hash. Es una función asincrona
const hashPassword = async () => {
  const myPassword = 'admin 123 .202';

  const hash = await bcrypt.hash(myPassword, 10); // este método es asincrono

  console.log(hash);
};

hashPassword(); // Ejemplo: $2b$10$BM5PiUY7Bpj7BzgtKF.bHut.72w2Qmtjkc42Zhfd4o6LRvtMt1coC // el 10 significa cuántos saltos hizo.
