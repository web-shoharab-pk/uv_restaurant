const express = require("express");
const router = express.Router();

const Order = require("./../models/orderModel");

router.post('/new', async (req, res) => {

    const order = await Order.create(req.body);

    res.status(200).json({
        success: true,
        order,
        message: "Successfully Order Created!"
    })

});

router.get('/all', async (req, res) => {

    const order = await Order.find();

    if(!order) {
        res.status(404).json({
            success: false,
            message: 'Order not found!'
        })
    }

    res.status(200).json({
        success: true,
        order
    });
});

router.post('/user', async (req, res) => {

    const order = await Order.find(req.body);
    if(!order.length) {
        res.status(404).json({
            success: false,
            message: 'Order not found!'
        })
    }  else{
        res.status(200).json({
            success: true,
            order
        });
    }

});

router.delete('/delete/:id', async (req, res) => {

    const order = await Order.findById(req.params.id);

    if(!order) {
        res.status(404).json({
            success: false,
            message: 'Order not found!'
        })
    }else{
        order.remove()
        res.status(200).json({
            success: true,
            message: "Successfully Order Deleted!"
        });
    }
});

// UPDATE ORDER Status
router.put('/:id', async (req, res) => {

    let order = await Order.findById(req.params.id);
    if(!order) {
        res.status(404).json({success: false})
    } else {
        order = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
    
        res.status(200).json({
            success: true,
            message: "Successfully Order Updated!",
            order
        })
    }

})


module.exports = router;