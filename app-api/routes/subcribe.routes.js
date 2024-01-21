let express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router();


// Subcribe model
let Subcribe = require('../models/Subcribe');

router.post('/', (req, res, next) => {
    const email = new Subcribe({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email
    });
    email.save().then(result => {
        res.status(201).json({
            message: "Email subcribed successfully!",
            emailSubcribed: {
                _id: result._id,
                email: result.email
            }
        })
    }).catch(err => {
        console.log(err),
        res.status(500).json({
            error: err
        });
    })
})

router.get("/", (req, res) => {
    Subcribe.find().then(data => {
        res.status(200).json({
            emails: data
        });
    });
});

module.exports = router;