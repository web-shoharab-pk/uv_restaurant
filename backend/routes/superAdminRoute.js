const express = require("express");
const router = express.Router(); 
const { getAuth } = require('firebase-admin/auth');

router.post('/new', async (req, res) => {

    const uid = req.body.uid;
    getAuth()
    .setCustomUserClaims(uid, { admin: true })
    .then(() => {
        res.status(200).json({
            success: true,
            message: `Successfully Super Admin Added ${uid}`,
            uid
        }) 
    });
})



module.exports = router;