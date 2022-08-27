/*
!MODELO CLIENTO SERVIDOR
Modelo que usamos para acceder a internet y obtener recursos e información.
Sin esto no podrías acceder a internet. Tenemos un cliente que envía solicitudes al servidor. El cliente es el navegador desde el cual se realizan solicitudes a un servidor.

Servidor se refiere al programa que se ejecuta en el servidor. Para que se puedan entender se tienen que comunicar entre ellos.

Protocolo: Protocolo de comunicación entre cliente y servidor. Protocolo que se utiliza para comunicarse entre el cliente y el servidor.
Es un conjunto de reglas. Reglas que se utilizan para comunicarse entre el cliente y el servidor.

!PROTOCOLO HTTP: o protocolo de trasnferencia de hipertexto.
Para realizar la comunicación entre cliente y servidores debe haber solicitudes y respuestas.

REQUEST!: El cliente pide algo al servidor. Tiene los siguientes elementos: métodos http, path, versión de http, headers y body.

HTTPS: le agrega una capa de seguridad a la comunicación.

!MÉTODOS HTTP:
Es simplemento un verbo o sustantivo en inglés de lo que quiere el navegador o cliente: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, TRACE, CONNECT.

!GET:
permite obtener un recurso desde el servidor. Por ejemplo, si el navegador necesita un archivo html, css o una imagen.

!POST:
Para crear un recurso en el servidor. Por ejemplo, si el navegador necesita crear un nuevo usuario.

!PUT:
Para actualizar un recurso en el servidor. Por ejemplo, si el navegador necesita actualizar un usuario.

!DELETE:
Para eliminar un recurso en el servidor. Por ejemplo, si el navegador necesita eliminar un usuario.


!RESPUESTAS O RESPONSE HTTP:
Son las respuestas que el servidor envía al cliente. Tienen: código de estado, texto de estado, versión de http, headers y body.
*/

/*
!CÓDIGOS DE ESTADO HTTP
Son esenciales para que el cliente sepa qué pasó con la solicitud. Si ocurrió un error, el código de estado es un código de error. Si la solicitud fue exitosa, el código de estado es un código de éxito. Es un número entero que se asigna al servidor para indicar el estado de la solicitud.

Los código se categorizan de acuerdo a su primer dgito: el código de estado se divide en tres grupos: los códigos de estado de respuesta, los códigos de estado de error y los códigos de estado de redirección.

Los códigos de respuestas informativas son los códigos de estado de 100 a 199.
Los códigos de estado de respuesta satisfactora son los códigos de estado de 200 a 299. El típico es el código de estado de 200 para OK respuesta exitosa.
Los códigos de estado de respuesta de redirección son los códigos de estado de 300 a 399. El típico es el código de estado de 301.
Los códigos de estado de error son los códigos de estado de 400 a 499. El típico es el código de estado de 404 para not found y el 400 para bad request.
Los códigos de errores de los servidores son los códigos de estado de 500 a 599. El típico es el código de estado de 500 para internal server error.

Con node.js y express podemos especificar el código de estado de la respuesta http en nuestro servidor.

!MODULO HTTP, SERVIDOR HTTP
Le permite a node.js crear un servidor http y transmitir información con el protocolo http. El módulo http es una librería que se instala con node.js. Servidor que escucha a solicitudes y transmite info.

Se lo importa así:
*/

const http = require('http');

const servidor = http.createServer((req, res) => {
  console.log(
    'solicitud nueva'
  ); /* eso se ejecuta en la terminal cada vez que hacemos una solicitud al servidor */
  res.end(
    'Hola, mundo ponele'
  ); /* Acá se envía la respuesta al cliente o navegador */
}); /*Para esto, necesita un puerto  */

const PUERTO = 3000; /* por convención */

servidor.listen(PUERTO, () => {
  console.log(
    `Servidor corriendo en http://localhost:${PUERTO}`
  ); /* por convención */
}); /*Esto se ejecuta al iniciar el servidor.  */
