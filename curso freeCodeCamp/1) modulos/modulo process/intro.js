/*
!MODULO PROCESS
Provee información sobre los procesos que está ejecutando node. Puede también tener cierto control sobre los procesos que está ejecutando.
Es un modulo built in y está disponible en todos los sistemas operativos.
*/

console.log(process); // te devuelve miles de funciones de process

console.log(process.env); // describe el ambiente de aplicación del programa.

/* Nos permite acceder a los argumentos que se pasan a la terminal */

console.log(process.argv); // nos devuelve un array con los argumentos que se pasan a la terminal

/*
[ 'C:\\Program Files\\nodejs\\node.exe',
  'c:\\Users\\Usuario\\.vscode\\extensions\\wallabyjs.quokka-vscode-1.0.498\\dist\\wallaby\\server.js',
  'runner',
  '0',
  '55967',
  'quokka@1.0.0',
  '',
  'C:\\Users\\Usuario\\Desktop\\Programacion\\NodeJS-Learning\\node_modules',
  'quokka_fake_path\\original',
  '',
  '',
  '{"inline":{"depth":5,"elements":5000},"values":{"default":{"stringLength":200},"autoExpand":{"elements":5000,"stringLength":8192,"depth":10}}}' ]
   */

// Otras funcionalidades:

console.log(process.argv[7]);

for (let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}

console.log(process.cwd()); // nos devuelve la ruta actual del programa

console.log(process.execPath); // nos devuelve la ruta del ejecutable del programa

console.log(process.version); // nos devuelve la versión del programa

console.log(process.versions); // nos devuelve las versiones de los modulos que estamos usando

console.log(process.arch); // nos devuelve el tipo de arquitectura del programa

console.log(process.platform); // nos devuelve el tipo de plataforma del programa

console.log(process.memoryUsage()); // nos devuelve información sobre la memoria usada por el programa

console.log(process.uptime()); // nos devuelve el tiempo que el programa está ejecutando

process.on('exit', function (code) {
  console.log('El programa se cerrará con código: ' + code);
});

process.on('uncaughtException', function (err) {
  console.log('Se ha producido un error: ' + err);
});

process.on('unhandledRejection', function (err) {
  console.log('Se ha producido un error: ' + err);
});

process.on('warning', function (warning) {
  console.log('Se ha producido un warning: ' + warning);
});

process.on('disconnect', function () {
  console.log('Se ha desconectado el programa');
});

process.on('SIGINT', function () {
  console.log('Se ha recibido una señal SIGINT');
});
