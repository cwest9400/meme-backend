const express = require('express')
const router = express.Router()

const StockMeme = require('../models/StockMeme')


// http://localhost:4000/meme/:id - GET
router.get('/:id', async (req,res)=> {
    
    try {

        const foundMeme = await StockMeme.findById(req.params.id)
        res.status(200).json(foundMeme)

    }catch (err) {
        res.status(400).json({error: err})
    }
})

//get all stock memes /meme
router.get('/', async (req,res)=> {
    try {
        const allMemes = await StockMeme.find({})
        res.status(200).json(allMemes)
    } catch (err){
        res.status(400).json({error: err})
    }
})
//add stock meme to db localhostjejdsjbjd/meme/ endpoint
router.post('/', async (req, res)=> {
    try {
        const stockMeme = await StockMeme.create(req.body)
        console.log(stockMeme)
        res.status(201).json(stockMeme)
    } catch(error) {
        console.error(error)
    }
})

//update product route
router.put('/:id', async (req, res, next)=>{
    try {
        const updatedMeme = await StockMeme.findByIdAndUpdate(req.params.id, req.body, {new: true})  
        return res.status(200).json(updatedMeme)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

//delete stock meme //need _id from mongoDB
router.delete('/:id', async (req,res,next)=> {
    try {
        const deletedMeme = await StockMeme.findByIdAndDelete(req.params.id)
        console.log(deletedMeme)
        res.redirect('/meme')
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

module.exports = router