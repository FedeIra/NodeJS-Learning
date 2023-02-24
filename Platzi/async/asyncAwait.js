//! ASYNC AWAIT:
//?Qué es async await?
/*
Es una forma de escribir código asíncrono que se ve como código síncrono.

Permite definir una función de forma explicita como función asincrona y esperar a que termine. No va a estar bloqueando el hilo principal porque se pueden seguir escuchando peticiones.

Es azucar sintactico, es una forma de simplificar el then.
*/
const hola = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`);
      resolve(nombre);
    }, 1500);
  });
};

const hablar = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla bla...');
      resolve(nombre);
      reject('El error están en blabla.');
    }, 1000);
  });
};

const adios = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios, ${nombre}`);
      resolve();
    }, 1000);
  });
};

const main = async () => {
  let nombre = await hola('Carlos');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
};

// Aunque parece sintaxis sincrona, es asincrona.
console.log('Empezamos el proceso');
main();
console.log('Terminamos el proceso');
/* Resultado:
Empezamos el proceso
Terminamos el proceso
Hola, Carlos
Bla bla bla bla...
Bla bla bla bla...
Bla bla bla bla...
Adios, Carlos
*/

/* Le puedo sacar la asincronia a cualquier sacandole el await: */

const main2 = async () => {
  let nombre = await hola('Carlos');
  await hablar();
  hablar();
  hablar(); /* les saco el await y se ejecutan las dos funciones sin esperar. Convertimos procesos asincronos en sincronos aunque la función sigue siendo asincrona */
  await adios(nombre);
};

console.log('Empezamos el segundo proceso');
main2();
console.log('Terminamos el segundo proceso');

/* Resultado:
Empezamos el segundo proceso
Terminamos el segundo proceso
Hola, Carlos
Bla bla bla bla...
Bla bla bla bla...
Bla bla bla bla...
Adios, Carlos
*/
