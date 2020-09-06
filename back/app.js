const express = require('express')
const bodyParser = require('body-parser')
const restful   = require('node-restful')
const mongoose  = restful.mongoose
const app = express()

app.use(bodyParser.json())
const port = 3000

// Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

//teste
app.get('/', (req, res, next) => res.send('Backend done...'))

//start
app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)
  })