const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  order_status: {
    type: Sequelize.ENUM('active', 'purchased'),
    defaultValue: 'active',
  },
});

module.exports = Order;
