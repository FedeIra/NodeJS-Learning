const express = require('express');
const passport = require('passport');
const OrderService = require('../services/order.service.js');

const router = express.Router();
const service = new OrderService();

router.get(
  '/my-orders',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const orders = await service.findByUser(user.sub); //? The user id is stored in the sub property of the user object in the request object (req.user.sub) when the user is authenticated with passport and jwt strategy (see passport.js file)
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
