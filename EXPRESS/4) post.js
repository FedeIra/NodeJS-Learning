// ------------------------- Ejemplo 1 ----------------------------------
server.post('/posts', (req, res) => {
  const { author, title, contents } = req.body;

  if (!author || !title || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error: 'No se recibieron los parámetros necesarios para crear el Post',
    });
  } else {
    const newPost = { author, title, contents, id: postId };
    posts.push(newPost);

    postId++;

    res.json(newPost);
  }
});

// ------------------------- Ejemplo 2 ----------------------------------
server.post('/posts/author/:author', (req, res) => {
  const { author } = req.params;
  const { title, contents } = req.body;

  if (!author || !title || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error: 'No se recibieron los parámetros necesarios para crear el Post',
    });
  } else {
    const newPost = { author, title, contents, id: postId };
    posts.push(newPost);

    postId++;

    res.json(newPost);
  }
});

// ------------------------- Ejemplo 3 ----------------------------------
app.post('/create', (req, res) => {
  const { name } = req.body;

  if (!name) res.sendStatus(400).send('Faltan datos');
  else {
    baseDatos.push(req.body);
    res.json({ msg: 'Success', db: baseDatos });
  }
});

// ------------------------- Ejemplo 4 ----------------------------------
app.post('/params/:a/:b/:c', (req, res) => {
  res.json({ a: req.params });
});
