/*
!MODULO TIMERS:
Sirve para operaciones asíncronas. Las ejecuta luego de un cierto periodo y no en el momento que se lee la línea de código*/

//!SET TIME OUT
//Ejecuta una función una vez pasado un tiempo determinado

// Función básica
setTimeout(function () {
  console.log('Ejecución finalizada');
}, 5000);

function mostrarTema(tema) {
  console.log(`El tema es: ${tema}`);
}

console.log('Iniciando ejecución');
mostrarTema(`nodeJS`);

/*Iniciando ejecución
El tema es: nodeJS
El tema es: JavaScript */

// Función con un parámetro:

setTimeout(mostrarTema, 3000, 'JavaScript');

// Función con dos parámetros:
function sumar(a, b) {
  console.log(a + b);
}

setTimeout(sumar, 3000, 4, 5); //9 y tarda 3 segundos en devolverlo.

/*
!setImmediate :Se ejecuta inmediatamente después del código síncrono
Para ejecutar código asíncrono en la próxima iteración del ciclo de eventos (lo más pronto posible).
Tiene prioridad sobre el resto de código asíncrono.
*/
console.log('Iniciando ejecución');
setImmediate(mostrarTema, 'React');
console.log('Ejecución finalizada');

/*
!SETINTERVAL()
Se ejecuta para ejecutar código un número infinito de veces con un retraso especificado de milisegundos.  */

setInterval(function () {
  console.log('Ejecución finalizada');
}, 3000);

/* Ejecución finalizada
Ejecución finalizada
Ejecución finalizada
Ejecución finalizada
Ejecución finalizada  Cada 3 segundos*/

/*Se le pueden pasar hasta dos argumentos:  */

setImmediate(mostrarTema, 1500, 'HTML'); // Devuelve: El tema es: HTML cada 1.5 segundos

setImmediate(sumar, 3000, 4, 5); // Devuelve: 9 cada 3 segundos
