const express = require('express')
const restful   = require('node-restful')
const mongoose  = restful.mongoose
const app = express()

// Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

//teste
app.get('/', (req, res, next) => res.send('Backendo done...'))

//start
app.listen(3000)