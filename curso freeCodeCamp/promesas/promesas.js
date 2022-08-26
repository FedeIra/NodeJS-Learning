/*
!PROMESAS:
JS ASINCRONA:
Cuando hacemos solicitudes a una API, no sabemos si la petición va a ser exitosa o no. Ni cuanto va a tardar. Son ejecuciones asincronas. Para eso necesitamos promesas.

SON OBJETOS!!!

!PENDING:
Su estado inicial es pending.

!FULFILLED:
Luego, cuando la petición se haya completado, el estado cambia a resolved.

!REJECTED:
Si la petición falló, el estado cambia a rejected.

Las promesas tienen un método .then() que se ejecuta cuando la promesa se resuelve.
*/

/*
!RESOLVE Y REJECT:
Tienen valores por sí mismos. Son funciones predeterminadas de una promesa. No hay que asignarles un valor. */

const promesaCumplida = false;

//!Creamos la promesa y determinamos cuando va a ser cumplida y cuando rechazada. Es el comienzo.
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve('promesa cumplida');
    } else {
      reject('promesa rechazada...');
    }
  }, 3000);
});

//!MANEJAMOS LO QUE PASA CUANDO SE RESUELVE LA PROMESA:
/*  Le puedo agregar que hacer en caso de que se resuelva.Valor es igual a 'promesa cumplida' que es lo que determinamos que pasa cuando se cumple la promesa. (resolve('promesa cumplida');) Es una conexión. */
// miPromesa.then((valor) => {
//   console.log(valor);
// });
// promesa cumplida

//!MANEJAMOS LO QUE PASA CUANDO SE RECHAZA LA PROMESA TAMBIÉN:
/* De lo contrario, te tira error */
const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

//example of promise
let condition = true;

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (condition) {
      resolve('promesa cumplida');
    } else {
      reject('promesa rechazada');
    }
  }, 3000);
});
promesa.then((valor) => {
  console.log(valor);
});
promesa.catch((error) => {
  console.log(error);
});

const estatusPedido = () => {
  return Math.random() < 0.8;
};

// Creo la promesa
const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve('pedido de pizza exitoso');
    } else {
      reject('pedido de pizza fallido');
    }
  }, 3000);
});

// Creo las funciones que van a manejar el resolve y el reject
const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};

const manejarError = (mensajeDeError) => {
  console.log(mensajeDeError);
};

//Conecto las funciones anteriores con el resolve y el reject. Si el pedido se realiza exitosamente, se ejecuta la funcion de resolve, si no, se ejecuta la funcion de reject.
miPedidoDePizza.then(manejarPedido, manejarError);

/* AHORA BIEN, en lugar de definir las funciones de manejo de resolve y reject por separado se puede hacer TODO JUNTO en un solo bloque de código: */

miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  // .then(null, (mensajeDeError) => {
  //   console.log(mensajeDeError);
  //!HAY UNA MEJOR ALTERNATIVA: CATCH * /
  .catch((mensajeDeError) => {
    console.log(mensajeDeError);
  });

/*
!METHOD CHAINING:
Se escriben todos los métodos juntos.Pero también puedo encadenarlos y definir las funciones por fuera del then y el catch y pasarlos como parámetros:*/

miPedidoDePizza.then(manejarPedido).catch(manejarError);


// EJEMPLO:
/*
!PROMISES:

Promises es una librería para mejorar la programación asíncrónica. Las Promises son una representación de tipo first-class de un valor que va a estar disponible en el futuro. Esto también ya existia con otras librerías de terceros.

Funciona como una promesa en la vida real. Algo que todavía no sucedió. O se cumple o no se cumple.

Por lo general son códigos asincrónicos que terminan yendo al callback queue.


 */

