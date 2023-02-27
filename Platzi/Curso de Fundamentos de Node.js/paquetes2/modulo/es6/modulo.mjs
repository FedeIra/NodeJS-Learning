const saludar = () => {
  return 'Hola mundo';
  // console.log('Hola mundo');
};

// export default saludar;

/* es mejor destructurarlo al exportarlo: */
export default {
  saludar,
  prop1: 'Hola que tal',
};

/* lo mejor es usarlo con babel */
