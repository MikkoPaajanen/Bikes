const express = require('express')
const app = express()
//const http = require('http')
const config = require('./utils/config')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const bikesRouter = require('./controllers/bikes')

//const server = http.createServer(app)



mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
morgan.token('content', function (req) { return JSON.stringify(req.body)})



app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))
app.use('/api/bikes', bikesRouter)


const unknownEndpoint = (req, res) =>{
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


app.listen(config.PORT, () => {
  console.log(`server running on port ${config.PORT}`)
})