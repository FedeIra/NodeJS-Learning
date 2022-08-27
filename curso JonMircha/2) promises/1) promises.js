/*
!PROMISES:

!Crea una promesa de JavaScript:
Se utiliza para hacer una promesa de que harás algo, habitualmente de forma asíncrona.

Promise es una función constructora, así que tu necesitas usar la palabra clave new para crear una.

Recibe una función como su argumento, con dos parámetros: resolve y reject.
*/
const myPromise = new Promise((resolve, reject) => {});

//Crea una nueva promesa llamada makeServerRequest. Pásale una función con parámetros resolve y reject al constructor:

const makeServerRequest = new Promise((resolve, reject) => {});

console.log(makeServerRequest); // Promise { <pending> }

/*
!Cumpleta una promesa con "resolve" y "reject"
Una promesa tiene tres estados: pending, fulfilled, y rejected.

Los parámetros resolve y reject enviados a "promise" como argumentos, son utilizados para hacer lo siguiente. resolve se utiliza cuando quieres que tu promesa tenga éxito, y reject se usa cuando quieres que falle.
*/

// const myPromise = new Promise((resolve, reject) => {
//   if(condition here) {
//     resolve("Promise was fulfilled");
//   } else {
//     reject("Promise was rejected");
//   }
// });

/* El argumento a menudo puede ser un objeto del cual utilizarás datos que mostrarás en tu sitio web o en otro lugar.*/

const makeServerRequest2 = new Promise((resolve, reject) => {
  // responseFromServer representa una respuesta de un servidor
  let responseFromServer;

  if (responseFromServer) {
    // Cambia esta línea
    resolve("We got the data");
  } else {
    // Cambia esta línea
    reject("Data not received");
  }
});

/*
!Maneja una promesa cumplida usando then
Cuando tu haces una petición a un servidor, toma algo de tiempo, después de que termina, normalmente quieres hacer algo con la respuesta del servidor. Esto se puede lograr utilizando el método then.

El método then, se ejecuta inmediatamente después de que tu promesa se cumple con resolve.
*/

myPromise.then((result) => {});

// Añade el método then a tu promesa. Usa result como parámetro de tu función callback, asimismo imprime result en la consola.

const makeServerRequest3 = new Promise((resolve, reject) => {
  // responseFromServer es establecido a true para representar una respuesta satisfactoria del servidor
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});

/*
!Maneja una promesa rechazada usando catch
catch es el método utilizado cuando tu promesa ha sido rechazada. Se ejecuta inmediatamente, después de que se llama al método reject de una promesa.
*/

myPromise.catch((error) => {});

/* error es el argumento pasado al método reject. */

const makeServerRequest4 = new Promise((resolve, reject) => {
  // responseFromServer es establecido a false para representar una respuesta no satisfactoria del servidor
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then((result) => {
  console.log(result);
}); // "We got the data"

makeServerRequest.catch((error) => {
  console.log(error);
}); // "Data not received"

// TODO JUNTO:
const makeServerRequest5 = new Promise((resolve, reject) => {
  // responseFromServer es establecido a true para representar una respuesta satisfactoria del servidor
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
