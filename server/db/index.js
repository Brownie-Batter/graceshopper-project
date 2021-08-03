//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Category = require('./models/Category');
//associations could go here!

User.belongsToMany(Order, { through: 'user_orders' });
Order.belongsTo(User);

Order.belongsToMany(Product, { through: 'product_orders' });
Product.belongsToMany(Order, { through: 'product_orders' });

Product.belongsTo(Category);
Category.belongsToMany(Product, { through: 'product_categories' });

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Category,
  },
};