function timeout(duration = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

var p = timeout(1000)
  .then(() => { //El punto then es el plan que tenes para el caso de que la promesa se cumpla.
    return timeout(2000);
  })
  .then(() => {
    throw new Error("hmm");
  })
  .catch((err) => { //Si la promesa no se cumple está el plan .catch
    return Promise.all([timeout(100), timeout(200)]);
  });

/* Se puede implementar llamadas recursivas sin tener que agregar un un frame al call stack haciendo que sea segura la ejecución de una función recursiva (sin temer por el stack overflow). */

function factorial(n, acc = 1) {
    'use strict';
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

// Stack overflow in most implementations today,
// but safe on arbitrary inputs in ES6
factorial(100000)


/*
!ENCADENAR PROMESAS:

Es muy común cuando queres definir operaciones asíncronas crear una función que devuelva una promesa asi tu programa espera que esa promesa se complete antes de llamar la función.
*/

function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando ${producto} de forma asíncrona`);
    setTimeout(() => {
      if (producto === `taza`) {
        resolve(`ordenando una taza con el logo de freeCodeCamp`);
      } else {
        reject(`Este producto no está disponible actualmente`);
      }
    }, 2000);
  });
}

  function procesarPedido(respuesta) {
    return new Promise((resolve, reject) => {
      console.log(`Procesando el pedido...`);
      console.log(`La respuesta fue "${respuesta}"`);
      setTimeout(() => {
        resolve(`Gracias por tu compra. Disfruta el pedido`);
      } , 4000);
    })
  }

  //conecto el cumplimiento de la promesa con el proceso de procesar el pedido que es otra promesa y asíncrono.
ordenarProducto(`taza`) // si le pongo algo que no sea taza me devuelve `Este producto no está disponible actualmente`.
  .then(respuesta => {
    console.log(`Respuesta recibida`);
    console.log(respuesta);
    return procesarPedido(respuesta);
  }).then(respuestaProcesada => {
    console.log(respuestaProcesada);
  }).catch(error => {
    console.log(error);
  });

  /* Te devuelve:
  Ordenando taza de forma asíncrona
Respuesta recibida
Procesando el pedido...
La respuesta fue "ordenando una taza con el logo de freeCodeCamp"
Gracias por tu compra. Disfruta el pedido
 */

// Se puede escribir lo anterior de formas más simple con:

//! ASYNC AWAIT:

//! ASYNC AWAIT:
function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando ${producto} de forma asíncrona`);
    setTimeout(() => {
      if (producto === `taza`) {
        resolve(`ordenando una taza con el logo de freeCodeCamp`);
      } else {
        reject(`Este producto no está disponible actualmente`);
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log(`Procesando el pedido...`);
    console.log(`La respuesta fue "${respuesta}"`);
    setTimeout(() => {
      resolve(`Gracias por tu compra. Disfruta el pedido`);
    }, 4000);
  });
}

// ordenarProducto(`lapiz`)
//   .then((respuesta) => {
//     console.log(`Respuesta recibida`);
//     console.log(respuesta);
//     return procesarPedido(respuesta);
//   })
//   .then((respuestaProcesada) => {
//     console.log(respuestaProcesada);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


// Con async await se puede hacer lo mismo que con el .then y .catch de arriba pero con una sintaxis más limpia y parecer como si fuera de modo sincrono:

async function realizarPedido(producto) {
  try {
    const respuesta =  await ordenarProducto(producto); /* te dice que espera que se complete este proceso antes de continuar */
    console.log(`Respuesta recibida`);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada)
  } catch (error) {
    console.log(error);
  }
}

realizarPedido(`taza`);

/* Te devuelve:

Ordenando taza de forma asíncrona
Respuesta recibida
Procesando el pedido...
La respuesta fue "ordenando una taza con el logo de freeCodeCamp"
Gracias por tu compra. Disfruta el pedido
*/

/* Sin los await te devuelve:
Ordenando taza de forma asíncrona
Respuesta recibida
Procesando el pedido...
La respuesta fue "[object Promise]"
Promise { <pending> }

En estos casos no espera a que se complete el proceso antes de continuar por lo que sale desordenado.
*/