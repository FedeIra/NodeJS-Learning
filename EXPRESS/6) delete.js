// ------------------------- Ejemplo 1 ----------------------------------
server.delete('/posts', (req, res) => {
  if (!req.body.id)
    res.status(STATUS_USER_ERROR).json({ error: 'No se recibió un ID' });
  else {
    const onePost = posts.find((p) => p.id === req.body.id);

    if (onePost) {
      posts = posts.filter((p) => p.id !== req.body.id);

      res.json({ success: true });
    } else {
      res
        .status(STATUS_USER_ERROR)
        .json({ error: 'Ningun Post coincide con el ID provisto' });
    }
  }
});

// ------------------------- Ejemplo 2 ----------------------------------
server.delete('/author', (req, res) => {
  if (!req.body.author) {
    res.status(STATUS_USER_ERROR).json({ error: 'No se recibió un autor' });
  }

  const postsToBeDeleted = posts.filter((p) => p.author === req.body.author);

  if (!postsToBeDeleted.length) {
    res
      .status(STATUS_USER_ERROR)
      .json({ error: 'No existe el autor indicado' });
  } else {
    posts = posts.filter((p) => p.author !== req.body.author);
    res.json(postsToBeDeleted);
  }
});

// ------------------------- Ejemplo 3 ----------------------------------
server.delete(`/posts`, (req, res) => {
  const { id } = req.body;
  let post = posts.find((p) => p.id == id);

  if (!id || post === undefined) {
    return res.status(STATUS_USER_ERROR).json({ error: 'Mensaje de error' });
  } else {
    posts.splice(id - 1, 1);
    res.status(200).json({ success: true });
  }
});

// ------------------------- Ejemplo 4 ----------------------------------
server.delete(`/author`, (req, res) => {
  const { author } = req.body;
  let authorSelected = posts.filter((p) => p.author === author);
  // let result = posts.find((element) => element.author === author);

  if (!author) {
    return res.status(STATUS_USER_ERROR).json({ error: 'Mensaje de error' });
  }
  if (authorSelected.length === 0) {
    return res
      .status(STATUS_USER_ERROR)
      .json({ error: 'No existe el autor indicado' });
  }
  posts.map((post, index, array) =>
    authorSelected.includes(post) ? array.splice(index, 1) : post
  );
  res.status(200).json(authorSelected);
});
