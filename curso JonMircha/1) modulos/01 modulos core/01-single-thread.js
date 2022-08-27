/*
!Single Thread
Es el modulo de process que pertenece a la clase Event Emitter
Es la forma en que node ejecuta las cosas.

*/

function singleThread() {
  console.log("---------------------------------------------");
  console.log("         EL PROCESO DE NODE.JS         ");
  console.log("Id del proceso ........... " + process.pid);
  console.log("Título.................... " + process.title);
  console.log("Directorio de Node........ " + process.execPath);
  console.log("Directorio Actual......... " + process.cwd());
  console.log("Versión de Node........... " + process.version);
  console.log("Versiones Dependencias.... " + process.versions);
  console.log("Plataforma (S.O.)......... " + process.platform);
  console.log("Arquitectura (S.O.)....... " + process.arch);
  console.log("Tiempo activo de Node..... " + process.uptime());
  console.log("Argumentos del proceso.... " + process.argv);
  console.log("---------------------------------------------");

  process.argv[2] = "hola";
  process.argv[3] = 4; /* al ser un arreglo le puedo agregar otros elementos. E incluso recorrerlo con un for: */

  for (const key in process.argv) {
    console.log(process.argv[key]);
  }
}

singleThread();

/*
---------------------------------------------
         EL PROCESO DE NODE.JS
Id del proceso ........... 11904
Título.................... C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe
Directorio de Node........ C:\Program Files\nodejs\node.exe
Directorio Actual......... C:\Users\Usuario\Desktop\Programacion\NodeJS-Learning\boilerplate-npm\summary\Curso John Mircha\01 modulos core
Versión de Node........... v16.14.2
Versiones Dependencias.... [object Object]
Plataforma (S.O.)......... win32
Arquitectura (S.O.)....... x64
Tiempo activo de Node..... 0.0672402
Argumentos del proceso.... C:\Program Files\nodejs\node.exe,C:\Users\Usuario\Desktop\Programacion\NodeJS-Learning\boilerplate-npm\summary\Curso John Mircha\01 modulos core\01-single-thread.js
---------------------------------------------
*/
