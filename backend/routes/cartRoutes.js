const express = require("express");
const router = express.Router();
const Cart = require("./../models/cartModal");

router.post('/addToCart', async (req, res) => {

const {food, userId} = req.body; 
    let isFoodAlreadyAdded = await Cart.find({userId: userId, 'food.foodId': food.foodId});

    if(!!isFoodAlreadyAdded && isFoodAlreadyAdded.length !== 0) {
        isFoodAlreadyAdded[0].food.quantity = isFoodAlreadyAdded[0].food.quantity + 1;
        isFoodAlreadyAdded[0].food.price = isFoodAlreadyAdded[0].food.price * isFoodAlreadyAdded[0].food.quantity
        isFoodAlreadyAdded[0].save()
        res.status(200).json({success: true})

    } else {
        const cart = await Cart.create(req.body);
        if(!!cart) {
            res.status(200).json({
                success: true,
                cart,
                message: "Add To Cart Success!"
            })
        } else {
            res.status(500).json({
                success: false, 
                message: "Some thing is wrong!"
            })
        }
    }   

});

router.get('/:userId', async (req, res) => {

    const cart = await Cart.find(req.params)

    if(cart.length === 0) {
        res.status(200).json({
            success: false,
            message: 'Cart Data Not Found!'
        })
    } else {
        res.status(200).json({
            success: true,
            cart
        })
    }


})

router.delete('/:id', async (req, res) => {

    const food = await Cart.findByIdAndDelete(req.params.id);

    if(!food) {
        res.status(404).json({
            success: false,
            message: "Food not found!"
        })
    }
    res.status(200).json({
        success: true,
        message: "Food Deleted Successfully!"
    })
});

// DELETE USER CART
router.delete('/user/:userId', async (req, res) => {
 
    const food = await Cart.deleteMany(req.params)
    if(!food) {
        res.status(404).json({
            success: false,
            message: "Cart not found!"
        })
    } else {
        res.status(200).json({
            success: true,
            message: "Cart Deleted Successfully!",
            ...food
        })
    }
 

})

module.exports = router;