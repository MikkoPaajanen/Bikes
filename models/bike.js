const mongoose = require('mongoose')

const bikeSchema = new mongoose.Schema({
  type: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: Number,
  price: { type: Number, required: true },
  location: { type: String, required: true },
  description: String,
  imgUrl: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

bikeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Bike', bikeSchema)