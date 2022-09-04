/*
!FUNCIONES ASÍNCRONAS
No vienen a reemplazar las promesas. Trabajan en conjunto.
  */

function cuadradoPromise(value) {
  if (typeof value !== 'number') {
    return Promise.reject(
      `Error, el valor "${value}" ingresado no es un número`
    );
  } // acá metemos el error que va a agarrar el catch.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
} // con esta función simulamos la asincronía.

// !En formato de función declarada:
async function funcionAsincronaDeclarada() {
  try {
    console.log(`Inicio Async Function`);

    let obj = await cuadradoPromise(0); // acá le decís que esperá a que se resuelva la promesa antes de continuar a la siguiente línea.
    console.log(`Async function, ${obj.value}, ${obj.result}`); // cada petición la puedo guardar en una variable y luego hacer un console.log de cada una de ellas. Esto, en lugar de usar then.

    obj = await cuadradoPromise(1);
    console.log(`Async function, ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(`hola`);
    console.log(`Async function, ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async function, ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async function, ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async function, ${obj.value}, ${obj.result}`);
    console.log(`Fin Async Function`);
  } catch (error) {
    console.log(error);
  } // capturamos el error que se arroja en la función cuadradoPromise y lo consologea.
} // esto evita usar muchos thens. Se entiende mejor el código.
funcionAsincronaDeclarada();
// 'Inicio Async Function';
// 'Async function, 0, 0';
// 'Async function, 1, 1';
// 'Error, el valor "hola" ingresado no es un número';

// !En formato de función expresada:
const funcionAsincronaExpresada = async () => {
  try {
    console.log(`Inicio Async Function`);

    let obj = await cuadradoPromise(0);
    console.log(`Async function, ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async function, ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(`hola`);
    console.log(`Async function, ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async function, ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async function, ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async function, ${obj.value}, ${obj.result}`);

    console.log(`Fin Async Function`);
  } catch (error) {
    console.log(error);
  }
};

funcionAsincronaExpresada();

// 'Inicio Async Function';
// 'Async function, 0, 0';
// 'Async function, 1, 1';
// 'Error, el valor "hola" ingresado no es un número';
