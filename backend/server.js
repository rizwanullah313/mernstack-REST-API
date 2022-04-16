//npm i express mongoose colors dotenv
// npm i -D nodemon

//console.log("Hello backend Server .js");

const express = require('express')
const dotenv = require('dotenv').config()
const port = 5000

const app = express()

app.listen(port, ()=> console.log(`Server Started on Port ${port}`))
