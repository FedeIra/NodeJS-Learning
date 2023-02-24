/*
La consola tiene un montón de funcionalidades.

*/
// ? Console.log
console.log('Hola mundo desde un modulo');

// ? Console.error
console.error('error');

// ? Console.warn
console.warn('warning');

var table = [
  {
    a: 1,
    b: 'Z',
  },
  {
    a: 2,
    b: 'm',
  },
];

// ? Console.table
console.table(table);

/*
┌─────────┬───┬─────┐
│ (index) │ a │  b  │
├─────────┼───┼─────┤
│    0    │ 1 │ 'Z' │
│    1    │ 2 │ 'm' │
└─────────┴───┴─────┘

Es muy útil con array muy largos para chequear que los datos estén bien.
*/

// ? Console.group
console.group('Conversacion primera');
console.log('Hola');
console.log('Blablabla');
console.log('Adios');
console.groupEnd('Conversacion primera');
/*
Te lo indexa. Resultados:

Conversacion primera
  Hola
  Blablabla
  Adios
otra conversacion
*/

console.group('Conversacion segunda');
console.log('Hola');
console.log('Blablabla');
console.group('Sub conversacion segunda');
console.log('Blablabla');
console.groupEnd('Sub conversacion segunda');
console.log('Adios');
console.groupEnd('Conversacion segunda');

console.log('otra conversacion');

/*
Conversacion segunda
  Hola
  Blablabla
  Sub conversacion segunda
    Blablabla
  Adios
otra conversacion
*/

const function1 = () => {
  console.group('Funcion 1');
  console.log('Esto es de la función 1');
  console.log('Esto también es de la función 1');
  function2();
  console.log('Hemos vuelto a la función 1');
  console.groupEnd('Funcion 1');
};

const function2 = () => {
  console.group('Funcion 2');
  console.log('Esto es de la función 2');
  console.log('Esto también es de la función 2');
  console.groupEnd('Funcion 2');
};

console.log('Empezamos');
function1();
console.log('Terminamos');

/*
Empezamos
Funcion 1
  Esto es de la función 1
  Esto también es de la función 1
  Funcion 2
    Esto es de la función 2
    Esto también es de la función 2
  Hemos vuelto a la función 1
Terminamos
*/

// ? Console.count
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');

/* veces: 1
veces: 2
veces: 3
veces: 4
veces: 5 */

console.count('otras veces');
console.count('otras veces');
console.countReset('otras veces');
console.count('otras veces');
console.count('otras veces');

/*
otras veces: 1
otras veces: 2
otras veces: 1
otras veces: 2
*/

/* Sirve si queres ver cuántas veces pasaste por un bucle o funciones hasta que llegue al final */
