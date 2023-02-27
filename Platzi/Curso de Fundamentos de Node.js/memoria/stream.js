/*
!STREAMS:
Los buffers se vuelven útiles en los streams. Los streams son los pases de datos de un lugar a otro.

Podría decirse que un Stream es el proceso de ir consumiendo datos al tiempo en que se reciben. Por ejemplo, cuando vemos un video en Youtube estamos consumiendo datos por medio de streaming (readable stream, porque solo podemos ver los videos mas no editarlos) ya que lo vemos al mismo tiempo en que este se está descargando. de lo contrario habría que esperar a que se descargue el video por completo para poder verlo.

buffer
Si en el caso anterior, mientras vemos el video, fallara el internet, así sea por un segundo, la reproducción se pararía instantáneamente. Pero sabemos que en realidad no es así, el video continúa reproduciéndose por un tiempo mas. Esto es gracias a la implementación de un buffer el cuál es un espacio en memoria ram en donde la información proveniente del servidor llega por fragmentos (chunks), para luego ser consumido, y como ese almacenamiento de datos en el buffer se hace a bajo nivel, de forma binaria, el proceso es mucho mas rápido de lo que se consume. Es por eso que cuando reproducimos un video en Youtube vemos que este se carga mas rápido. (dependiendo del ancho de banda claro está)

*/

const fs = require('fs');

let data = 'Hola';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.on('data', (chunk) => {
  console.log(chunk); //<Buffer 53 6f 79 0d 0a 75 6e 0d 0a 61 72 63 68 69 76 6f 0d 0a 71 75 65 0d 0a 76 61 6d 6f 73 0d 0a 61 0d 0a 6c 65 65 72 0d 0a>
  console.log(chunk.toString());
  readableStream.setEncoding('UTF8'); //Soy un archivo que vamos a leer;
  data += chunk; // le añadimos data
});

// UTF8: UTF-8 (Unicode Transformation Format - 8 bits) es un esquema de codificación de caracteres de longitud variable utilizado para representar caracteres Unicode. Unicode es un conjunto de caracteres universal que incluye letras, números, símbolos y caracteres de escritura de todo el mundo.

readableStream.on('end', () => {
  console.log(data); //Soy un archivo que vamos a leer;
}); // Para leer archivos muy grandes sin que se nos colapse la memoria RAM.
//HolaSoy
// un
// archivo
// que
// vamos
// a
// leer

const fs = require('fs');

let data2 = 'Hola';

let readableStream2 = fs.createReadStream(__dirname + '/input.txt');

readableStream2.on('data', (chunk) => {
  console.log(chunk);
  console.log(chunk.toString());
  readableStream2.setEncoding('UTF8');
  data2 += chunk;
});

process.stdout.write('Hola'); //acá escribimos en el buffer de la salida del sistema
process.stdout.write('que');
process.stdout.write('tal');
//Holaquetal<Buffer 53 6f 79 0d 0a 75 6e 0d 0a 61 72 63 68 69 76 6f 0d 0a 71 75 65 0d 0a 76 61 6d 6f 73 0d 0a 61 0d 0a 6c 65 65 72 0d 0a>
//process.stdout ya es un buffer de escritura

// ----------------------------------------------------
/* como podemos hacer para crear un buffer intermedia que reciba, modifique y escriba un buffer: */

const fs = require('fs'); //?fs: es un módulo nativo de Node.js que nos permite acceder a las funciones del sistema de archivos de la computadora.

const util = require('util'); //?util: es un módulo nativo de Node.js que nos permite acceder a funciones de utilidad que no están disponibles en el lenguaje de programación JavaScript.

const stream = require('stream'); //?stream: es un módulo nativo de Node.js que nos permite acceder a funciones de utilidad para trabajar con streams.

//?Los streams son objetos que nos permiten leer datos de un origen y escribirlos en un destino. Los streams son muy útiles cuando tenemos que leer o escribir datos de un archivo o de una red.

let data3 = '';

let readableStream3 = fs.createReadStream(__dirname + '/input.txt'); //?createReadStream: es un método que nos permite crear un stream de lectura a partir de un archivo.

readableStream3.setEncoding('UTF8'); //?setEncoding: es un método que nos permite establecer el tipo de codificación de caracteres que vamos a utilizar para leer el archivo.

const Transform = stream.Transform; //?Transform: es una clase que nos permite crear un stream de transformación.

const Mayus = () => {
  Transform.call(this); //?call: es un método que nos permite llamar a una función definida en otro objeto.
};
util.inherits(Mayus, Transform); //?inherits: es un método que nos permite heredar de una clase.

Mayus.prototype._transform = (chunk, codif, cb) => {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayus = new Mayus(); //?new: es un operador que nos permite crear un nuevo objeto a partir de una clase.

readableStream
  .pipe(mayus) //?pipe: es un método que nos permite conectar un stream de lectura con un stream de escritura.
  .pipe(process.stdout); //?process.stdout: es un stream de escritura que nos permite escribir datos en la salida estándar del sistema.
/* con esto leemos nuestro archivo, lo pasamos a mayuscula y lo sacamos del sistema*/
