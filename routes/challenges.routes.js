const express = require('express');
const router = express.Router();

// User model
const Challenge = require('../models/challenge')


// // @route GET api/challenges
// // @desc Get all challenges
// // @access Public
router.get('/',(req,res) =>{
    Challenge.find()
    .sort({ date: -1})
    .then(challenges => res.json(challenges))
})

// @route POST api/challenges
// @desc Create an challenge
// @access Public
router.post('/',(req,res) =>{
    const newChallenge = new Challenge({
        name: req.body.name,
        description: req.body.description,
        reward: req.body.reward,
        category: req.body.category,
        level: req.body.level,
        icon: req.body.icon
    })
    newChallenge.save()
    .then(challenge => res.json(challenge))
})

// // @route Delete api/challenges
// // @desc Delete an challenge
// // @access Public
router.delete('/:id',(req,res) =>{
    Challenge.findById(req.params.id)
    .then(challenge => challenge.remove().then(() => res.json({ success: true})))
    .catch(err => res.status(404).json({ success: false}))
})

module.exports = router;