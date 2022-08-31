// ------------------------- Ejemplo 1 ----------------------------------
server.put('/posts', (req, res) => {
  const { id, title, contents } = req.body;

  if (!id || !title || !contents) {
    return res.status(STATUS_USER_ERROR).json({
      error:
        'No se recibieron los parámetros necesarios para modificar el Post',
    });
  } else {
    let onePost = posts.find((p) => p.id === id);

    if (onePost) {
      onePost.title = title;
      onePost.contents = contents;

      res.json(onePost);
    } else {
      res.status(STATUS_USER_ERROR).json({
        error: 'No existe ningun Post con el id indicado',
      });
    }
  }
});

// ------------------------- Ejemplo 2 ----------------------------------
server.put(`/posts`, (req, res) => {
  const { id, title, contents } = req.body;

  if (!id || !title || !contents) {
    return res.status(STATUS_USER_ERROR).json({
      error:
        'No se recibieron los parámetros necesarios para modificar el Post',
    });
  }
  let post = posts.find((p) => p.id == id);

  if (post === undefined) {
    return res.status(STATUS_USER_ERROR).json({
      error: 'No se recibió el id correspondiente',
    });
  } else {
    post.title = title;
    post.contents = contents;
    res.status(200).json(post);
  }
});
