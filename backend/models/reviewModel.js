const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({

    text: {
        type: String,
        required: true,
    },
    rate: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    reviewedBy: {
        name:  String,
        id: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Review', reviewSchema);