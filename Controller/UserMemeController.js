const express = require(`express`)
const router = express.Router()

const { UserMeme } = require(`../models`)

router.get(`/:id`, async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        console.log(foundProfile)
        console.log(`[${new Date().toLocaleTimeString()}] - Showed user`)
        res.status(200).json(user)
    }
    catch (err) {
        console.error(err)
        res.status(404).json({ error: err.message })
        return next(err)
    }
})

router.get(`/`, async (req, res, next) => {
    try {
        console.log(`[${new Date().toLocaleTimeString()}] - Showing all user stuff...`)
        const allUsers = await User.find({})
        res.status(200).json(allUsers)
    }
    catch (err) {
        console.error(err)
        return next(err)
    }
})

router.post(`/`, async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        console.log(`[${new Date().toLocaleTimeString()}] - Created profile for user`)
        res.status(201).redirect(`/`)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.put(`/:id`, async (req, res) => {
    try {
        
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log(`Updated profile ID ${req.params.id}:`, updatedUser)
        console.log(`[${new Date().toLocaleTimeString()}] - Updated profile of "User"`)
        res.status(200).json(updatedUser)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.delete(`/:id`, async (req, res) => {
    try {
        
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        console.log(`Deleted:`, deletedUser.username)
        console.log(`[${new Date().toLocaleTimeString()}] - Deleted profile of "${deletedUser.username}"`)
        res.status(200).json(deletedUser)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
})

module.exports = router
