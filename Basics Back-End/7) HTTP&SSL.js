/*
! Qué son los métodos HTTP?
HTTP es un protocolo de nivel de aplicación que se ejecuta en la capa de aplicación del modelo de referencia OSI.

Todas las peticiones de web necesitan un protocolo, que es un conjunto de reglas que tenes que seguir para poder obtener un resultado. Permite intercambiar información entre un cliente y un servidor web.

Se basa en un modelo cliente-servidor, en el que un cliente (como un navegador web) envía una solicitud HTTP a un servidor, y el servidor responde con una página web u otro recurso solicitado.

Las solicitudes HTTP y las respuestas HTTP se componen de un encabezado y un cuerpo. El encabezado contiene información sobre la solicitud o respuesta, como el método HTTP utilizado (por ejemplo, GET o POST), la dirección URL solicitada, el tipo de contenido y otras información adicional. El cuerpo contiene los datos reales de la solicitud o respuesta, como el código HTML de una página web.

HTTP también permite el uso de cookies para mantener información de estado entre solicitudes y respuestas, lo que permite a los sitios web mantener el estado de una sesión y personalizar la experiencia del usuario.

En resumen, HTTP es un protocolo de comunicación que permite a los clientes (navegadores web) solicitar recursos (páginas web, imágenes, archivos, etc.) a los servidores web.

Nos permiten interactuar con la API.
GET: obtener datos
POST: enviar nueva información
PUT: actualizar información
DELETE: eliminar un recurso

Ejemplo de petición por método HTTP:

GET /users/:id
POST /users
PUT /users/:id
DELETE /users/:id

? http://localhost:3001/videogames?search=age of empires

Es equivalente al CRUD en las bases de datos.

Proxies: herramientas que nos permiten varios procesos, cachear la información por ejemplo. Los proxies filtran también, balancean las cargas, etc.

Cuando se hace una petición, si está correcta el servidor me devuelve lo que pido, pero ni al servidor ni el cliente le interesan seguir ocnectados luego de eso. El tema es cómo puedo ir guardando la info. de un usuario que hizo una petición. Se crean sesiones de parte del back end en el que en el cliente guardamos esos códigos para que la próxima vez que haga una petición el servidor sepa que esa persona ya hizo la petición o tenía un carrito de compra y tengo esas sesiones que puedo controlar por medio de las cookies.

!HTTPS y SSL/TLS:
La S luego de http es que la información está siendo entregada a través de un canal cifrado, con un certificado SSL. El prótocolo es lo mismo solo que la información viene cifrada.

SSL al igual que TLS son protocolos criptográficos, que proporcionan comunicaciones seguras por una red. SSL fue el primer protocolo cifrado, hasta que se cambió por el protocolo TLS por temas de vulnerabilidad. SSL es obsoleto y se considera inseguro.

Actualmente se utiliza TLS 1.3 desde el 2018.

Se integra al protocolo cifrado dentro del HTTP, S de seguridad. Todas las comunicaciones entre el servidor y el navegador están cifrados de modo que nadie pueda obtener datos de esas comunicaciones. Son claves únicas para cada vez que visitamos una página web. Esa clave cambia cada vez que visitas la página web.

Dependiendo de neustro proyecto podemos pedir distintos tipos de certificados. Si tenemos subdominios podemos utilizar la validación de dominio wildcard.

Si no se aprueba el certificado del servidor, el navegador nos mostrará un mensaje de advertencia. Esto puede suceder si el certificado no es válido o si el servidor no es el que dice ser.

Además del certificado, la aplicación web debe estar configurada para trabajar bajo HTTPS.


*/
