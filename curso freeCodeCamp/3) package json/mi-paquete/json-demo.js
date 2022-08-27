//!IMPORTAR JSON A JAVASCRIPT
const curso = require('./curso.json');

console.log(curso); /*{ titulo: 'aprende node.js',
  numVistas: 2345235,
  numLikes: 123,
  temas: [ 'javascript', 'nodeJs' ],
  publico: true }  */

console.log(typeof curso); // object

console.log(curso.temas); // [ 'javascript', 'nodeJs' ]

//!DE JAVASCRIPT A JSON
let infoCurso = {
  titulo: 'aprende node.js',
  numVistas: 2345235,
  numLikes: 123,
  temas: ['javascript', 'nodeJs'],
  publico: true,
};

// info to json
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON); /*
{"titulo":"aprende node.js",
"numVistas":2345235,
"numLikes":123,
"temas":["javascript","nodeJs"],
"publico":true} */

console.log(typeof infoCursoJSON); //string. Pasamos de un objeto a una cadena de cáracteres.

console.log(infoCursoJSON.temas); // undefined

//! JSON A JAVASCRIPT
let infoCursoJAVASCRIPT = JSON.parse(infoCursoJSON);

console.log(infoCursoJAVASCRIPT); /*
{titulo: 'aprende node.js',
numVistas: 2345235,
numLikes: 123,
temas: [ 'javascript', 'nodeJs' ],
publico: true} */

console.log(typeof infoCursoJAVASCRIPT); //object
console.log(infoCursoJAVASCRIPT.temas); // [ 'javascript', 'nodeJs' ]
