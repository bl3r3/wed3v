'use strict'

const http = require('http')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('public'))

app.get('/', (req, res) => {
  return res.send('/index.html')
})

server.listen(process.env.PORT || 8000, () => {
  console.log('running in 8000')
})
