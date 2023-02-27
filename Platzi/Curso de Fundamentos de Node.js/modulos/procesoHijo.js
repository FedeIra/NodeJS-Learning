/*
!PROCESOS:
Node.js puede ejecutar varios procesos simultaneamente.

Un proceso es algo que se ejecuta y termina. Como el proceso de node en si mismo.

Para eso está la librería child.process
*/

// ? exec:

const { exec } = require('child_process');

/*
Es lo equivalente al siguente código. Estamos destructurando:
const exec = require('child_process').exec;

Es muy útil si queremos acceder a más de una propiedad de nuestro child_process
*/

// el linux es exec('ls -la'...) , en windows es dir:
exec('dir', (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});

// Me tira todos mis documentos en la carpeta:

// 02/24/2023  03:54 PM    <DIR>          .
// 02/24/2023  11:55 AM    <DIR>          ..
// 02/24/2023  12:59 PM                27 archivo.txt
// 02/24/2023  01:43 PM             2,740 consola.js
// 02/24/2023  03:54 PM             1,267 errores.js
// 02/24/2023  01:02 PM             1,005 fs.js
// 02/24/2023  12:30 PM             2,043 globales.js
// 02/24/2023  03:54 PM               207 procesoHijo.js
// 02/24/2023  04:00 PM               436 tests.js
//                7 File(s)          7,725 bytes
//                2 Dir(s)  186,763,972,608 bytes free

const { exec } = require('child_process');

// Con esto podemos acceder y ejecutar el archivo que queramos, ejemplo:
exec('node consola.js', (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});

// Con exec puedo traear cualquier código y trabajar con el.

// ? spawn:
const { exec, spawn } = require('child_process');

/*
Pero si tengo un proceso más complejo, en lugar de exec se usa SPAWN
*/

// let proceso = spawn('ls', ['-la']);
/* same line but for windows: */
let proceso = spawn('dir', [], { shell: true });

console.log(proceso); // te imprime el proceso
console.log(proceso.pid); // 54252 id del proceso
console.log(proceso.connected); // false

// como prueba de que node está orientada a eventos:
proceso.stdout.on('data', function (dato) {
  console.log(dato.toString());
});

// para saber cuándo termina el proceso?
proceso.on('exit', function () {
  console.log('El proceso terminó');
  console.log('¿Está muerto?');
  console.log(proceso.killed);
});

// El proceso terminó
// console.log('¿Está muerto?');
// console.log(process.killed);
