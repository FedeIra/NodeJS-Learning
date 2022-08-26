var fs = require("fs");
console.log("\nAbriendo Archivo...");

function imprimir(error, content) {
  console.log(content);
}

var content = fs.readFile("1-archivo.txt", "utf8", imprimir);

console.log("\nHaciendo otra cosa\n");
console.log(process.uptime());
