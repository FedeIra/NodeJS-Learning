/*
!MODULOS ÚTILES:
?moment:
facilita trabajar con fechas.

*/
const moment = require('moment');

let ahora = moment();

console.log(moment);
console.log(ahora); //Moment<2023-02-24T20:58:38-03:00>

console.log(ahora.toString()); //Fri Feb 24 2023 20:58:47 GMT-0300

console.log(ahora.format('DD/MM/YYYY')); //24/02/2023

console.log(ahora.format('DD/MM/YYYY hh:mm:ss')); //24/02/2023 08:58:47

console.log(ahora.format('DD/MM/YYYY hh:mm:ss a')); //24/02/2023 08:58:47 pm
