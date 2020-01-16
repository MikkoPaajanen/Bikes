const bikesRouter = require('express').Router()
const Bike = require('../models/bike')
const User = require('../models/user')

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

bikesRouter.delete('/:id', async (req, res, next) => {
  try {
    const bikeToDelete = await Bike.findByIdAndRemove(req.params.id)
    console.log(bikeToDelete)
    res.status(204).end()
  }
  catch(exception) {
    next(exception)
  }
})

bikesRouter.post('/', async (req, res, next) => {
  const body = req.body

  const user = await User.findById(body.userId)
  console.log('user', user)

  try {
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