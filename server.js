// import express
const express = require("express");
// create application object
const app = express();

const cors = require('cors')
const morgan = require('morgan')

const StockMemeController = require('./controllers/StockMemeController')
const UserMemeController = require('./controllers/review-controller')


// initialize .env variables
require("dotenv").config();
require("./config/db.connection")
// pull PORT from .env, give default value of 4000 and establish DB Connection

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/meme', StockMemeController)
app.use('/usermeme', UserMemeController)
app.get('/', (req, res)=>res.redirect('/meme'))

app.listen(PORT, ()=> {
    console.log(`listening on: ${PORT}`)
})