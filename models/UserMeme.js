const mongoose = require("mongoose")

const UserMemeSchema = new mongoose.Schema({
   
    userName: {
        type: String,
        required: false,
        max: 12
    },
    userText: {
        type: String,
        required: true,
        max: 50
    },
    //corresponding meme image that the user selected 
    stockMeme: {
        type: mongoose.Types.ObjectId,
        ref: "StockMeme",
    },
}, {timestamps: true})

const UserMeme = mongoose.model("UserMeme", UserMemeSchema)
module.exports = UserMeme