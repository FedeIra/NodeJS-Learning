/*
?Datos almacenados vs en memoria:
Los datos almacenados se guardan en el disco duro, mientras que los datos en memoria se guardan en la memoria RAM.

?Base de datos vs memoria:
La base de datos es un conjunto de datos que se almacenan en un disco duro, mientras que la memoria es un conjunto de datos que se almacenan en la memoria RAM.

?Base de datos vs disco duro:
La base de datos es un conjunto de datos que se almacenan en un disco duro, mientras que el disco duro es un dispositivo de almacenamiento de datos.

?Base de datos vs servidor:
La base de datos es un conjunto de datos que se almacenan en un disco duro, mientras que el servidor es un dispositivo que almacena datos y los envía a los clientes.

?Base de datos vs API:
La base de datos es un conjunto de datos que se almacenan en un disco duro, mientras que la API es un conjunto de funciones que se pueden utilizar para interactuar con un programa.

?Base de datos vs JSON:
La base de datos es un conjunto de datos que se almacenan en un disco duro, mientras que JSON es un formato de texto que se utiliza para transmitir datos.

?Base de datos vs XML:
La base de datos es un conjunto de datos que se almacenan en un disco duro, mientras que XML es un formato de texto que se utiliza para transmitir datos.

Hay datos que se manejan al vuelvo y otros que no. Todo esto funciona por tiempo. En memoria es rápido porque la CPU y la memoria RAM están cerca.

Sin embargo, cuando almacenamos en disco es más lento. Guardan mucho más información, pero los tiempos son mucho más lentos. Con archivos pesados puede hacer muy lento todo tu código por lo que a veces es clave pasarlo a la memoria RAM.

!BUFFERS
Son datos en binario.

Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal.

Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en bytes y no se especifica el tipo de dato)

En la consola, los datos se muestran en formato hexadecimal.

<h3>Creacion de un bufer básico</h3>
Para crear un buffer, con 4 espacios por ejemplo, podemos hacerlo con la siguiente sintaxis. */

let buffer = Buffer.alloc(1); // quiero guardar un byte ahí adentro

console.log(buffer);
//<Buffer 00> Tenemos un buffer con un espacio vacío

let buffer2 = Buffer.alloc(4);
console.log(buffer2);
// Output:
//<Buffer 00 00 00 00>
<h3>Otras formas de crear un buffer</h3>;
// Datos en un arreglo

let buffer3 = Buffer.from([1, 2, 3]); // cada elemento del array es un conjunto de datos binarios
console.log(buffer3); //<Buffer 01 02 03>
// Datos de tipo string

let buffer4 = Buffer.from('Hola');
console.log(buffer4); //<Buffer 48 6f 6c 61>
console.log(buffer4.toString()); // convierte el buffer a string: Hola
// Guardar el abecedario en un buffer

let abc = Buffer.alloc(26);
console.log(abc); //<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00> Son espacios vacíos.

for (let i = 0; i < abc.length; i++) {
  abc[i] = i + 97; //el caracter 97 es debido a la tabla ascii
}

console.log(abc); //  <Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76 77 78 79 7a>
console.log(abc.toString()); // abcdefghijklmnopqrstuvwxyz

/* Podemos trabajar dato a dato del byte para modificarlo. Cuando trabajas con ficheros grandes podes ir letra a letra cambiandole lo q quieras. Tanto con el paquete completo o con cada uno de los grupos de datos del paquete. */
