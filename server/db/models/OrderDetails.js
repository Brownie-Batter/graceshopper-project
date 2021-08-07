const Sequelize = require('sequelize');
const db = require('../db');

const OrderDetails = db.define('orderDetails', {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
    },
    defaultValue: 1,
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
    },
  },
});

module.exports = OrderDetails;
