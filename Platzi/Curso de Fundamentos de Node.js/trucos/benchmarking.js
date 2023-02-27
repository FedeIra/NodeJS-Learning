/*
!BENCHMARKING (console time y timeEnd):
Cuando tenes un proceso largo está bueno detectar cuánto tiempo te lleva.

La función console.time(‘nombre’) inicia un temporizador que se puede usar para rastrear cuánto tiempo dura una operación. El temporizador sera identificado por el nombre dado a la consola. Ese mismo nombre se utilizara cuando se llame a console.timeEnd(‘nombre’) para detener el temporizador y obtener el tiempo demorado durante el proceso.

*/

let suma = 0;

/* Hay una forma para saber exactamente cuánto tarde en ejecutarse esta función */
console.time('todo');
console.time('bucle');
for (let i = 0; i < 100000000; i++) {
  suma += i;
}
console.log(suma);
console.timeEnd('bucle'); // bucle: 127.047ms

console.time('bucle2');
for (let i = 0; i < 700000000; i++) {
  suma += i;
}
console.log(suma);
console.timeEnd('bucle2'); // bucle2: 728.63ms TARDA CASI SIETE VECES MÁS
console.timeEnd('todo'); // todo: 939.876ms

// Funciona con funciones asincronas:

const asincrona = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hola Mundo'), 3000)
      : reject(new Error('Test Error'));
  });
};

console.time('asincrona');
console.log('Empieza el Proceso asincrono');
asincrona()
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    console.timeEnd('asincrona'); //asincrona: 3.007s
  });
