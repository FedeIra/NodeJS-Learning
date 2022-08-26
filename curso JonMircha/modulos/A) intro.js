/*
!NODE JS
Es el motor sobre el cual vamos a estar ejecutando el back end. Ej: los paquetes npm. Es un motor de ejecución de javascript. En especial el V8. NO es un framework, ES UN ENTORNO DE PROGRAMACIÓN.

Es asíncrono y orientado a eventos. Se ejecutan a través de dispositivos distribuidos.

!V8:
Es open source. Aplica ES6, está escrito en C++. Corre por sí solo. El motor 8 lo puedo implementar en cualquier código que yo quiera.

Node a su vez trae otro conceptos como:
!LIBUV
Se puede usar a través de mods.*/

/*
Cómo se ejecuta un archivo de node.js? */
// ejecutando el archivo:
// $node indexedDB.js
// $1

//index.js
const hola = 1;
console.log(hola);

const a = "hola";
const b = "chau";

function log(a, b) {
  console.log(a, b);
}
console.log(a, b);
console.log("fede", "irarrazaval");
console.log("Hola, estamos en el modulo", "M3");

/*
!MODULOS:
No es más que un bloque de código que busca solucionar un problema. En node vamos a tener que trabajar con require y module.exports. Si queremos trabajar con otros tipos se puede hacer, pero este es el recomendado. Ejemplo: */

var util = require("util"); // no usamos ./ porque es un modulo
var nombre = "Toni";
var saludo = util.format("Hola, %s", nombre);
util.log(saludo);

/* Gestor de paquetes:
Aquel store donde podemos buscar modulos que nos sirvan para el desarrollo de nuestro módulo. Los más conocidas son IAR y NPM. Son manejadores de paquetes.

Con npm init empezamos a configurar nuestro paquete. Creamos nuestro paquete json.

Con npm init -y le decís que todo a si entonces se intala de una.*/

/* Comandos más usados: */
// npm install--save{ nombrePaquete } Hoy en día no es necesario el --save
// npm install - g{nombre paquete }  Instala a nivel global, para nuestra computadora entero. No es recomendable.
// npm update
// npm audit
// npm start
// npm test
// npm run{ nombreScript} Si definimos un script personal y propio lo ejecutamos así. Solamente el test y start no llevan run antes.
// npm -h Te dice los distintos comandos de node.js y como ejecutarlos.

/*
!FORMAS DE EXPORTAR:

1) Una forma:*/
//A)Exporta:
function en() {
  console.log("Hello");
}
module.exports = e;
//B)Importa:
var saludoEn = require("./en.js");

//2) Otra forma
//A)Exporta:
let es = function () {
  console.log("Hola");
};
module.exports = es;
//B)Importa:
var saludoEs = require("./es.js");

//3) Otra forma:
//A)Exporta:
const portu = () => "Du Brasil, banana";
module.export = portu;
//B)Importa:
var saludoPortu = require("./portu.js");

//4) Otra forma:
//A)Exporta:
module.exports = function italian() {
  console.log("Paparitse papariri! Luigi!");
};
//B)Importa:
var saludoItalian = require("./italian.js");

/*!Solo se puede un module.export por archivo.
Si quiero importar de a varios hago lo siguiente: */

//EXPORTA:
module.exports = {
  en: saludoEn,
  es: saludoEs,
  portu: saludoPortu,
  italian: saludoItalian,
};

// IMPORTA Y EJECUTA EN OTRO ARCHIVO:
let saludos = require("./saludos.js");
console.log(saludos.en());

// Export yub, para leer archivos:
let fs = require("fs"); //fs representa file system y sirve para leer archivos. Previamente hay que hacer npm install fs. Luego, para usarlo:
//readFileSync => leer archivos de forma sincrónica, por lo tanto se para toda la ejecución hasta que no se termino de leer no se avanza.
let dada = fs.readFileSync(
  "./idiomas/en.js",
  "utf-8" /* el utf son los encodings */
); /* lee el archivo y lo aloja en data */
console.log(data); /*  */
//readFile => lee el archivo de forma asincrónica, cuando termine de leerse se ejecuta el callback.
fs.readFile("./idiomas/en.js", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
}); /* el último parámetro es el callback que recibe dos parámetros. */

/*
!VARIABLE PROCESS:
Es una variable que va a tener conocimiento sobre lo que estemos haciendo en nuesta terminal. Si escribo cualquier tipo de valor puedo leerlo con stdin y stdout. El segundo es como un console.log de bash. */
