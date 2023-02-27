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
//Resultado:
// iniciando proceso...
// Hola soy una función asincrona
// -------------------------------terminando primer proceso-------------------------------------
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
//Resultado:
// iniciando segundo proceso
// Hola soy una función asincrona
// ---------------------------------------------terminando segundo proceso----------------------------------
// Estoy siendo asincrona

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

//Resultado:
// iniciando tercer proceso
// Hola soy una función asincrona
// Estoy siendo asincrona
// ---------------------------------------------Terminando tercer proceso---------------------------------------------

// Otro ejemplo de callbacks
const hola1 = (nombre, miCallback) => {
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    miCallback();
  }, 1000);
};

const adios1 = (nombre, otroCallback) => {
  setTimeout(() => {
    console.log(`Adios, ${nombre}`);
    otroCallback();
  }, 1000);
};

console.log('Iniciando proceso...');

hola1('Carlos', function () {
  adios1('Carlos', () => {
    console.log('Terminando proceso...');
  });
});

//Resultado:
// Iniciando proceso...
// Hola, Carlos
// Adios, Carlos
// Terminando proceso...

// Otro ejemplo de callbacks
const hola = (nombre, miCallback) => {
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    miCallback();
  }, 1500);
};

const adios = (nombre, otroCallback) => {
  setTimeout(() => {
    console.log(`Adios, ${nombre}`);
    otroCallback();
  }, 1000);
};

console.log('Iniciando proceso...');

hola('Carlos', () => {});
adios('Carlos', () => {});

//Resultado:
// Iniciando proceso...
// Adios, Carlos
// Hola, Carlos

/* Estos son los problemas de asincronía. No sabes cuánto va a tardar en ejecutarse cada petición a la API o base de datos. Entonces puede pasar que se ejecuta primero una función que no correspondía (Adios Carlos) antes que la primera función que correspondía (Hola Carlos) */

// Otro ejemplo en el que callbacks comparten parámetros:
const hola2 = (nombre, miCallback) => {
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    miCallback(nombre); // el callback comparte la información en este caso
  }, 1500);
};

const adios2 = (nombre, otroCallback) => {
  setTimeout(() => {
    console.log(`Adios, ${nombre}`);
    otroCallback();
  }, 1000);
};

console.log('Iniciando proceso...');
hola2('Carlos', (nombre) => {
  adios2(nombre, () => {
    console.log('Terminando proceso...');
  });
});

// Resultado:
// Iniciando proceso...
// Hola, Carlos
// Adios, Carlos
// Terminando proceso...
