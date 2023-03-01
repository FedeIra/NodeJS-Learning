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
*/
