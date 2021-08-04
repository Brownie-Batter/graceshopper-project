const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// pull request for user cart //:id/cart
router.get('/:id/cart', async (req, res, next) => {
  try {
    const userCart = await User.findByPk(req.params.id,{
      
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'cart']
      
    })
    res.json(userCart)
  } catch (err) {
    next(err)
  }
})