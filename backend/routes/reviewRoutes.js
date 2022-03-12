const express = require("express");
const router = express.Router();

const Review = require("./../models/reviewModel");

router.post('/new', async (req, res) => {

    const review = await Review.create(req.body);

    res.status(200).json({
        success: true,
        review
    })
});

router.get('/all', async (req, res) => {

    const reviews = await Review.find();

    if (!reviews) {
        res.status(404).json({
            success: false,
            message: 'Review not found!'
        })
    }

    res.status(200).json({
        success: true,
        reviews
    })

});

router.post('/user', async (req, res) => { 
    const reviews = await Review.findOne(req.body);

    if (!reviews) {
        res.status(404).json({
            success: false,
            message: 'Review not found!'
        })
    }

    res.status(200).json({
        success: true,
        reviews
    });

});

router.delete('/delete/:id', async (req, res) => {

    const review = await Review.findById(req.params.id); 
    if (!review) {
        res.status(404).json({
            success: false,
            message: 'Review not found!'
        })
    } else {
        review.remove()
        res.status(200).json({
            success: true,
            message: "Successfully Review Deleted!"
        })
    }

});
 

router.put('/update/:id', async (req, res) => {

    let review = await Review.findById(req.params.id);
    if (!review) {
        res.status(404).json({
            success: false,
            message: 'Review not found!'
        })
    } else {
        review = await Review.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        res.status(200).json({
            success: true,
            review
        })
    }
});

module.exports = router;