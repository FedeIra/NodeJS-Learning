/*
!ERRORFIRST
Sirve para manejar la asincronía, especialmente con callbacks.

Siempre que tengamos un callback, el primer parametro debería ser el err (error). Es una convención pensando que todo puede fallar.

Una forma sencilla es saber que el error es siempre el primer argumento que se pasa.

También otro patron tipico es tener el callback al final (en general).

En todos los modulos que generes, el primer parametro tiene que ser el error.
*/

const asincrona = (callback) => {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err); // podemos definir que por defecto venga un null. Es opcional. Se pone err, null
    }
  }, 1000);
};

asincrona((err, dato) => {
  if (err) {
    console.error('Tenemos un error');
    console.error(err);
    return false;
    // throw err; // no se puede usar throw en un callback. NO VA A FUNCIONAR
  }
  console.log('todo ha ido bien, mi data es', dato);
});
