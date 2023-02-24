const hola = (nombre, miCallback) => {
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    miCallback(nombre);
  }, 3000);
};

const hablar = (callbackHablar) => {
  setTimeout(() => {
    console.log('Bla bla bla bla...');
    callbackHablar();
  }, 1000);
};

const adios = (nombre, otroCallback) => {
  setTimeout(() => {
    console.log(`Adios, ${nombre}`);
    otroCallback();
  }, 1000);
};

// --

console.log('Iniciando proceso...');

// Con un blablabla parecía lógico, pero en el momento que le agregamos muchos blablabla se hace un choclo. Es el callback hell:
hola('Carlos', (nombre) => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        adios(nombre, () => {
          console.log('Terminando proceso...');
        });
      });
    });
  });
});

// Para que se note más, le agregamos más funciones de blablabla:
hola('Carlos', (nombre) => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        hablar(() => {
          hablar(() => {
            hablar(() => {
              adios(nombre, () => {
                console.log('Terminando proceso...');
              });
            });
          });
        });
      });
    });
  });
});

//? Cómo evitamos el callback hell?

// 1) Definir funciones al principio y no sobre la marcha. Si pones las funciones dentro del callback se vuelve más inentendible todavía.
// 2) Se puede usar recursividad:
const hola2 = (nombre, miCallback) => {
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    miCallback(nombre);
  }, 3000);
};

const hablar2 = (callbackHablar) => {
  setTimeout(() => {
    console.log('Bla bla bla bla...');
    callbackHablar();
  }, 1000);
};

const adios2 = (nombre, otroCallback) => {
  setTimeout(() => {
    console.log(`Adios, ${nombre}`);
    otroCallback();
  }, 1000);
};

// Usamos recursividad para los callbacks. Esto me evita tener que repetir callbacks disminuyendo el callback hell.
const conversacion2 = (nombre, veces, callback) => {
  if (veces > 0) {
    hablar2(() => {
      conversacion2(nombre, --veces, callback);
    });
  } else {
    adios2(nombre, callback);
  }
};

// --
console.log('Iniciando proceso...');
hola2('Carlos', (nombre) => {
  conversacion2(nombre, 3, () => {
    console.log('Proceso terminado');
  });
});

// Para evitar las callbacks vienen las PROMESAS
