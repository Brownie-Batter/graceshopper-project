const Sequelize = require('sequelize');
const db = require('../db');

const OrderDetails = db.define('orderDetails', {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
    },
  },
});

module.exports = OrderDetails;
