const config = require('../utils/config')
const cloudinary = require('cloudinary')

if (typeof (config.CLOUDINARY_URL) === 'undefined') {
  console.log('cloudinary config is undefined')
} else {
  console.log('cloudinary config')
  console.log(cloudinary.config())
}
const bikesRouter = require('express').Router()
const Bike = require('../models/bike')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')


const storage = cloudinaryStorage({
  cloudinary,
  folder: 'uploads',
  allowedFormats: [ 'jpg', 'png' ],
  filename: function (req, file, cb) {
    cb(undefined, new Date().toISOString() + file.originalname)
  }
})
const parser = multer({storage: storage})

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
      await cloudinary.uploader.destroy(bikeToDelete.imgPublic_id)
      console.log('bikeToDelete', bikeToDelete)
      res.status(204).json(bikeToDelete.toJSON())
    } else {
      res.status(403).json({ error: 'You dont have right to remove this item' })
    }
    
  }
  catch(exception) {
    next(exception)
  }
})

bikesRouter.post('/', parser.single('File'), async (req, res, next) => {
  const body = req.body
  console.log('req file', req.file)
  const token = getTokenFrom(req)
  
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)
    console.log('user', user)

    const bike = new Bike({
      type: body.type,
      brand: body.brand,
      model: body.model,
      year: body.year,
      price: body.price,
      location: body.location,
      contact: body.contact,
      description: body.description,
      imgUrl: req.file.secure_url,
      imgPublic_id: req.file.public_id,
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