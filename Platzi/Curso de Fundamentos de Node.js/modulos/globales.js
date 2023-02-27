/*
!GLOBALES
Son un montón de modulos que ya vienen con node.js que vienen incluidos, ejemplo time out, console.error, son modulos del core de node.js
*/

//global es el objeto que contiene metodos y propiedades básicas que usamos en node.

// ?Qué es global?
console.log(global);
// te imprime el objeto global con sus propiedades y métodos

// Ejemplo: setInterval que es una función
console.log(setInterval);
// [Function: setInterval]

// ? setInterval:
setInterval(() => {
  console.log('intervalo');
}, 1000);

/*
intervalo
intervalo
intervalo
...
*/

let i = 0;

let interval = setInterval(() => {
  if (i === 3) {
    clearInterval(interval);
  }
  i++;
  console.log('intervalo');
}, 1000);

// con clearInterval se cancela el interval cuando se cumple la condición

/* Es muy útil cuando queres decirle que en 10 intentos para conectar a una base de datos devuelvas algo. */

// ? setImmediate:
setImmediate(() => {
  console.log('Hola');
});

//setImmediate: Para que se ejecute de forma asincrona en cuanto pueda. Es una función que se ejecuta en el siguiente ciclo de eventos, es decir, cuando se termina de ejecutar el código que se está ejecutando en ese momento.

//?require:
// require es una función que se usa para importar módulos de node.js

// require(); // puede requerir cualquier modulo.

//?process:
console.log(process); // datos del proceso

//? __dirname:
console.log(__dirname); // te da la ruta del directorio donde se encuentra el archivo: C:\Users\Usuario\Desktop\Programacion\NodeJS-Learning\Platzi\modulos

//? __filename:
console.log(__filename); // te dice el nombre del file: C:\Users\Usuario\Desktop\Programacion\NodeJS-Learning\Platzi\modulos\globales.js

/* En lo posible hay que evitar usar variables globales porque son un foco de problemas enormes. Hay que tratar usar modulos.  */

//? global variable:
global.miVariable = 'El valor de mi variable global';
console.log(miVariable);

// El valor de mi variable global
