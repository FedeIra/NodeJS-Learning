/*
!INSTALACIÓN DE PAQUETES EXTERNOS
Los podes buscar en https://www.npmjs.com/

En este caso, instalamos express. Aunque sea una se instalaron 57 paquetes pq este paquete depende de otros paquetes para funcionar, por lo tanto, te instala todos. De todas formas, en packaje.json te aparece solo la que instalaste especificamente:

{
  "name": "paquetes-externos",
  "version": "1.0.0",
  "description": "mi primer paquete de Node.js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Fede Ira",
  "license": "ISC",
  !"dependencies": {
    !"express": "^4.18.1"
  }
}

Te parecen todos los paquetes que se intalaron por express en package-lock.json. Todos los paqueres se instalan en node_modules.

PAra desinstalar un paquete, usa el comando npm uninstall <nombre del paquete>

Para express: npm uninstall express

Al desinstarlo se borra express y los otros 57 paquetes que dependen de express.

!Puedo instalar paquetes en distintas versiones
npm install express@4.15.1
Te van a aparecer vulnerabilidades en la version que instalaste. Para evitar esto, podes instalar la version mas reciente: npm install express@latest
*/
