/*
!ERRORES EN NODE.JS
Se pueden capturar de modo de seguir con la ejecución del hilo de código. Con try y catch.
*/

// ?Ejemplo: errores en funciones sincronas:

const seRompe = () => {
  return 3 + z;
};

// cada vez que sepamos que una función puede romperse, lo metes dentro de un try / catch

try {
  seRompe();
} catch (err) {
  console.error('Vaya, algo se ha roto...');
  console.error(err.message);
  console.log('No pasa nada. Hemos capturado el error.');
}

// El catch me permite que siga el hilo a pesar de que se rompió la función.

console.log('Esto de aquí está al final');

// Vaya, algo se ha roto...
// z is not defined
// No pasa nada. Hemos capturado el error.
// Esto de aquí está al final

// ?Ejemplo: errores en funciones asincronas:

const seRompeAsincrono = (callback) => {
  setTimeout(() => {
    // Acá ya no se captura el error con el código de abajo. Tengo que meterlo dentro de un try y catch:
    try {
      return 3 + z;
    } catch (err) {
      console.error('Vaya, algo se ha roto...');
      callback(err);
    }
  }, 1000);
};

seRompeAsincrono((err) => {
  console.log(`Hay error: ${err.message}`);
});

// Vaya, algo se ha roto...
// Hay error: z is not defined
