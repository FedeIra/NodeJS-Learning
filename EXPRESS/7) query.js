// ------------------------- Ejemplo 1 ----------------------------------
server.get('/posts', (req, res) => {
  // localhost:3000/posts?term=vacaciones
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
server.get(`/posts`, (req, res) => {
  const { term } = req.query;
  if (term) {
    const result = posts.filter(
      (element) =>
        element.title.includes(term) || element.contents.includes(term)
    );
    result ? res.json(result) : res.status(404).json('no se encuentra');
  } else {
    res.json(posts);
  }
});

// ------------------------- Ejemplo 3 ----------------------------------
app.post('/query', (req, res) => {
  const { identificador } = req.query;
  res.json({ a: req.query, b: identificador });
});
