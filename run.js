// import express
const express = require("express");
// create application object
const app = express();


const cors = require('cors')
const morgan = require('morgan')

require("dotenv").config();
require("./config/db.connection")

const StockMemeController = require('./controller/StockMemeController')
const UserMemeController = require('./controller/UserMemeController')


// initialize .env variables
// pull PORT from .env, give default value of 4000 and establish DB Connection
// const {PORT}=process.env
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/meme', StockMemeController )
app.use('/usermeme', UserMemeController )
app.get('/', (req, res)=>res.send('sanitycheck'))

app.listen(PORT, ()=> {
    console.log(`listening on: ${PORT}`)
})