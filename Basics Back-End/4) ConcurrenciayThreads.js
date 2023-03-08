/*
!THREADS:
Un proceso es la instancia de un programa en ejecución. Un proceso puede ser una instrucción que está lista para ser ejecutada. Una instancia que se está ejecutando. Cada vez que creamos un proceso tieen recursos asignados para él mismo y separados de otros procesos. Un proceso puede crear otros procesos.

Un proceso puede crear múltiples hilos. Un hilo es la secuencia de instrucciones más elemental que puede ser manejada por el planificador de sistemas operativo para ser ejecutado. Es la unidad más elemental. Estos hilos cada uno tiene su espacio para su propia memoria, stack, registros y código. Comparten cierto contexto y recursos con el proceso que los creó y por lo tanto entre ellos.

Los hilos de un mismo proceso pueden compartir recursos como variables. Cada hilo tiene su propio código e instrucciones.

!CONCURRENCIA:
La concurrencia en programación se refiere a la capacidad de un sistema para ejecutar múltiples tareas simultáneamente (HILOS), de manera que parezca que están sucediendo al mismo tiempo cuando en realidad se van alternando la ejecución (arranca en una, corta en la mitad, sigue con la otra, después vuelve a la primera, etc). Es decir, la concurrencia permite que dos o más procesos se ejecuten al mismo tiempo en el mismo sistema, lo que puede mejorar la eficiencia y la velocidad de ejecución del programa. Son concurrentes cuando los procesos de ejecución coexisten. Son secuenciales cuando no coexisten y para que uno inicie debe haber terminado el anterior.

El sistema operativo es el encargo de organizar los hilos utilizando una cola con prioridades.

?El proceso es una instancia de un programa en ejecución

No es necesario que hayan muchos procesadores para que haya concurrencia. Hay concurrencia cuando los procesos conviven, que no es lo mismo que requerir que estén en ejecución. sin embargo, con un procesador se acumula el tiempo de ejecución de cada proceso. Solo se ejecuta un proceso a la vez aunque convivan.

En términos más técnicos, la concurrencia en programación se puede lograr mediante el uso de hilos de ejecución (threads) o procesos separados que se ejecutan en paralelo. Los hilos pueden ser manejados por el sistema operativo o por el lenguaje de programación, y permiten que diferentes partes de un programa se ejecuten simultáneamente. Sin embargo, la concurrencia también puede presentar problemas, como condiciones de carrera y bloqueos, que deben ser manejados cuidadosamente.

Mientras más procesadores más se pueden ejecutar simultaneamente los procesos reduciendo así el tiempo hasta que termina el último. Lo mejor es que si hay 3 procesos y 3 procesadores, cada proceso se ejecute simultaneamente y unicamente en cada procesador.

En resumen, la concurrencia es una técnica utilizada en programación para mejorar el rendimiento y la eficiencia de un programa al permitir la ejecución simultánea de múltiples tareas.

Ejemplo de código no concurrente:*/

function sumar(a, b) {
  return a + b;
}

let resultado = sumar(3, 4);
console.log(resultado);

/* la función sumar realiza una tarea única y sencilla: sumar dos números y devolver el resultado. El código se ejecuta de manera secuencial, es decir, la función se ejecuta en orden y devuelve el resultado antes de que se ejecute la siguiente línea de código. No hay múltiples procesos ejecutándose simultáneamente, por lo que este código no es concurrente. */

/* Ejemplo de codigo concurrente, pero no paralelo:*/

async function obtenerDatos() {
  const respuesta = await fetch('https://ejemplo.com/api/datos');
  const datos = await respuesta.json();
  console.log(datos);
}

obtenerDatos();
console.log('La solicitud se está procesando...');

/* En este caso, la función obtenerDatos realiza una solicitud a una API remota utilizando la función fetch y espera su respuesta mediante el uso de la palabra clave await. Esto permite que el programa continúe con la ejecución de la siguiente línea de código mientras se espera la respuesta de la API.

Sin embargo, aunque la función fetch se ejecuta de manera concurrente, es decir, se envía la solicitud a la API y se espera su respuesta en segundo plano mientras se ejecuta la siguiente línea de código, no se está ejecutando en paralelo con la siguiente línea de código. En otras palabras, la ejecución no se divide en múltiples hilos o procesos que se ejecutan al mismo tiempo, sino que se realiza de manera secuencial en un solo hilo de ejecución. */

