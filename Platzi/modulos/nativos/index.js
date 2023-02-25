/*
Cuando trabajamos con modulos nativos hay que instalar el nodegyp:  npm i -g node-gyp

Permite compilar modulos nativos en node.

Es un modulo global.
*/

const miAddon = require('./build/Release/addon');

console.log(miAddon); // { hola: [Function: hola] } Estoy usando una función del archivo hola.cc

console.log(miAddon.hola()); // mundo
