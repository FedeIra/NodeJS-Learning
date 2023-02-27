/*
!MODULOS ÚTILES:
?sharp:
librería para trabajar con imagenes.

*/
const sharp = require('sharp');

sharp('original.png').resize(80).grayscale().toFile('resized.png'); // te convierte la imagen y se agrega a tu carpeta con el nombre que quieras.