/*
?qué es el paralelismo?
Paralelismo implica concurrencia. si varios procesos se ejecutan al mismo tiempo (son paralelos), eso implica que conviven (existen) a la vez. Por tanto son concurrentes. Esto solo puede pasar cuando hay varios nucleos. Ejemplo: dual core, i7

El paralelismo es la capacidad de ejecutar dos o más tareas simultáneamente. El paralelismo es una forma de concurrencia, pero no todas las tareas concurrentes son paralelas. Por ejemplo, si dos procesos se ejecutan en un solo procesador, no son paralelos, aunque sí son concurrentes. Si los 3 procesos se ejcutan en un solo procesador entonces no son paralelos ya que se ejecutan por turnos. Si no coexisten ni siquieran son concurrentes.

Concurrencia no implica paralelismo. Si varios procesos conviven a la vez (son concurrentes), esto no implica que deban ejecutarse a la vez. Por tanto no necesariamente son paralelos.

Ejemplo de codigo concurrente y paralelo:

otra forma de lograr la concurrencia y el paralelismo es mediante el uso de la API Worker y SharedArrayBuffer. La API SharedArrayBuffer permite que múltiples hilos accedan y manipulen un mismo bloque de memoria compartida, mientras que la API Worker permite que se creen múltiples hilos de ejecución.

Primer doc:*/
// Crea un SharedArrayBuffer con espacio para almacenar un número
const buffer = new SharedArrayBuffer(4);

// Crea dos Workers
const worker1 = new Worker('worker.js');
const worker2 = new Worker('worker.js');

// Envía el buffer compartido a ambos Workers
worker1.postMessage(buffer);
worker2.postMessage(buffer);

// Cuando ambos Workers terminan de escribir en el buffer compartido, imprime el resultado
Promise.all([
  new Promise((resolve) => (worker1.onmessage = resolve)),
  new Promise((resolve) => (worker2.onmessage = resolve)),
]).then(([resultado1, resultado2]) => {
  console.log(`La suma de los resultados es: ${resultado1 + resultado2}`);
});

/* Segundo doc: Luego, en el archivo worker.js, podemos definir el código que se ejecutará en los dos Workers:
javascript Copy code */

// Recibe el SharedArrayBuffer desde el hilo principal
self.onmessage = function (evento) {
  const buffer = evento.data;

  // Crea una vista de 32 bits en el SharedArrayBuffer
  const vista = new Int32Array(buffer);

  // Realiza un cálculo complejo en el número almacenado en la vista
  let resultado = 0;
  for (let i = 0; i < vista[0]; i++) {
    resultado += i;
  }

  // Escribe el resultado en la vista
  vista[0] = resultado;

  // Envía el resultado al hilo principal
  self.postMessage(resultado);
};

/* En este ejemplo, creamos un SharedArrayBuffer con espacio para almacenar un solo número. Luego, creamos dos Workers y les enviamos el SharedArrayBuffer. Cada Worker lee el número del buffer, realiza un cálculo complejo en él y escribe el resultado en el buffer compartido. Finalmente, cuando ambos Workers terminan de escribir en el buffer compartido, el hilo principal lee los resultados del buffer compartido y los suma.

Cuando se programa se tiene a pensar que la programación es instantanea. Pero cuando programas un nivel más alto hay cuestión de espacio y tiempo (recursos en memoria RAM y tiempo).

El sistema tiene un espacio y tiempo, y los recursos en memoria pesan. Se nota especialmente cuando es usado por miles de usuarios.

Utilizando programación paralela se pueden aprovechar mejor los recursos del sistema y los procesadores más modernos.
*/

/*

ASINCRONIA: haces una consulta con delay que tarda en devolver el resultado. Si lo haces de manera sincrona espera el resultado para continuar con la aplicación, o utilizar el async y await para evitar ese infierno de callbacks y if's. En el await esperas a los resultados que lleguen mientras continúa ejecutando la aplicación.
*/

/* example of sincronus code: */

function addSync(x, y) {
  return x + y;
}

function addSyncClient(x, y) {
  console.log(`Result: ${addSync(x, y)}`);
}

addSyncClient(2, 3);

/* same example with asyncronus with async await: */

function addAsync(x, y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof x !== 'number' || typeof y !== 'number') {
        return reject(new Error('X and Y must be numbers'));
      }
      resolve(x + y);
    }, 1000);
  });
}

async function addAsyncClient(x, y) {
  try {
    const result = await addAsync(x, y);
    console.log(`Result: ${result}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
