const bikesRouter = require('express').Router()
const Bike = require('../models/bike')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

bikesRouter.get('/', async (req, res) => {
  const bikes = await Bike.find({}).populate('user', { username: 1, firstname: 1, lastname: 1 })
  res.json(bikes.map(bike => bike.toJSON()))
})

bikesRouter.get('/:id', async (req, res, next) => {
  try {
    const bikeToGet = await Bike.findById(req.params.id)
    if (bikeToGet) {
      res.json(bikeToGet.toJSON())
    } else {
      res.status(404).end()
    }
  }
  catch (exception) {
    next(exception)
  }
})

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

bikesRouter.delete('/:id', async (req, res, next) => {
  const token = getTokenFrom(req)
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    const bike = await Bike.findById(req.params.id)
    console.log('user', user)
    console.log('bike', bike)
    if ( bike.user.toString() === user._id.toString() ) {
      const bikeToDelete = await Bike.findByIdAndRemove(req.params.id)
      console.log(bikeToDelete)
      res.status(204).end()
    } else {
      res.status(403).json({ error: 'You dont have right to remove this item' })
    }
    
  }
  catch(exception) {
    next(exception)
  }
})

bikesRouter.post('/', async (req, res, next) => {
  const body = req.body

  const token = getTokenFrom(req)
  
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)
    console.log('user', user)

    const bike = new Bike({
      brand: body.brand,
      model: body.model,
      year: body.year,
      price: body.price,
      user: user._id
    })
  
    const savedBike = await bike.save()
    user.bikes = user.bikes.concat(savedBike.id)
    await user.save()
    res.status(201).json(savedBike.toJSON())
  } catch (exception) {
    next(exception)
  }
  
})


module.exports = bikesRouter