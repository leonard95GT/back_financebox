'use strict'

const { User } = require('../database/models');
const fs = require('fs');

exports.get = (req,res,next) => {
    res.send('Hello Finance!')
},

exports.post = (req,res) => {

}



