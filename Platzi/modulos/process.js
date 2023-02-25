/*
!PROCESS de NODE.js:
Es un objeto global que corre en todo momento. Es un objeto que tiene toda la información de nuestro proceso de node.js

Escucha todos los eventos y se puede hacer cosas con eso.

*/
// const process = require("process");

/* process viene dentro de los modulos globales.

No hace falta requerirlo*/

// Son event listeners

process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('El proceso terminó');
  // !NO PODES HACER NADA MÁS DESPUÉS DE ESTO
  setTimeout(() => {
    console.log('Esto no se va a ver nunca');
  }, 0);
}); // cuando pasa esto se sale y termina el event loop. Lo que venga después no se ejecuta.

setTimeout(() => {
  console.log('Esto si se va a ver');
}); // esto se ve pq todavía no se produjo el evento de exit terminando el event loop

// Podes escuchar también cuando hay una excepción que nadie ha capturado:

//!TENER SIEMPRE ESTO PARA VER LOS ERRORES:
process.on('uncaughtException', (err, origen) => {
  console.error('Vaya se nos ha olvidado capturar un error');
  console.error(err.message); //funcionQueNoExiste is not defined
  console.error(origen); // uncaughtException
});

// forzamos un error:
funcionQueNoExiste();
console.log('Eso no sale si el error no se recoje');

// Vaya se nos ha olvidado capturar un error
// funcionQueNoExiste is not defined
// uncaughtException
// El proceso va a terminar
// El proceso terminó

/*
Con el modulo de fileSystem podes agarrar y ver el error.
*/

/* se pueden agregar varios event listener más, tales como: */
process.on('beforeExit', () => {});
process.on('exit', () => {});
process.on('disconnect', () => {});
process.on('message', () => {});
process.on('rejectionHandled', () => {});
process.on('uncaughtException', () => {});
process.on('uncaughtExceptionMonitor', () => {});
process.on('warning', () => {});
process.on('multipleResolves', () => {});
process.on('uncaughtRejection', () => {});
process.on('rejectionHandled', () => {});
