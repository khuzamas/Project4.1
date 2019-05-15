const express = require('express');
const router = express.Router();
const Program = require('../models/program')
const User = require('../models/user')

router.get('/:id',(req,res) =>{
    Program.findById(req.params.id)
    .populate({path: 'exercises', model: 'Exercise'})
    .then(program => res.json(program))
})


//update
router.patch('api/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      res.json(user)
    })
})