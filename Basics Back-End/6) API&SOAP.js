/*
!que es una API?
Es la forma en la que nosotros a través de código podemos conectarnos a otras aplicaciones. Es la forma que nuestra aplicación se comunica con otras aplicaciones.

Hace que una aplicación pueda interactuar con otra para aprovechar sus servicios.

Tenemos API's que se pueden consumir a modo de libreria (frameworks) y hay otras API's que funcionan sobre la web (ej: google maps). Estas últimas son las que más usamos.

En el contexto de las bases de datos, una API se utiliza para permitir que una aplicación se comunique con una base de datos, enviando y recibiendo datos a través de la API.

Es una INTERFAZ: una capa de abstracción para que dos sistemas se comuniquen. Interactuas con un sistema sin saber que está pasando por debajo. No necesitas saber la mécanica por detrás.
Es una interfaz para que se conecten o comuniquen aplicaciones o programas de software.

A veces cuando tenes que desarrollar podes aprovechar el desarrollo de otras personas. Ej: queres hacer una aplicación en la cual el usuario tenga que pagar. en lugar de codear toda la funcionalidad de pago, te conectas al desarrollo que hicieron otras personas, en el caso Stripe.

Hay servicios de back end o plataformas a través de las cuales usas su API y consumis sus funciones, ejemplo: firebase.

También hay servicios en la nube que nos dan servicios de backend listos para consumir, ejemplo un buscador creándolo en tu sitio web. Te entregan directamente un end point sin hacer nada de back end. Tener back end como servicios sin tener que desarrollarlo en tu aplicación.

Haces que tu aplicación se conecta con otras, haciendolo más poderosa que una simple aplicación aislada.

Hay distintas arquitecturas para las API:

1) API REST (representación de transferencia de estado):

Implica que se puede guardar el estado en cache.

Las tipo de API más usadas son las API Rest. En estas hay que solicitar a través de distintos end points o url.

ejemplos de REST end points:
GET /users/:id
PUT /users/:id
DELETE /users/:id
POST /users

GraphQL es una alternativa a las API REST que usa un solo end point
query {
  allUsers {
    id
    name
    email
  }
}

?qué es XML?
Es el formato para enviar datos tradicional parecido a HTML.
<user>
  <id>1</id>
  <name>John</name>
  <email>
</user>

?qué es JSON?
Es el formato más utilizado hoy en día.
[{
  "id": 1,
  "name": "John",
  "email": "john@gmail.com",
}]

Las API's pueden ser públicas o privadas (requiere autenticación y revisa cada pedido que tengas token).

Las API's pueden ser locales o remotas. Locales se ejecutan dentro del mismo entorno, por ejemplo estás programando en android, y android tiene su propia api para que el celular vibre.

Luego están las remotas, que se ejecutan en otro lugar, por ejemplo en un servidor. Utilizan servicios web (es lo más común).

Las remotas pueden utilizar el prótocolo SOAP o REST.

! Qué es SOAP?
Es un protocolo de intercambio de mensajes o para comunicar aplicaciones que usa XML. Es un protocolo de transporte. Es un protocolo de transporte de datos. Es un protocolo de transporte de datos en formato XML. Es un protocolo de transporte de datos en formato XML que se comunica a través de HTTP.

Es un WEB service. Por eso los datos se comparten a través de peticiones HTTP u otros.

Ejemplo de petición para obtener data en formato SOAP:

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.webserviceX.NET/">
<soapenv:Header/>
<soapenv:Body>
<web:GetCitiesByCountry>
<web:CountryName>Argentina</web:CountryName>

?Qué formatos de info. te pueden devolver las API?
JSON:
{
  "id": 1,
  "name": "John",
  "email": "john@gmail.com",
}

XML:
<user>
  <id>1</id>
  <name>John</name>
  <email>
</user>

Texto Plano.

Hay buenas prácticas con las API.
HATEOAS,
Seguridad: si tu API es privada hay que protegerla.
Testear: chequear que la API funcione correctamente.
Documentar: hay que documentar la API.

Status Code: es cómo resultó la petición o request:
200: OK
201: Created
400: Bad Request
401: Unauthorized
403: Forbidden
404: Not Found
500: Internal Server Error




*/
