const express = require('express');
const router = express.Router();

// Otro ejemplo:
router.get('/:categoryId/products/:productId', (req, res) =>
  // de esta manera recibimos dos params por medio de la ruta
  // ejemplo de url:http://localhost:3000/api/categories/1/products/2
  {
    const { categoryId, productId } = req.params;
    res.json({
      categoryId,
      productId,
    });
  }
);

module.exports = router;
