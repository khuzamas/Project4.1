/*
  @instructor Name:  Ebere.
  @program : WDI 4 Riyadh
*/

const User = require('../models/User');
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const passport = require('passport');

// const passportHelper = require('../config/passport')

router.get('/', (request, res)=>{
  User.find()
  .then(users => res.json(users))
  .catch(err => {
   response.send({message : err})
  })
})

//update
router.patch('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
  .then((user) => {
    res.json(user)
  })
})

module.exports = router