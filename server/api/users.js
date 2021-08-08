const router = require('express').Router();
const {
  models: { User, Order },
} = require('../db');
const OrderDetails = require('../db/models/OrderDetails');
const Product = require('../db/models/Product');
const { requireToken, requireAdmin } = require('./gatekeepingMiddleware');

module.exports = router;

router.get('/', requireToken, requireAdmin, async (req, res, next) => {
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
      attributes: ['id', 'username'],
      include: {
        model: Order,
        where: { order_status: 'active' },
        attributes: ['id', 'order_status'],
        include: {
          model: Product,
          attributes: ['id', 'name'],
        },
      },
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
router.post('/:id/cart/:productId', requireToken, async (req, res, next) => {
  try {
    const { quantity, price } = req.body;
    const userOrder = await Order.findOne({
      where: { userId: req.params.id, order_status: 'active' },
    });

    let cart = await OrderDetails.findOne({
      where: {
        orderId: userOrder.id,
        productId: req.params.productId,
      },
    });

    if (!cart) {
      await userOrder.addProduct(req.params.productId);

      let newCart = await OrderDetails.findOne({
        where: {
          orderId: userOrder.id,
          productId: req.params.productId,
        },
      });
      await newCart.update({
        quantity,
        price,
      });
      res.json(newCart);
    } else {
      await cart.update({
        quantity,
        price,
      });
      res.json(cart);
    }
  } catch (err) {
    next(err);
  }
});

//delete product from cart or decrease quantity route
router.delete('/:id/cart/:productId', requireToken, async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: { userId: req.params.id, order_status: 'active' },
    });

    // let cart = await OrderDetails.findOne({
    //   where: {
    //     orderId: userOrder.id,
    //     productId: req.params.productId,
    //   },
    // });
    await userOrder.removeProduct(req.params.productId);
    // const newQuantity = cart.quantity - 1;
    // if (cart.quantity > 1) {
    //   await cart.update({
    //     quantity: newQuantity,
    //   });
    // } else {
    //   await userOrder.removeProduct(req.params.productId);
    // }
    res.json(req.params.productId);
  } catch (error) {
    next(error);
  }
});

//change order status from active to purchased and create a new order
router.put('/:id/cart/order', requireToken, async (req, res, next) => {
  try {
    const userOrder = await Order.findOne({
      where: { userId: req.params.id, order_status: 'active' },
    });

    await userOrder.update({
      order_status: 'completed',
    });
    const user = await User.findByPk(req.params.id);
    await user.createOrder();

    res.json(userOrder);
  } catch (error) {
    next(error);
  }
});
