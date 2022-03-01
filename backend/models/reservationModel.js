const mongoose = require("mongoose");

const reservationModel = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    tableNo: {
        type: String,
        required: true,
    },
    note: {
        type: String,
    },
    reservedBy: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Reservation', reservationModel)