const router = require('express').Router();
const {
  models: { Product, Category },
} = require('../db');
const {
  requireToken,
  requireAdmin,
  getPagingData,
} = require('./gatekeepingMiddleware');
const { Op } = require('sequelize');

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
    const { page, filter } = req.query;
    let condition =
      filter && filter !== 'all'
        ? { category_name: { [Op.like]: filter } }
        : null;
    // you can control the size of data you want returned. for now the default is 10
    let size;
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;

    const products = await Product.findAndCountAll({
      order: [['name', 'ASC']],
      offset,
      limit,
      include: {
        model: Category,
        where: condition,
      },
    });
    const categories = await Category.findAll();
    const response = getPagingData(products, categories);

    res.json(response);
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
