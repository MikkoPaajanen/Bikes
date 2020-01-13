const bikesRouter = require('express').Router()
const Bike = require('../models/bike')

bikesRouter.get('/', async (req, res) => {
  const bikes = await Bike.find({})
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
    if (bikeToDelete) {
      console.log(bikeToDelete)
      res.status(204).json(bikeToDelete.toJSON())
    } else {
      res.status(204).end()
    }
  }
  catch(exception) {
    next(exception)
  }
})

bikesRouter.post('/', async (req, res, next) => {
  const body = req.body

  try {
    const bike = new Bike({
      brand: body.brand,
      model: body.model,
      year: body.year
    })
  
    const savedBike = await bike.save()
    res.status(201).json(savedBike.toJSON())
  } catch (exception) {
    next(exception)
  }
  
})


module.exports = bikesRouter