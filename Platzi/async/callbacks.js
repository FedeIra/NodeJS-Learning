//! CALLBACK
/*
Una funcion callback es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.
La funcion que recibe como argumento otras funciones es denominada funcion de orden superior (higher-order function), esta contiene la logica correspondiente para ejecutar adecuadamente la funcion callback.

En el siguiente codigo

setTimeout(console.log('Hello'), 1000)

setTimeout es una higher - order function y console.log es una callback function
*/

// primera funcion asincrona

const noSoyAsincrona = () => {
  console.log('Hola soy una función asincrona');
};

console.log('iniciando proceso...');
noSoyAsincrona();
console.log(
  '-------------------------------terminando primer proceso-------------------------------------'
);

// No hay asincronia todavía

const soyAsincrona = () => {
  console.log('Hola soy una función asincrona');
  setTimeout(() => {
    console.log('Estoy siendo asincrona');
  }, 2000);
};

console.log('iniciando segundo proceso');
soyAsincrona();
console.log(
  '---------------------------------------------terminando segundo proceso----------------------------------'
);

// Ahora si hay asincronia. Se ejecuta todas las funciones, pero se realiza primero el terminando segundo proceso antes que el time out. Para corregir esto puedo usar callback:

const soyAsincronaConCallback = (miCallback) => {
  console.log('Hola soy una función asincrona');
  setTimeout(() => {
    console.log('Estoy siendo asincrona');
    miCallback();
  }, 2000);
};

console.log('iniciando tercer proceso');

soyAsincronaConCallback(function () {
  console.log(
    '---------------------------------------------Terminando tercer proceso---------------------------------------------'
  );
});
