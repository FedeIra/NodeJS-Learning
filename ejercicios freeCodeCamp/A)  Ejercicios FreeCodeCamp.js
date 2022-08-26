/*
!Desarrollo Back End y APIs
Hasta este punto, solo has usado JavaScript en la parte de front-end para agregar interactividad a una página, resolver los desafíos de algoritmos o construir un SPA. Pero JavaScript también se puede utilizar en el back-end, o servidor, para construir aplicaciones web completas.

Hoy en día, una de las formas populares para construir aplicaciones es a través de microservicios, que son pequeñas aplicaciones modulares que trabajan juntas para formar una aplicación más grande.

!Gestión de paquetes con NPM
npm (Gestor de Paquetes de Nodos), es una herramienta de línea de comandos para instalar, crear y compartir paquetes de código JavaScript escritos para Node.js.*/

/*
!Cómo usar package.json, el núcleo de cualquier proyecto Node.js o paquete npm
El archivo package.json es el centro de cualquier proyecto Node.js o paquete npm. Almacena información sobre tu proyecto.

Consiste en un único objeto JSON donde la información se almacena en pares clave-valor. Sólo hay dos campos obligatorios; "name" y "version", pero es una buena práctica proporcionar información adicional sobre tu proyecto que podría ser útil para futuros usuarios o mantenedores.
*/

/*
{
  "name": "fcc-learn-npm-package-json",
  "author": "Federico Irarrazaval",
  "dependencies": {
    "express": "^4.14.0"
  },
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "repository": {
    "type": "git",
    "url": "https://idontknow/todo.git"
  }
}
*/

/*
!Add a Description to Your package.json
La siguiente parte de un buen archivo package.json es el campo description; donde pertenece una descripción corta, pero informativa de tu proyecto.

Es una buena manera de resumir lo que hace un proyecto. Es igual de importante en cualquier proyecto Node.js para ayudar a otros desarrolladores, futuros mantenedores o incluso a tu yo del futuro a entender el proyecto rápidamente.

"description": "A project that does something awesome",
*/

/*
{
	"name": "fcc-learn-npm-package-json",
  "author": "Federico Irarrazaval",
  "description" : "Package for exercises of freeCodeCamp to learn how to use node.js",
	"dependencies": {
		"express": "^4.14.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	}
}


!Añade palabras clave a tu package.json
El campo keywords es donde puedes describir tu proyecto usando palabras clave relacionadas. Ejemplo:

"keywords": [ "descriptive", "related", "words" ],


Este campo está estructurado como un arreglo de cadenas con comillas dobles.

!Agrega una licencia a tu package.json
El campo license es donde se informa a los usuarios de lo que pueden hacer con tu proyecto.

Algunas de las licencias comunes para proyectos de código abierto incluyen MIT y BSD. La información de la licencia no es requerida, y las leyes de derechos de autor en la mayoría de los países te darán la propiedad de lo que creas de manera predeterminada. Sin embargo, siempre es una buena práctica exponer explícitamente lo que los usuarios pueden y no pueden hacer.

"license": "MIT",
*/

