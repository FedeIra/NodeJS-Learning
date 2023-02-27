// ! PROMESAS
//?Qué son las promesas?
/*
Las promesas vienen de las callbacks, pero las promesas tienen un estado, resueltas, pendientes o pueden fallar.
*/
const hola = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
    }, 1500);
  });
};

const hablar = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla bla...');
      // resolve(nombre);
      reject('El error están en blabla.');
    }, 1000);
  });
};

const adios = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios, ${nombre}`);
      resolve();
    }, 1000);
  });
};

console.log('Iniciando el proceso...');

hola('Carlos')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log('Terminado el proceso...');
  })
  /* then with more than one parameter: */

  .catch((error) => {
    console.log('Ha habido un error:');
    console.error(error);
  }); // esto es para atajar errores, de lo contrario, en caso de error, cae todo. Se agarra el error rápido, y evita que se agranden los errores. Siempre que haya una promesa hay que ponerle catch.

// La principal diferencia es que las callbacks se pueden ir anidando. Es muchisimo más legible que el callback hell anterior.

// Esto se simplifica todavía más con ASYNC AWAIT.
