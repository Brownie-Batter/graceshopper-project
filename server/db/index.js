//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Category = require('./models/Category');
const OrderDetails = require('./models/OrderDetails');
//associations could go here!

Product.belongsTo(Category);
Category.belongsToMany(Product, { through: 'product_categories' });

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, { through: OrderDetails });
Product.belongsToMany(Order, { through: OrderDetails });

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Category,
    OrderDetails,
  },
};
