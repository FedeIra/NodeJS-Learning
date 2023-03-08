/*
node.js
mongoDB

Es para administrar perfiles. A través de las API's podamos agregar, eliminar, actualizar perfiles, registrarnos y hacer login.

Identificar qué funciona mal y arreglarlo. El desarrollador en el readme puso qué hay que solucionar.

Está escrito en forma de monorepo.

Para arrancar el back(api) tengo que ejecutar npm start --workspace=api
En el README están todos los pasos para levantar el servidor.

Tenemos varios end points:
POST sign up (loclahost3000/api/v1/sign-up)
POST login (loclahost3000/api/v1/login)
GET profile (loclahost3000/api/v1/profile)
PUT profile (loclahost3000/api/v1/profile)
DELETE profile (loclahost3000/api/v1/profile)

Nada está funcionando. Llega vacío.

El sign up sí está funcionando:
{
  "username": "platzi",
  "password": "1234567"
}

Hay validación de contraseña, pero en el login te devuelve un placeholder en lugar del jwt.

Hay un problema de seguridad muy grave relacionado a los passwords.

1 TAREA: Ver inconveniente en los passwords y solucionarlo.
Luego el resto.
*/

/*
!PASOS:
mongod y npm start // http://localhost:3000/
*1) instale las dependencias y conecté la base de datos
*2) instalé el paquete de bcrypt
*3) en la ruta de creación de usuario importé bcrypt y hashie la contraseña para que se guardé hasheada en la base de datos.
*4) cree un servicio para el sign up y un middleware (validator handler) junto con esquema a validar) para validar errores de modo de modularizar.
*/
