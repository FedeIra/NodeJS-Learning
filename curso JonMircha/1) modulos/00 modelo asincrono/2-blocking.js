// De modo sincrono
var fs = require("fs"); /* require permite requerir un módulo. Fs permite tener acceso a los archivos del sistema. */
console.log("\nAbriendo Archivo...");

var content = fs.readFileSync(
  "1-archivo.txt",
  "utf8"
); /* le paso la ruta del archivo y la codificación */
console.log(content);

console.log("\nHaciendo otra cosa\n");
console.log(process.uptime());
