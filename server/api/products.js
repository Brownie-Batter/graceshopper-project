const router = require('express').Router();
const {
  models: { Product, Category },
} = require('../db');
const { requireToken, requireAdmin } = require('./gatekeepingMiddleware');

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      res.status(404).send('Product ID not found');
    } else {
      res.json(product);
    }
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: Category,
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

//add a new product - pass in the product object including category string
router.post('/add', requireToken, requireAdmin, async (req, res, next) => {
  try {
    const { name, description, price, quantity, imgUrl, category } = req.body;

    let newProduct = await Product.create({
      name,
      description,
      price,
      quantity,
      imgUrl,
    });

    const productCategory = await Category.findAll({
      where: { category_name: category },
      attributes: ['id'],
    });

    newProduct.setCategory(productCategory[0].id);
    res.json(newProduct);
  } catch (error) {
    next(error);
  }
});

//product delete route
router.delete('/:id', requireToken, requireAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.send('Product deleted');
  } catch (error) {
    next(error);
  }
});

//product update route
router.put('/:id', requireToken, requireAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.update(req.body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
