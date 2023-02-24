const soyAsincronaConCallback = (miCallback) => {
  console.log('Hola soy una función asincrona');
  setTimeout(() => {
    console.log('Estoy siendo asincrona');
    miCallback();
  }, 2000);
};

console.log('iniciando tercer proceso');

soyAsincronaConCallback(function () {
  console.log(
    '---------------------------------------------Terminando tercer proceso---------------------------------------------'
  );
});
