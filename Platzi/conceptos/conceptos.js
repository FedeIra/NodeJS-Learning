/*
?Qué es node.js?
Es un entorno de ejecución de javascript fuera del navegador. O sea, no necesitas una página web para correrlo. Nos permite tener servidores que funciona.

Es concurrente. Aunque sea monohilo, tiene tareas asincronas. Se programa todas las peticiones y las manda de forma asincrona para poder tener muchas conexiones.

Corre sobre el motor v8 que lo transforma a código maquina C++ por lo que funciona más rápido.

Funciona en base a módulos. Todo lo que no sea sintaxis es modulo.

Está orientado a eventos. Hay un bucle de eventos que están funcionando de forma permanente. Cuando suceda esta cosa, se ejecuta mi código.

?Qué es el Eventloop?
Un proceso con un bucle (como un while true) que gestiona, de forma asíncrona, todos los eventos de tu aplicación. Todo lo que recibe se produce aparte por lo que no se bloquea. Es un circulo o bucle que va dando vueltas.

Los eventos llegan desde del event queue. Cada línea de tu código genera eventos. Eso se va a encolar en la cola de eventos que luego van al event loop. Los resuelve de forma instantanea o si requieren tiempo lo manda al fondo para no bloquear generando hilos. Te permite ejecutar en paralelo distintas tareas. Lo hace muy responsivo.

?Ventajas y desventajas de multiples hilos?
*/

console.log('Hola mundo!');

// solo hilo que arranca y termina

let i = 0;

setInterval(function () {
  console.log(i);
  i++;
}, 1000);
// Al ser esta línea asincrona la ejecuta al final.

console.log('segunda instrucción!');
// acá no termina nunca. El problema es si al ser mono hilo, aparece un error que detiene por completo nuestro proceso. Tenemos que andar muy pendientes de atajar errores. Por eso es importante estar pendiente de todo lo que pasa en el código.

/*
?Como meter info. desde afuera de nuestro entorno hacia adentro?
Para eso están las variables de entorno.
*/

let saludo = process.env.NOMBRE || 'Federico'; // para que funcione sin que la puedan ver la tengo que definir por .env

console.log('Hola' + saludo);

// !NODEMON
/* 
?Qué es nodemon?:
Es un paquete que nos permite reiniciar el servidor cada vez que guardamos un archivo. Es como un watch que se encarga de eso. Es un paquete que se instala de forma global.

Sirve mucho para cuando está en desarrollo.

?Cómo instalarlo?
npm install -g nodemon

?Cómo usarlo?
nodemon nombreArchivo.js en la terminal.

!PM2:
Para cuando está en producción es parecido a nodemon, pero con más funciones.

?Qué es PM2?
Es un gestor de procesos de node.js. Es un demonio que se encarga de que tu aplicación se ejecute todo el tiempo, incluso si hay un error. Es un proceso que se ejecuta en segundo plano y se encarga de que tu aplicación se ejecute todo el tiempo, incluso si hay un error.

?Cómo instalarlo?
npm install -g pm2

?Cómo usarlo?
pm2 start nombreArchivo.js

pm2 status: te muestra todas las aplicaciones que están corriendo.

?Cómo ver los procesos que están corriendo?
pm2 list

?Cómo ver los logs?
pm2 logs

?Cómo detener un proceso?
pm2 stop nombreArchivo.js

*/
