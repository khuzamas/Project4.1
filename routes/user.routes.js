const User = require('../models/User');
const express = require('express')
const router = express.Router()


router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .populate('programs')
    .then((user) => {
      res.json(user)
    })
  })


module.exports = router