//npm i express mongoose colors dotenv
// npm i -D nodemon
// npm i express-async-handler

//console.log("Hello backend Server .js");

const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()
    
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// app.get('/api/goals', (req, res) => {
//     //res.send('Get Goals')
//     res.status(200).json({message: 'Get Goals'})
// }) this is move to routes/goalRoutes.js file

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)
app.listen(port, ()=> console.log(`Server Started on Port ${port}`))
