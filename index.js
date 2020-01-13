const express = require('express')

const config = require('./utils/config')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')



mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
morgan.token('content', function (req) { return JSON.stringify(req.body)})



app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

let bikes = [
  {
    id: 1,
    brand: 'Merida',
    model: 'One-Sixty 6000',
    year: 2018
  },
  {
    id: 2,
    brand: 'Specialized',
    model: 'Venge',
    year: 2016
  },
  {
    id: 3,
    brand: 'Colnago',
    model: 'Master',
    year: 2015
  }
]

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/bikes', (req, res) => {
  res.json(bikes)
})

app.get('/bikes/:id', (req, res) => {
  const id = Number(req.params.id)
  const bike = bikes.find(bike => bike.id === id)
  if (bike) {
    res.json(bike)
  } else {
    res.status(404).end()
  }
})

app.delete('/bikes/:id', (req, res) => {
  const id = Number(req.params.id)
  bikes = bikes.filter(bike => bike.id !== id)

  res.status(204).end()
})

app.post('/bikes', (req, res) => {
  const body = req.body
  if (!body.brand || !body.model || !body.year) {
    return res.status(400).json({
      error: 'content missing'
    })
  }
  const bike = {
    id: body.id,
    brand: body.brand,
    model: body.model,
    year: body.year
  }
  bikes.concat(bike)
  res.json(bike)
})

const unknownEndpoint = (req, res) =>{
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


app.listen(config.PORT, () => {
  console.log(`server running on port ${config.PORT}`)
})