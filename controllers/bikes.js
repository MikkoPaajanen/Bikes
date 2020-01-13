const bikesRouter = require('express').Router()
const Bike = require('../models/bike')

bikesRouter.get('/', (req, res) => {
  Bike.find({}).then(bikes => {
    res.json(bikes.map(bike => bike.toJSON()))
  })
})

bikesRouter.get('/:id', (req, res, next) => {
  Bike.findById(req.params.id)
    .then(bike => {
      if (bike) {
        res.json(bike.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

bikesRouter.delete('/:id', (req, res, next) => {
  Bike.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

bikesRouter.post('/', (req, res, next) => {
  const body = req.body

  const bike = new Bike({
    brand: body.brand,
    model: body.model,
    year: body.year
  })

  bike.save()
    .then(savedBike => {
      res.json(savedBike.toJSON())
    })
    .catch(error => next(error))
})


module.exports = bikesRouter