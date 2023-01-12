const express = require('express')
const router = express.Router()

const { Meme } = require('../models')

router.get(`/:id`, async (req, res, next) => {
    try {
        const foundPost = await Post.findById(req.params.id) // .populate (username)
        console.log(foundPost)
        console.log(`[${new Date().toLocaleTimeString()}] - Showed post: "${foundPost.description}"`)
        res.status(200).json(foundPost)
        // res.status(200).json({message: `Here is post ID ${req.params.id}`})
    }
    catch(err) {
        console.error(err)
        return next(err)
    }
})

router.get(`/`, async (req, res, next) => {
    try {
        console.log(`[${new Date().toLocaleTimeString()}] - Accessed the post creation page`)
        res.status(200).json({message: `This is the post creation page`})
    }
    catch(err) {
        console.error(err)
        return next(err)
    }
})

router.post(`/`, async (req, res) => {
    try {
       
        console.log(`[${new Date().toLocaleTimeString()}] - Created the above post`)
        res.status(201).redirect(`/`)
    }
    catch(err) {
        res.status(400).json({error: err.message})
    }
})

router.put(`/:id`, async (req, res) => {
    try {
        
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(`Updated post ID ${req.params.id}:`, updatedPost)
        console.log(`[${new Date().toLocaleTimeString()}] - "Updated" post ID ${req.params.id}`)
        res.status(200).json(updatedPost) 
    }
    catch(err) {
        res.status(400).json({error: err.message})
    }
})

router.delete(`/:id`, async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id)
        console.log(`Deleted:`, deletedPost.description)
        console.log(`[${new Date().toLocaleTimeString()}] - "Deleted" post ID ${req.params.id}`)
        res.status(200).json(deletedPost)
    }
    catch(err) {
        res.status(400).json({error: err.message})
    }
})

module.exports = router