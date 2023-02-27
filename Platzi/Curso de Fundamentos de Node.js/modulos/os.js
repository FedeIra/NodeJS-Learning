const os = require('os');

/* con esto accedemos a toda la info. de nuestro sistema operativo */

console.log(os.arch()); // x64

/* dependiendo de tu máquina depende el tipo de arquitectura.

Si trabajamos con modulos nativos se puede hacer la compilación como quieras dependiendo de la arquitectura de tu sistema*/

console.log(os.platform()); //win32

/* te dice la plataforma sobre la que estás corriendo tu aplicación */

console.log(os.cpus());

/*
{
    model: 'Intel(R) Core(TM) i7-8750H CPU @ 2.20GHz',
    speed: 2208,
    times: { user: 1348218, nice: 0, sys: 1126640, idle: 32918890, irq: 8140 }
  },
*/

console.log(os.cpus().length); // te dice cuántos cores. O sea, sabes cuántos procesos podes levantar
//12

console.log(os.constants); // te vienen todos los errores y señales del sistema

console.log(os.freemem()); //te dice la memoria libre que tenemos
//6004133888

const SIZE = 1024;

const kb = (bytes) => {
  return bytes / SIZE;
};

const mb = (bytes) => {
  return kb(bytes) / SIZE;
};

const gb = (bytes) => {
  return mb(bytes) / SIZE;
};

console.log(os.freemem()); //te dice la memoria libre que tenemos: 6004133888

console.log(kb(os.freemem())); // 5829352
console.log(mb(os.freemem())); // 5692.02734375
console.log(gb(os.freemem())); // 5.5572052001953125

console.log(gb(os.totalmem())); //te dice cuanta memoria total tenes: 15.925132751464844

console.log(os.homedir()); // te dice el directorio home del usuario: C:\Users\Usuario

console.log(os.tmpdir()); //directorio para archivos temporales: C:\Users\Usuario\AppData\Local\Temp

console.log(os.hostname()); //DESKTOP-EG36JFA

console.log(os.networkInterfaces()); //te dice las interfaces de red que tiene tu sistema
