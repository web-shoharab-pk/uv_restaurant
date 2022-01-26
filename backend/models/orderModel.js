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
        }
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
        id: {
            type: String,
            required: true,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Order', orderSchema);