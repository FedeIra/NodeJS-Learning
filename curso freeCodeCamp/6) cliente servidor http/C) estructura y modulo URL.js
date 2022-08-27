/*
!URL:
Es una dirección de un recurso en la web. Es como un mapa hacia ese recurso. Uniform Resource Locator.

Nos permite indicar la dirección de la página web a la queremos acceder en el navegador.

EJEMPLO:

https://www.freecodecamp.org/learn/2022/responsive-web-design/

1) https: se refiere al protocolo de comunicación que se usa para acceder a esa página web. Con local host tenemos http
2) www: se refiere a un subdominio de la web. Es información adicional agregada al inicio del dominio. Permite a las sitios web separar la info. para distintos propósitos.
3) freecodecamp: es el DOMINIO. Es el nombre de la empresa que nos ofrece la página web. Es único en todo internet.
4) .org: es el dominio de nivel superior. Es el que nos permite separar el dominio de la información..com/org
5) /learn/2022/responsive-web-design/: es el PATH. Es la ruta o ubicación que nos permite acceder a la página web. Representa el archivo o directorio en el servidor web. Puede tener parámetros que nos permiten personalizar la página web y son parte de la URL. Se separan por barras inclinadas: /.

Tambiém tenemos los parámetros query. Se identifican por una búsqueda o consulta de interrogación: ?.
EJEMPLO: https://www.google.com.ar/search?q=cursos+de+node
Son parametros usados para obtener contenido dinamico. Por ejemplo, para filtrar una lista de cursos de node. Están separados de la parte principal de la url con un signo de pregunta ?. También tenemos una clave que es la q y el valor asociado a ese parámetro q = cursos... Permiten filtrar la respuesta que le va a enviar al cliente.

Se puede incluir varios parametros query. Para eso se usa un signo &. Ejemplo:https://www.google.com.ar/search?q=cursos+de+node&sxsrf

Se usan parametros query en general para GET, es decir, obtener info.

!MÓDULO URL
Está disponible de forma global por lo que no hay que hacer un require o importarlo.
*/

const miURL = new URL(
  'https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1'
);

console.log(miURL.hostname); //www.ejemplo.org Extrajo solo el nombre del dominio.
console.log(miURL.pathname); ///cursos/programacion Extrajo solo la ruta o ubicación.
console.log(miURL.search); //?ordenar=vistas&nivel=1 Extrajo solo el parámetro query.
console.log(miURL.searchParams); //Object {ordenar: "vistas", nivel: "1"} Extrajo todos los parámetros query. Es un objeto que tiene sus parámetros con los valores correspondientes.
console.log(miURL.searchParams.get(`ordenar`)); //vistas . Extrajo el valor del parámetro ordenar.
console.log(miURL.searchParams.get(`nivel`)); //1 . Extrajo el valor del parámetro nivel.
