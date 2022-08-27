let name = "Federico",
  email = "fedeirar@gmail.com",
  _phone =
    "32470174014"; /*si trabajamos con elementos que van a ser privados, el nombre de esa variable o método debería empezar con guion bajo  */

module.exports.nombre =
  name; /* no necesariamente tengo que exportarlo bajo el mismo nombre de la variable o función que quiero exportar */
module.exports.email = email;
module.exports.phone = _phone;
