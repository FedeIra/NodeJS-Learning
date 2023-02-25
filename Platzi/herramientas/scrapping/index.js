/*
!WEB SCRAPING
Web scraping es una técnica utilizada mediante programas de software para extraer información de sitios web. Usualmente, estos programas simulan la navegación de un humano en la World Wide Web ya sea utilizando el protocolo HTTP manualmente, o incrustando un navegador en una aplicación.

?puppeteer: levanta un chrome que no necesita tener interfaz gráfica.

npm init -y // para que inicie todo lo que necesitamos de npm

npm i puppeteer // para instalar puppeteer
*/

// acá está todo lo que se genere dentro de puppeteer
// acá está todo lo que se genere dentro de puppeteer
const puppeteer = require('puppeteer');

/* todo pupeter funciona de forma asincrona. PAra eso usamos funciones autoejecutadas, terminan en () */

// (async () => {
// función asincrona que se autoejecuta
// }
// )();

(async () => {
  console.log('Lanzamos navegador');
  // const browser = await puppeteer.launch(); //?lanza el navegador
  const browser = await puppeteer.launch({ headless: false }); // esto dice que se lance chromium pero viendolo

  const page = await browser.newPage(); //?crea una nueva página
  await page.goto('https://es.wikipedia.org/wiki/Node.js');
  // await page.screenshot({path: 'example.png'});
  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log(titulo1); // <span class="mw-page-title-main">Node.js</span>

  // evaluate:
  // 1. recibe una función
  // 2. la función se ejecuta en el navegador
  // 3. la función puede regresar un valor

  console.log('cerramos navegador...');
  // browser.close();
  console.log('navegador cerrado');
})();

// Otro ejemplo:
const puppeteer = require('puppeteer');
const link = 'https://platzi.com/blog/que-es-platzi-master/';

(async function browser() {
  console.log('Abrimos chromium');
  const browser = await puppeteer.launch({ headless: false }); //lanzamos el navegador

  const page = await browser.newPage();
  await page.goto(link);

  const commentsText = await page.evaluate(() => {
    const comments = document.querySelectorAll('.CommentContent-text p');
    const listOfComments = [];
    comments.forEach((comment) => {
      listOfComments.push(comment.innerHTML);
    });
    return listOfComments;
  });

  browser.close();

  console.log(commentsText);
})();
