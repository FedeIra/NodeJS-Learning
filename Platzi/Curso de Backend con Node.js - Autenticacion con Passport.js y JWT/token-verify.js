const jwt = require('jsonwebtoken');

const secret = 'myCat'; //? esto es lo que va a firmar el token. Debería estar en una variable de ambiente. En el back se guarda en una variable de ambiente y en el front se guarda en el local storage del navegador.
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3Nzc1OTEyMX0.s_9rZXt3C-u7xCkyAz6_qW-JnlN2BrvXF0RY-feYRPE'; //? este token lo obtengo de la base de datos del usuario que se loguea y lo guardo en una variable de sesión o en el local storage del navegador (en el front) o en el header de la request (en el back) para que el usuario pueda acceder a los recursos que le corresponden según su rol (customer, admin, etc) y su id (sub) que es el que identifica al usuario en la base de datos. El token se genera en el back y se envía al front para que el usuario pueda acceder a los recursos que le corresponden según su rol y su id.

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
}; //? devuelve el payload del token que le pasamos como parámetro (token)

const payload = verifyToken(token, secret);

console.log(payload); // { sub: 1, role: 'customer', iat: 1677759121 }
