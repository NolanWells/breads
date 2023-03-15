const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')

//Show
breads_router.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]){
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
        })
    }
    else {
        res.send('404')
    }
    //res.send(Bread[req.params.arrayIndex])
})

//Index
breads_router.get ('/', (req, res) => {
    res.render('index', {
    breads: Bread,
    title: "Index Page"
    })

    //res.send(Bread)
})

module.exports = breads_router 