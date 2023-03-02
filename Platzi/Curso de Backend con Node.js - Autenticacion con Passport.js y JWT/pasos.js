/*
? Autenticación vs. autorización:
? - Autenticación: es el proceso de verificar la identidad de un usuario. Ver si puede o no ingresar de acuerdo a tus credenciales. Le damos un ingreso.
? - Autorización: es el proceso de verificar los permisos de un usuario. Tiene que ver con la gestión de permisos. Bloquear end points de acuerdo al usuario.

Node.js debe manejar ambas de forma independiente.
Para hacer esto vamos a utilizar JSON WEB TOCKEN (JWS). Es una tecnología funciona de modo stateless, quiere decir que no hay una sesión como tal del lado del backend sino que todo va a estar por medio de un token, esto es interesante porque funciona para poder escalar el login del usuario para cuando queramos hacer sistemas distribuidos.
*/

/*
!1) DOCKER Y POSTGRESQL:
*1) Crear carpeta de postgres_data
*2) Crear archivo docker-compose.yml
*3) Crear archivo .env
*4) docker-compose up -d postgres // para levantar docker
*5) docker-compose up -d pgadmin
*6) docker-compose ps // para chequear si está levantado
NAME                                                                IMAGE               COMMAND                  SERVICE             CREATED             STATUS
PORTS
cursodebackendconnodejs-autenticacionconpassportjsyjwt-pgadmin-1    dpage/pgadmin4      "/entrypoint.sh"         pgadmin             22 seconds ago      Up 19 seconds
443/tcp, 0.0.0.0:5050->80/tcp
cursodebackendconnodejs-autenticacionconpassportjsyjwt-postgres-1   postgres:13         "docker-entrypoint.s…"   postgres            12 minutes ago      Up 3 minutes
*6): http://localhost:5050/login?next=%2F // acá está nuestro pgadmin. Correo y pass en el doc de docker-compose. Si accedes a la base datos a través de la web tenes que cerrar la aplicación local de pgAdmin.

*/

/*
!2) MIDDLEWARE DE VERIFICACIÓN
*1) en la carpeta de middleware creo un archivo para manejar las autenticaciones (auth.handler.js)
*2) le importamos la librería boom
*3) creamos una función que se encargue de verificar la api key
*4) exportamos la función
*5) en el archivo index.js importamos la función
*6) en el archivo index.js le pasamos la función como middleware a la ruta que queremos proteger

!3) HASHING DE CONTRASEÑAS:
Hace un hash (encriptar) del password y la guardamos en la base de datos. No se puede guardar en crudo.
*1) npm i bcrypt
*2) hay que trabajar tanto en la creación de usuario (user.schema/user.service) como en la creación de customer/cliente (customer.schema/customer.service
*3) en el archivo user.schema.js importamos bcrypt y metemos función para agarrar la propiedad password y hashearla. No hay que devolver al cliente la password.
*4) mismo paso anterior pero en el customer

*/

/*
!4) LOGIN CON PASSPORT.JS
Hay muchas estrategias distintas. En este caso usamos una básica, passport-local.
*1) npm i passport passport-local
*2) creamos carpetas para autenticación y estrategias
*3) creamos archivo de estrategia local (local.strategy.js) creando una instancia de strategy y la exportamos/importamos en index.js en la carpeta de strategies
*4) agregamos una función al user.service de findByEmail
*5) creamos un archivo para rutas de la autenticación (auth.router)
*6) importar auth.router en el archivo index donde están todas las rutas.
*7) en el archivo index importamos donde está el puerto escuchando importamos el archivo index.js de la carpeta auth

!5 AUTENTICACIÓN CON JWT
JSON Web Token: Permite comprobar y esa comprobación nos da un token o llave con la cual vamos a poder acceder.
Autorización: este es el escenario más común para usar JWT. Una vez que el usuario haya iniciado sesión, cada solicitud posterior incluirá el JWT, lo que le permitirá acceder a rutas, servicios y recursos que están autorizados con ese token. El inicio de sesión único es una función que se utiliza ampliamente con JWT en la actualidad, debido a su pequeña sobrecarga y su capacidad para usarse fácilmente en diferentes dominios o servidores distribuidos.

Esto permite soportar diversos clientes y que sea stateless.

Un JW Token tiene 3 partes: 1) header: nos dice el algoritmio y tipo, 2) payload: viene la info. que vamos a encerrar en el token (sub: sujeto o dueño, name, y iat: fecha), 3) verificación del token que se firma con una palabra clave.

*1) npm install jsonwebtoken
*2) npm install passport-jwt
*3) creamos archivo de estrategia jwt (jwt.strategy.js) en la carpeta de estrategias.
*4) importamos la jwt strategy al index donde guardamos las estrategias de autenticación y le pedimos a passport q la use (passport.use(JwtStrategy);)
*5) vamos a la ruta de login y la modificamos para que se firme el token y se devuelva al cliente los datos del usuario con el token
*6) creamos variable de entorno para el secret en el archivo de config. en la carpeta config. Para asignarle efectivamente una variable de entorno podemos usar keygen.io que genera passwords de forma random (https://keygen.io/) y usamos la WEP 256-bit Key. Generamos key y la ponemos en el .env. Ahora al logear te devuelve un token generado y firmado.
*7) ahora vamos a los routers que queramos para proteger las rutas. Ej: categories.router.js, router.post para que no puedan crear categorías cualquier usuario. Importamos passport en ese archivo, y agregamos el middleware de password.authenticate en la ruta respectiva aclarando la estrategia ("jwt")





*/
