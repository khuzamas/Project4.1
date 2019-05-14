const express = require('express');
const router = express.Router();

// User model
const Exercise = require('../models/exercise')


// // @route GET api/exercises
// // @desc Get all exercises
// // @access Public
router.get('/',(req,res) =>{
    Exercise.find()
    .sort({ date: -1})
    .then(exercises => res.json(exercises))
})

// @route POST api/exercises
// @desc Create an exercise
// @access Public
router.post('/',(req,res) =>{
    console.log(req.body);
    
    const newExercise = new Exercise({
        name: req.body.name,
        sets: req.body.sets,
        repetition: req.body.repetition,
        image: req.body.image,
        reward: req.body.reward
    })
    newExercise.save()
    .then(exercise => res.json(exercise))
})

// // @route Delete api/exercises
// // @desc Delete an exercise
// // @access Public
router.delete('/:id',(req,res) =>{
    Exercise.findById(req.params.id)
    .then(exercise => exercise.remove().then(() => res.json({ success: true})))
    .catch(err => res.status(404).json({ success: false}))
})

module.exports = router;