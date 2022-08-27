/*
!EVENTOS:
Es una acción que se realiza en la aplicaicón. Tenes sincrono y asincrono. El sincrono bloquea la aplicación hasta que se resuelve.


Tenes un cliente y un servidor. El servidor está escucnando en un puerto y el cliente se conecta a ese puerto cuando le pide info. o si necesita ejecutar un proceso. Acá se produce una acción que desencadena un evento.

!EMMITER (emisores):
Emiten eventos y llaman a funciones especificas cuando ocurren como resultado.

Son isntancias de la clase EVENTEMITTER. Tienen un método on() para asociar una función a un evento.

!METODO ON() Y EVENT EMITTERS:
Nos referimos a los eventos que manejan una función como EVENTHANDLER.

Hay un módulo event que te permite definir, emitir y escuchar eventos.
*/

const EventEmitter = require('events');

const productsEmit = new EventEmitter();

productsEmit.on('purchase', () => {
  console.log('purchase done');
}); /* Acá le decimos que cuando ocurra una compra diga purchase done. Asociamos un evento a la función

En nuestra aplicación podemos usar esto*/

productsEmit.emit('purchase'); //purchase done /* Acá emitimos el evento purchase Le decimos que queremos emitir un evento llamado purchase. Busca la función asociada a ese evento y la ejecuta.*/

/* Se le puede pasar más de un parámetro: */

productsEmit.on('sale', (total, product) => {
  console.log(
    `purchase done for the amount of ${total} for the product ${product}`
  );
});

productsEmit.emit('sale', 200, 'iphone'); //purchase done for the amount of 200 for the product iphone
