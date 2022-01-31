const mongoose = require("mongoose");

const cartModel = new mongoose.Schema({

    food: {
        foodId: {
            type: String,
            required: true,
        },
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
        quantity: {
            type: Number,
            default: 1
        }
    },
    userId: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Cart', cartModel)