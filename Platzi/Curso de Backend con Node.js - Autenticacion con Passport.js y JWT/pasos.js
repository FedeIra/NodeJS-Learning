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
!4) LOGIN CON PASSPORT LOCAL
Hay muchas estrategias distintas. En este caso usamos una básica, passport-local.
La librería Passport en Node.js es un middleware que proporciona una autenticación completa y fácil de usar para aplicaciones web. Passport permite a los desarrolladores autenticar a los usuarios utilizando diversas estrategias de autenticación, como la autenticación local (nombre de usuario y contraseña), la autenticación mediante redes sociales (por ejemplo, Facebook, Twitter, Google) y la autenticación mediante proveedores de identidad (por ejemplo, OAuth, OpenID).

La librería Passport simplifica el proceso de autenticación al proporcionar una interfaz de programación de aplicaciones (API) unificada que se puede utilizar con cualquier estrategia de autenticación que desee utilizar. Passport también facilita la implementación de funciones de autorización, lo que permite a los desarrolladores restringir el acceso a ciertas partes de una aplicación web solo a usuarios autenticados.

En resumen, la librería Passport en Node.js se utiliza para proporcionar una autenticación y autorización sencillas y flexibles en aplicaciones web.
*1) npm i passport passport-local
*2) creamos carpetas para autenticación y estrategias
*3) creamos archivo de estrategia local (local.strategy.js) creando una instancia de strategy y la exportamos/importamos en index.js en la carpeta de strategies
*4) agregamos una función al user.service de findByEmail
*5) creamos un archivo para rutas de la autenticación (auth.router)
*6) importar auth.router en el archivo index donde están todas las rutas.
*7) en el archivo index importamos donde está el puerto escuchando importamos el archivo index.js de la carpeta auth

? AUTENTICACIÓN CON JWT
JSON Web Token: Permite comprobar y esa comprobación nos da un token o llave con la cual vamos a poder acceder.
Autorización: este es el escenario más común para usar JWT. Una vez que el usuario haya iniciado sesión, cada solicitud posterior incluirá el JWT, lo que le permitirá acceder a rutas, servicios y recursos que están autorizados con ese token. El inicio de sesión único es una función que se utiliza ampliamente con JWT en la actualidad, debido a su pequeña sobrecarga y su capacidad para usarse fácilmente en diferentes dominios o servidores distribuidos.

Esto permite soportar diversos clientes y que sea stateless.

Un JW Token tiene 3 partes: 1) header: nos dice el algoritmio y tipo, 2) payload: viene la info. que vamos a encerrar en el token (sub: sujeto o dueño, name, y iat: fecha), 3) verificación del token que se firma con una palabra clave.

!5) GENERAR TOKEN CON JSONWEBTOKEN:
*1) npm install jsonwebtoken
*2) vamos a la ruta de login y la modificamos para que se firme el token y se devuelva al cliente los datos del usuario con el token
*3) creamos variable de entorno para el secret en el archivo de config. en la carpeta config. Para asignarle efectivamente una variable de entorno podemos usar keygen.io que genera passwords de forma random (https://keygen.io/) y usamos la WEP 256-bit Key. Generamos key y la ponemos en el .env. Ahora al logear te devuelve un token generado y firmado.

!6) PROTEGER RUTAS CON PASSPORT-JWT:
*1) npm install passport-jwt
*2) creamos archivo de estrategia jwt (jwt.strategy.js) en la carpeta de estrategias.
*3) Se extrae el token del header que llega de la petición del cliente y lo verifica con nuestro secreto.
*3) importamos la jwt strategy al index donde guardamos las estrategias de autenticación y le pedimos a passport q la use (passport.use(JwtStrategy);)
*4) ahora vamos a los routers que queramos para proteger las rutas. Ej: categories.router.js, router.post para que no puedan crear categorías cualquier usuario. Importamos passport en ese archivo, y agregamos el middleware de password.authenticate en la ruta respectiva aclarando la estrategia ("jwt")
? Para probarlo en insomnia, en el header de la petición, en la pestaña de Authorization, en el campo de Type, seleccionamos Bearer Token y en el campo de Token, pegamos el token que nos devuelve el login. De lo contrario, nos devuelve un 401 (unauthorized) porque no tenemos el token.
*5) Hay que proteger todas las rutas que requieran usuario logeado.


RESUMEN DE PASSPORT-JWT:
Para proteger las rutas se instala la estrategia passport-jwt, esta estrategia va a capturar el token que viene del header, si el token está firmado con nuestra firma entonces lo va a autorizar, de otro modo no tendrá acceso a la ruta.
Comando de instalación: npm install passport-jwt.

–
Se crea la nueva estrategia jwt.strategy.js:

Se requiere la Strategy y ExtractJwt (dónde el token está para que extraiga el token).

Se crean las options, estas contienen:

jwtFromRequest → Indica de dónde se saca el token, en este caso del header como bearer token
secretOrKey → Cuál es el secreto, necesario para poder verificar si la firma es válida o no.
La nueva estrategia (JwtStrategy) recibe las options y una función callback que recibe el payload del JWT y la función done que retorna el payload que ya verificó.

const { Strategy, ExtractJwt } = require('passport-jwt');
const { config } = require('../../../config/config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

module.exports = JwtStrategy;
La nueva estrategia se agrega a utils/auth/index.js:

const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
Implementando la nueva estrategia a la ruta para crear categorías será como decir “los clientes que tengan un JWT válido van a poder crear categorías”.

Se requiere passport, después se utiliza el método authenticate que recibe el nombre de la estrategia jwt sin un manejo de sesión (session: false).

categories.router.js:

const passport = require('passport');

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);
En resumen, primero se identifica al usuario (passport.authenticate), después se validan los datos (validatorHandler) y si todo bien, se conecta a la capa de servicios para poder crear la categoría.

En Insomnia se envía el token a través de los headers o usando la opción Bearer de la pestaña Auth. Lo mismo con thunder client.


*/

/*
!6) CONTROL DE ROLES:
Hay que diferencias entre roles y la gestión de permisos. Hasta ahora solo se válida que tenga token, y si lo tiene puede hacer todo.
*1) Hay que trabajar sobre el middleware de autenticación (auth.handler.js)
*2) creamos un nuevo método que se encargue de validar los roles (checkAdminRole o checkRoles)
*3) importamos la función en las rutas y agregamos el middleware. Si usamos el checkRoles q permite q varios tipos de roles sean validados, invocamos la función pasandole un array de los roles validos.
*/
