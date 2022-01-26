const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    stock: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Food', foodSchema)