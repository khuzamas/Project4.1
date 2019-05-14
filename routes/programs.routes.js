const express = require('express');
const router = express.Router();

// User model
const Program = require('../models/program')


// // @route GET api/programs
// // @desc Get all programs
// // @access Public
router.get('/',(req,res) =>{
    Program.find()
    .sort({ date: -1})
    .then(programs => res.json(programs))
})

// @route POST api/programs
// @desc Create an program
// @access Public
router.post('/',(req,res) =>{
    const newProgram = new Program({
        name: req.body.name,
        description: req.body.description,
        reward: req.body.reward,
        image: req.body.image,
        exercises: req.body.exercises
    })

    newProgram.save()
    .then(program => res.json(program))
})


// // @route Delete api/programs
// // @desc Delete an program
// // @access Public
router.delete('/:id',(req,res) =>{
    Program.findById(req.params.id)
    .then(program => program.remove().then(() => res.json({ success: true})))
    .catch(err => res.status(404).json({ success: false}))
})

module.exports = router;