const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    foodDetails: {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        foodId: String
    },
    shipmentDetails: {
      type: Object,
    },
    paymentDetails: {
        type: Object,
    },
    orderedBy: {
        name: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'Pending'
    }
});

module.exports = mongoose.model('Order', orderSchema);