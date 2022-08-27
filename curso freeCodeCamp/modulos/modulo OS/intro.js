/*
!MODULO OS: operating system
Nos permite obter información sobre el sistema operativo que estamos usando.

No está disponible de forma global por lo que lo tenemos que importar mediante require:
*/
const os = require('os');

console.log(os.type()); // Windows_NT  nos devuelve el tipo de sistema operativo que estamos usando

console.log(os.homedir()); // C:\Users\Usuario nos devuelve la ruta de la carpeta home del usuario que estamos usando

console.log(os.userInfo()); // nos devuelve información sobre el usuario que estamos usando

console.log(os.hostname()); // nos devuelve el nombre del host que estamos usando

console.log(os.platform()); // nos devuelve el tipo de plataforma que estamos usando

console.log(os.arch()); // nos devuelve el tipo de arquitectura que estamos usando

console.log(os.release()); // nos devuelve la versión del sistema operativo que estamos usando

console.log(os.uptime()); // nos devuelve el tiempo que el sistema está ejecutando

console.log(os.loadavg()); // nos devuelve la carga media de los procesadores

console.log(os.totalmem()); // nos devuelve la cantidad de memoria total que tiene el sistema

console.log(os.freemem()); // nos devuelve la cantidad de memoria libre que tiene el sistema

console.log(os.cpus()); // nos devuelve la información de los procesadores que tiene el sistema

console.log(os.networkInterfaces()); // nos devuelve la información de las interfaces de red que tiene el sistema

console.log(os.EOL); // nos devuelve el caracter de fin de línea que usamos en el sistema
