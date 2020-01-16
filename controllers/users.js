const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (req, res, next) => {
  try {
    const body = req.body
    if (!body.password) {
      return res.status(401).json({ error: 'password missing' })
    }
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      firstname: body.firstname,
      lastname: body.lastname,
      passwordHash
    })

    const savedUser = await user.save()
    res.json(savedUser)
  } catch (exception) {
    next(exception)
  }
})

usersRouter.get('/', async (req, res, next) => {
  try {
    const users = await User
      .find({}).populate('bikes', { id: 1, brand: 1, model: 1, year: 1, price: 1 })
    res.json(users.map(u => u.toJSON()))
  } catch (exception) {
    next(exception)
  }
})

module.exports = usersRouter