const express = require('express')
const baker_seed = require('../models/baker_seed')
const bakers_router = express.Router()
const baker_schema = require('../models/baker.js')

bakers_router.get('/data/seed', (req, res) =>{
    baker_schema.insertMany(baker_seed)
    .then(()=>{res.redirect('/breads')})
    .catch((err) => {console.log(err) })
})


module.exports = bakers_router        
