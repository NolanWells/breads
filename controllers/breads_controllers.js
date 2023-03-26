const express = require('express')
const bread = require('../models/bread.js')
const breads_router = express.Router()
const Bread = require('../models/bread.js')
const baker_schema = require('../models/baker')
const Baker = require('../models/baker')

//NEW
breads_router.get('/new', (req, res) => {
  baker_schema.find()
    .then((foundBakers) =>{
      res.render('new', {bakers: foundBakers})
    })
  
})

//Edit 
breads_router.get('/:id/edit', (req, res) => {
  Baker.find()
    .then(foundBakers =>{
      Bread.findById(req.params.id) 
        .then(foundBread => { 
        res.render('edit', {
          bread: foundBread,
          bakers: foundBakers 
      })
    })
  })
})

//Show
breads_router.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
    .populate('baker')
    .then(foundBread => { 
      const bakedBy = foundBread.getBakedBy()
      console.log(bakedBy)
      res.render('show', {
        bread: foundBread
      })
    })
    .catch(err => {
      res.send('404')
    })
})

//Update
breads_router.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedBread => {
      console.log(updatedBread) 
      res.redirect(`/breads/${req.params.id}`) 
    })
})

//Delete
breads_router.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread => {
      res.status(303).redirect('/breads')
    })
})


//Index
breads_router.get('/', (req, res) => {
  bread.find()
    .then(foundBreads => {
      res.render('index', {
        breads: foundBreads,
        title: 'Index Page'
      })
    })
})

// CREATE
breads_router.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined
  }
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})


module.exports = breads_router 