/*
{
	"name": "fcc-learn-npm-package-json",
  "author": "Federico Irarrazaval",
  "description" : "Package for exercises of freecodecamp to learn how to use node.js",
  "keywords": ["freecodecamp", "node.JS", "learning"],
  "license": "MIT",
	"dependencies": {
		"express": "^4.14.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	}
}

!Añade una versión a tu package.json
Una version es uno de los campos obligatorios de tu archivo package.json. Este campo describe la versión actual de tu proyecto.

"version": "1.2.0",

!Ampliar tu proyecto con paquetes externos de npm
En lugar de tener que asegurarte manualmente de que obtienes todas las dependencias cada vez que configuras un proyecto en una nuevo computadora, npm instala automáticamente todo para ti.

"dependencies": {
  "package-name": "version",
  "express": "4.14.0"
}

EJEMPLO COMPLETO:
{
	"name": "fcc-learn-npm-package-json",
  "author": "Federico Irarrazaval",
  "description" : "Package for exercises of freecodecamp to learn how to use node.js",
  "version": "1.0.0",
  "keywords": ["freecodecamp", "node.JS", "learning"],
  "license": "MIT",
	"dependencies": {
		"express": "^4.14.0",
    "moment": "2.14.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	}
}

!Gestiona dependencias npm entendiendo versionado semántico
Versions de los paquetes npm en la sección dependencias de tu archivo package.json siguen lo que se llama Versionado Semántico (SemVer), un estándar de la industria para el versionado de software con el objetivo de facilitar la gestión de las dependencias.

Bibliotecas, frameworks u otras herramientas publicadas en npm deberían usar SemVer para comunicar claramente qué tipo de cambios pueden esperar los proyectos si se actualizan.

Así es como funciona el Versionado Semántico según el sitio web oficial:

"package": "MAJOR.MINOR.PATCH",
1) La versión MAJOR debe incrementarse cuando hagas cambios de API incompatibles.
2) La versión MINOR debe incrementarse cuando añadas funcionalidades de forma compatible con versiones anteriores.
3) La versión de PATCH debe incrementarse cuando realices correcciones de errores compatibles con versiones anteriores.

Esto significa que PATCHes son correcciones de errores y los MINORs añaden nuevas funcionalidades, pero ninguno de ellos rompe lo que funcionó antes. Finalmente, los MAJORs añaden cambios que no funcionarán con versiones anteriores.

!Usa el carácter tilde para usar la última versión del parche de una dependencia
Pero en la mayoría de los casos, no querrás perderte las correcciones de errores, ya que a menudo incluyen importantes parches de seguridad y (con suerte) no rompen cosas al hacerlo.

Para permitir que una dependencia de npm se actualice a la última versión de PATCH, puedes prefijar la versión de la dependencia con el carácter tilde (~). Ejemplo:

"package": "~1.3.8"

{
	"name": "fcc-learn-npm-package-json",
  "author": "Federico Irarrazaval",
  "description" : "Package for exercises of freecodecamp to learn how to use node.js",
  "version": "1.0.0",
  "keywords": ["freecodecamp", "node.JS", "learning"],
  "license": "MIT",
	"dependencies": {
		"express": "^4.14.0",
    "moment": "~2.10.0"
	},
	"main": "server.js",
	"scripts": {
		"start": "node server.js"
	},
	"repository": {
		"type": "git",
		"url": "https://idontknow/todo.git"
	}
}

!Usa el carácter caret para usar la última versión menor de una dependencia
El caret (^) permite a npm instalar futuras actualizaciones también. La diferencia es que el caret permitirá tanto actualizaciones MINOR como PATCHes.

Si se usara el caret (^) como prefijo de versión en su lugar, npm permitiría actualizar a cualquier versión 1.x.x. Ejemplo:

"package": "^1.3.8"

!Elimina un paquete de tus dependencias
¿Qué pasa si deseas eliminar un paquete externo que ya no necesitas? Puede que ya lo hayas adivinado, simplemente elimina el par clave-valor correspondiente a ese paquete de tus dependencias.

Este mismo método se aplica para eliminar otros campos de tu package.json

{
  "name": "fcc-learn-npm-package-json",
  "author": "Federico Irarrazaval",
  "description": "Package for exercises of freecodecamp to learn how to use node.js",
  "version": "1.0.0",
  "keywords": [
    "freecodecamp",
    "node.JS",
    "learning"
  ],
  "license": "MIT",
  "dependencies": {
    "express": "^4.14.0"
  },
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "repository": {
    "type": "git",
    "url": "https://idontknow/todo.git"
  }
}
*/

/*
!Basic Node and Express
Node.js es un entorno de ejecución de JavaScript que permite a desarrolladores escribir programas de backend (lado del servidor) en JavaScript.

Node.js viene con muchos módulos integrados — pequeños programas independientes — que ayudan en esto. Algunos de los módulos principales incluyen HTTP, que actúa como un servidor, y sistema de archivos, un módulo para leer y modificar archivos.

Estos paquetes pueden ayudarte a construir aplicaciones más grandes y complejas.

Express es un framework para aplicaciones web y es uno de los paquetes más populares en npm.

Node es sólo un entorno JavaScript. Al igual que JavaScript en el lado del cliente, puedes usar la consola para mostrar información útil de depuración.

!Inicia un servidor Express
*/
let express = require("express");
let app = express();

console.log("Hello World");

module.exports = app;

/* Crear un objeto app Express. Este objeto tiene varios métodos, y aprenderás muchos de ellos en estos desafíos. Un método fundamental es app.listen(port).

Le dice a tu servidor que escuche en un puerto determinado, poniéndolo en estado de ejecución.

En Express, las rutas toman la siguiente estructura: app.METHOD(PATH, HANDLER). METHOD es un método http en minúsculas. PATH es una ruta relativa en el servidor (puede ser una cadena, o incluso una expresión regular). HANDLER es una función que Express llama cuando la ruta coincide. Los Handlers toman la forma function(req, res) {...}, donde req es el objeto de la solicitud, y res es el objeto de respuesta.
*/

// function(req, res) {
//   res.send('Response String');
// }
