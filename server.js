// import express
const express = require("express");
// create application object
const app = express();

const cors = require('cors')
const morgan = require('morgan')

// const productController = require('./controllers/product-controller')
// const reviewController = require('./controllers/review-controller')


// initialize .env variables
require("dotenv").config();
require("./config/db.connection")
// pull PORT from .env, give default value of 4000 and establish DB Connection

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// app.use('/product', productController)
// app.use('/review', reviewController)
// app.get('/', (req, res)=>res.redirect('/product'))

app.listen(PORT, ()=> {
    console.log(`listening on: ${PORT}`)
})