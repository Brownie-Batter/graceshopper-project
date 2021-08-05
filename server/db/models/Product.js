const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
    },
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: '/images/defaultFood.jpeg',
  },
});

module.exports = Product;
