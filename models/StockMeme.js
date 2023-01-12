const mongoose = require("mongoose")


const StockMemeSchema = new mongoose.Schema({
    img: String,
    tag: [],
}, { timestamps: true });

const StockMeme = mongoose.model("StockMeme", StockMemeSchema);
module.exports = StockMeme;