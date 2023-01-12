const mongoose = require("mongoose")


const StockMemeSchema = new mongoose.Schema({
    img: String,
    tag: [],
}, { timestamps: true });

const Product = mongoose.model("StockMeme", StockSchema);
module.exports = StockMeme;