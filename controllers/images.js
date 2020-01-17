const config = require('../utils/config')
const cloudinary = require('cloudinary').v2

if (typeof (config.CLOUDINARY_URL) === 'undefined') {
  console.log('cloudinary config is undefined')
} else {
  console.log('cloudinary config')
  console.log(cloudinary.config())
}

const fs = require('fs')
const imagesRouter = require('express').Router()
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads')
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
})
const upload = multer({storage: storage})


imagesRouter.post('/', upload.single('File'), async (req, res, next) => {
  try {
    console.log('request', req.file)
    console.log('you successfully send a photo')
    const uploadedImage = await cloudinary.uploader.upload(`${req.file.path}`, { tags: 'bike'},
      function(error, result) {console.log(result, error)})
    
    fs.unlinkSync(req.file.path)
    res.status(201).json(uploadedImage.secure_url)
  } catch (exception) {
    next(exception)
  }

})

module.exports = imagesRouter