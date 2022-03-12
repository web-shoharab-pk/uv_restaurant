const express = require("express");
const router = express.Router();
const Food = require("./../models/foodModel");

router.post('/new', async (req, res) => {
 
    const food = await Food.create(req.body);
  
    res.status(200).json({
        success: true,
        food
    });
});

router.get('/all', async (req, res) => {

    const foods = await Food.find();

    if(!foods) {
        res.status(404).json({
            success: false,
            message: 'Data not found!'
        });
    }

    res.status(200).json({
        success: true,
        foods
    });

});

router.post('/category', async (req, res) => {

    const foods = await Food.find(req.body);

    if(!foods) {
        res.status(404).json({
            success: false,
            message: 'Data not found!'
        });
    }

    res.status(200).json({
        success: true,
        foods
    });

});

router.delete('/delete/:id', async (req, res) => {

    const food = await Food.findById(req.params.id);

    if(!food) {
        res.status(404).json({
            success: false,
            message: 'Data not found!'
        });
    } else {
        food?.remove();
        res.status(200).json({
            success: true,
             message: "Successfully Food Deleted!"
        });
    }

});

router.put('/update/:id', async (req, res) => {

    let food = await Food.findById(req.params.id);

    if(!food) {
        res.status(404).json({
            success: false,
            message: 'Data not found!'
        });
    } else {
        food = await Food.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        res.status(200).json({
            success: true,
             message: "Successfully Food Updated!"
        });
    }

});

module.exports = router;