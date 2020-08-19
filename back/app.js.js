import express from 'express';
import { mongoose as _mongoose } from 'node-restful';
const server  = express()
const mongoose = _mongoose

//Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

//teste
server.get('/', (req, res, next) => res.send("Backendo done..."))

//start
server.listen(3000)