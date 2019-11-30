const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// connect DB
const uri = process.env.URI   //URI key from .env file
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, err => {
    if (!err) console.log('MongoDB connected')
    else console.log(err)
})

// routes

const exerciseRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exerciseRouter)
app.use('/users', usersRouter)


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server running on port ', port)
})