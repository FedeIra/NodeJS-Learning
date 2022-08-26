/*
!PROMESAS:
LA PROMESA EN SÍ:
1) Interfaz qie construye flujos:
2) (.then y .fail)

SU DIFERIDO:
1) Interfaz que controla los flujos:
2) (.reject y .resolve)


Casi todos los módulos de Node.js trabajan con asincronía. Muchas de sus funciones trabajan con callback como último parámetro que a su vez puede recibir uno o más parámetros.

Generalmente el primer argumento del callback es un error, y el segundo argumento es el resultado de la operación.

*/
"use strict";

var fs = require("fs"),
  file = "./assets/nombres.txt",
  newFile = "./assets/nombres-promises-es6.txt",
  promise = new Promise(function (resolve, reject) {
    fs.access(file, fs.F_OK, function (err) {
      return err ? reject(new Error("El archivo no existe")) : resolve(true);
    });
  });

promise
  .then((resolve, reject) => {
    console.log("El archivo existe");
    return new Promise(function (resolve, reject) {
      fs.readFile(file, function (err, data) {
        return err
          ? reject(new Error("El archivo no se puede leer"))
          : resolve(data);
      });
    });
  })
  .then((resolve, reject) => {
    /* en el resolve se guarda lo que devolvió el resolve de la promesa anterior */
    console.log("El archivo se ha leido");
    return new Promise(function (resolve, reject) {
      fs.writeFile(newFile, resolve, function (err) {
        return err
          ? reject(new Error("El archivo no se pudo copiar"))
          : resolve("El archivo se ha copiado");
      });
    });
  })
  .then((resolve, reject) => {
    console.log(resolve);
  })
  .catch((err) => {
    console.log(err.message);
  });
