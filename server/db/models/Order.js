const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  order_status: {
    type: Sequelize.STRING,
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
    },
  },
});

module.exports = Order;
