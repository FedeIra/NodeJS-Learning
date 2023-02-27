/*
!ELECTRON:
Te permite convertir webs en aplicaciones de escritorio. Convierte aplicaciones web en aplicaciones nativas.

npm init

npm i electron

Para que funcione hay que ejecutar el programa directamente desde electron. Agregas scrito "start": "electron ." El main tiene que ser este archivo js

npm start
*/

const { app, BrowserWindow } = require('electron');

let window;

const createWindow = () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   nodeIntegration: true,
    // },
  });

  window.loadFile('index.html');

  // mainWindow.on('closed', function () {
  //   mainWindow = null;
  // });
};

app.on('ready', createWindow);

// app.whenReady().then(() => {
//   createWindow();
// });
