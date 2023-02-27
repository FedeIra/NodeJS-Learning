/*
!Automatización de procesos:
* 1. Automatizar tareas repetitivas
* 2. Automatizar tareas que requieren mucha memoria

Hay muchas herramientas para hacer eso.

!Para esto usamos GULP
* 1. Gulp es un task runner
* 2. Nos permite automatizar tareas
* 3. Nos permite automatizar tareas que requieren mucha memoria
* 4. Nos permite automatizar tareas repetitivas

!Para instalar GULP
* 1. npm i gulp gulp-server-livereload
* 2. agregamos al package.json dentro de scripts:
* "build": "gulp build"
* 3. creas el archivo gulpfile.js
* 4.  npm run build


lo que abra gulp cuando quiera probar cualquier cosa
*/

const gulp = require('gulp'); //?para que funcione gulp
const server = require('gulp-server-livereload'); //?para que se actualice el navegador

gulp.task('build', (cb) => {
  console.log('Building the project');
  setTimeout(cb, 1200);
  cb();
});

//Para que funcione el build necesitas agregar al scripts "serve": "gulp build", y luego le doy a la terminal npm run build

// [12:52:29] Using gulpfile ~\Desktop\Programacion\NodeJS-Learning\Platzi\herramientas\automatizacion\gulpfile.js
// [12:52:29] Starting 'build'...
// Building the project
// [12:52:29] Finished 'build' after 4.41 ms

gulp.task('serve', (cb) => {
  //?para que funcione gulp
  gulp
    .src('www') //?donde está el proyecto
    .pipe(
      server({
        livereload: true, //?para que se actualice el navegador
        open: true, //?para que se abra el navegador
      })
    );
});

//Para que funcione el serv necesitas agregar al scripts "serve": "gulp serve", y luego le doy a la terminal npm run serve

/* Con esto nos inicia un servidor en local host

Le podemos agregar tareas:
*/

gulp.task('default', gulp.series('build', 'serve'));

//Para que funcione el default necesitas agregar al scripts "start": "gulp", y luego le doy a la terminal npm run start

// [13:02:27] Using gulpfile ~\Desktop\Programacion\NodeJS-Learning\Platzi\herramientas\automatizacion\gulpfile.js
// [13:02:27] Starting 'default'...
// [13:02:27] Starting 'build'...
// Building the project
// [13:02:27] Finished 'build' after 1.96 ms
// [13:02:27] Starting 'serve'...
// [13:02:27] Webserver started at http://localhost:8000

/* Con esto podemos automatizar TODO lo que se nos ocurra */
