const saludar = () => {
  console.log('Hola mundo');
};

// module.exports = saludar; // hay que exportarlo

/* es mejor destructurarlo al exportarlo: */
module.exports = {
  saludar,
  prop1: 'Hola que tal',
};
