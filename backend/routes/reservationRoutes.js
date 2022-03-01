const express = require("express");
const router = express.Router();
const Reservation = require("./../models/reservationModel");

router.post('/new', async (req, res) => {

    const reserv = await Reservation.create(req.body);

    if(!reserv) {
        res.status(500).json({
            success: false,
            message: 'Someing is wrong!'
        })
    } else {
        res.status(200).json({
            success: true,
            reserv
        })
    }

})



module.exports = router;