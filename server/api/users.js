const router = require('express').Router();
const {
  models: { User, Order },
} = require('../db');
const OrderDetails = require('../db/models/OrderDetails');
const Product = require('../db/models/Product');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// pull request for user cart //:id/cart
router.get('/:id/cart', async (req, res, next) => {
  try {
    //login, cart, hit route
    //check if user has active order
    //if they have an active order, send order details

    //if they don't have an active order
    //create a new active order
    //send order details to front end
    //check if auth id is equal to order id

    const user = await User.findByPk(req.params.id, {
      include: [
        {
          model: Order,
          where: { order_status: 'active' },
        },
        { model: OrderDetails },
      ],
    });

    console.log('user', user);
    //const active = await OrderDetails.findByPk(user.order.id);
    // console.log('active order', active);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//add item to cart
router.put('/:id/cart/:productId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.addProduct(req.params.productId);
    res.json(user);
  } catch (err) {
    next(err);
  }
});
