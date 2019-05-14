const express = require('express');
const router = express.Router();

// User model
const Badge = require('../models/badge')

//index
router.get('/', (req, res) => {
    Badge.find()
    .then(badges => {
        res.json({messgae: "index", badges})
    }).catch(err => {
        res.send.json({err})
    })
})

//post
router.post('/', (req, res) => {
    let badge= new Badge(req.body)
    badge.save()
    .then((badge) => {
        res.json({badge})
    })
})

//delete
router.delete('/:id', (req, res) => {
    Badge.findByIdAndDelete(req.params.id)
    .then(() => {
        res.json({message: "Delete successfull"})
    })
})

module.exports = router;