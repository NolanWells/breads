require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })
  

//DEPENDENCIES
const methodOverride = require('method-override')

//Middleware
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send("Hello World")
})

const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

//404
app.get('*', (req, res) => {
    res.send('404')
})
  
app.listen(PORT, () =>{
    console.log('listening on port', PORT);
})


