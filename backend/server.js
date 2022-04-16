//npm i express mongoose colors dotenv
// npm i -D nodemon

//console.log("Hello backend Server .js");

const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// app.get('/api/goals', (req, res) => {
//     //res.send('Get Goals')
//     res.status(200).json({message: 'Get Goals'})
// }) this is move to routes/goalRoutes.js file

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)
app.listen(port, ()=> console.log(`Server Started on Port ${port}`))
