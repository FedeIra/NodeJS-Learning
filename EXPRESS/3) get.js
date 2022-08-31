// ------------------------- Ejemplo 1 ----------------------------------
server.get('/posts', (req, res) => {
  const { term } = req.query;

  if (term) {
    const postsContainingTerm = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(term.toLowerCase()) ||
        p.contents.toLowerCase().includes(term.toLowerCase())
    );

    res.json(postsContainingTerm);
  } else {
    res.json(posts);
  }
});

// ------------------------- Ejemplo 2 ----------------------------------
server.get('/posts/:author', (req, res) => {
  const postsByAuthor = posts.filter((p) => p.author === req.params.author);

  if (postsByAuthor.length) res.json(postsByAuthor);
  else
    res
      .status(STATUS_USER_ERROR)
      .json({ error: 'No existe ningun post del autor indicado' });
});

// ------------------------- Ejemplo 3 ----------------------------------
server.get('/posts/:author/:title', (req, res) => {
  const postsByAuthorAndTitle = posts.filter(
    (p) => p.author === req.params.author && p.title === req.params.title
  );

  if (postsByAuthorAndTitle.length) res.json(postsByAuthorAndTitle);
  else
    return res.status(STATUS_USER_ERROR).json({
      error: 'No existe ningun post con dicho titulo y autor indicado',
    });
});

// ------------------------- Ejemplo 4 ----------------------------------
server.get('/', function (req, res) {
  let obj = {
    saludo: 'Hola' + req.body.name,
  };
  res.json(obj);
});

// ------------------------- Ejemplo 5 ----------------------------------
server.get(`/posts/:author`, (req, res) => {
  const { author } = req.params;

  const result = posts.filter((element) => element.author === author);
  result.length > 0
    ? res.json(result)
    : res
        .status(STATUS_USER_ERROR)
        .json({ error: 'No existe ningun post del autor indicado' });
});

// ------------------------- Ejemplo 6 ----------------------------------
server.get(`/posts/:author/:title`, (req, res) => {
  const { author, title } = req.params;
  const result = posts.filter(
    (element) => element.author === author && element.title === title
  );
  if (result.length > 0) {
    res.json(result);
  } else {
    res.status(STATUS_USER_ERROR).json({
      error: 'No existe ningun post con dicho titulo y autor indicado',
    });
  }
});

// ------------------------- Ejemplo 7 ----------------------------------
app.get('/', (req, res) => {
  console.log('llegue');
  res.send('Hello world');
});

// ------------------------- Ejemplo 8 ----------------------------------
app.get('/api/:id', morgan('dev'), morgan('common'), function (req, res) {
  res.json({ parametro: req.params.id });
});

// ------------------------- Ejemplo 8 ----------------------------------
app.get('*', function (req, res) {
  res.redirect('/');
});

// ------------------------- Ejemplo 9 ----------------------------------
app.get('/response', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/public/response.html'));
});

// ------------------------- Ejemplo 10 ----------------------------------
app.get('/second-server', (req, res, next) => {
  res.send({ data: 'No encontramos resultados' });
});

// ------------------------- Ejemplo 11 ----------------------------------
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// ------------------------- Ejemplo 12 ----------------------------------
app.get('/', function (req, res) {
  res.send('Hello!');
});

app.get('/welcome/:name', function (req, res) {
  res.send(`Welcome ${capitalize(req.params.name)}`);
});

app.get('/hablar/:animal', function (req, res) {
  var animals = {
    perro: 'wuf',
    gato: 'meow',
    vaca: 'muuu',
  };
  var animal = req.params.animal;
  var ruido = animals[animal];
  if (ruido) {
    return res.send(`El ${animal} hizo ${ruido}`);
  }
  res.redirect('/error');
});

app.get('/repeat/:word/:times', function (req, res) {
  var string = '';
  if (parseInt(req.params.times)) {
    for (var i = 0; i < req.params.times; i++) {
      string += '<p>' + req.params.word + '</p>';
    }
  } else {
    string = 'Tenes q poner un numero de veces como ultimo parametro';
  }
  res.send(string);
});

app.get('/error', function (req, res) {
  res.send('Cannot be Found!');
});

app.get('*', function (req, res) {
  res.redirect('/error');
});

app.listen(8000);

function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}
