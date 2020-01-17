const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const bikesRouter = require('./controllers/bikes')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const imagesRouter = require('./controllers/images')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
const morgan = require('morgan')


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((error) => {
    console.log('error connecting to mongoDB:', error.message)
  })
morgan.token('content', function (req) { return JSON.stringify(req.body)})


app.use(cors())
app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))
app.use('/api/bikes', bikesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/images', imagesRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app