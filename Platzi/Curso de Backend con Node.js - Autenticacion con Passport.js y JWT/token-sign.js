const jwt = require('jsonwebtoken');

const secret = 'myCat'; //? esto es lo que va a firmar el token. Debería estar en una variable de ambiente.

const payload = {
  sub: 1, // forma en la que identificamos al usuario
  role: 'customer', // puedo agregar los valores que quuieran, pero el q tiene q estar si o si es el sub. NO HAY q guardar información sensible en el payload
};

const signToken = (payload, secret) => {
  return jwt.sign(payload, secret); //? devuelve el token firmado con la palabra clave que le pasamos como parámetro (secret)
};

const token = signToken(payload, secret); //?se genera el token que tiene una expiración de 1 hora por defecto (3600 segundos). Refresh: se genera un token que tiene una expiración de 1 semana (604800 segundos). El refresh token se guarda en la base de datos del usuario y se envía al front. Cuando el token expira, el usuario hace un request al back con el refresh token y el back le devuelve un nuevo token y un nuevo refresh token.
console.log(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3Nzc1OTEyMX0.s_9rZXt3C-u7xCkyAz6_qW-JnlN2BrvXF0RY-feYRPE
