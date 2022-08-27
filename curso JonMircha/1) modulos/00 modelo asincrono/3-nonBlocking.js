// De modo sincrono
var fs = require("fs");
console.log("\nAbriendo Archivo...");

var content = fs.readFile("1-archivo.txt", "utf8", function (error, content) {
  console.log(content);
}); /* en el código no bloqueante el nombre pasa a ser readFile, y recibe un parámetro adicional que es una función. Es una función anónima de tipo callback que recibe dos parámetros a su vez. */

console.log("\nHaciendo otra cosa\n");
console.log(process.uptime());

/*
RESPUESTA ASINCRONA!!:
PS C:\Users\Usuario\Desktop\Programacion\NodeJS-Learning\boilerplate-npm\summary\Curso John Mircha\00 modelo asincrono> node 3-nonBlocking.js

Abriendo Archivo...

Haciendo otra cosa
0.0492211 DEMORA UN POCO MENOS QUE EN EL CÓDIGO BLOQUEANTE QUE ES SINCRONO. LO IMPORTANTE ES EL ORDEN EN QUE LOS EJECUTA.
Hola Fede, esto es un archivo para q lo lea node.
 */
