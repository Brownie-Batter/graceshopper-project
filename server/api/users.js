const router = require('express').Router();
const {
  models: { User },
} = require('../db');
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

// // pull request for user cart //:id/cart
// router.get('/:id/cart', async (req, res, next) => {
//   try {
//     const userCart = await User.findByPk(req.params.id, {
//       attributes: ['cart'],
//     });
//     console.log('usercart', userCart);
//     let cart = await userCart.cart.map(async (product) => {
//       const item = await Product.findByPk(parseInt(product));
//       console.log('map item', item);
//       return item;
//     });
//     console.log('cart', cart);
//     res.json(cart);
//   } catch (err) {
//     next(err);
//   }
// });

// pull request for user cart //:id/cart
router.get('/:id/cart', async (req, res, next) => {
  try {
    const userCart = await User.findByPk(req.params.id, {
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['cart'],
    });
    res.json(userCart);
  } catch (err) {
    next(err);
  }
});
