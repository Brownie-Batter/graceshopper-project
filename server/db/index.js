//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Category = require('./models/Category');
//associations could go here!

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(Product, { through: 'product_orders' });
Product.hasMany(Order, { through: 'product_orders' });

Product.hasOne(Category);
Category.belongsToMany(Product);

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Category,
  },
};
