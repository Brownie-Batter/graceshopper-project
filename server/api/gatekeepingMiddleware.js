const User = require('../db/models/User');

//require a user to be logged into continue
const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

//require admin priviledges
const requireAdmin = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).send('Admin permissions required');
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const getPagingData = (data, categories) => {
  const { count: totalItems, rows: products } = data;
  const totalPages = Math.ceil(totalItems / 10);

  return { totalItems, products, totalPages, categories };
};
module.exports = { requireToken, requireAdmin, getPagingData };
