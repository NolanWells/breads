// dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// schema
const bakerSchema = new Schema({
    name: {
        type: String, 
        required: true,
        enum:['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']},

    startDate: {type: String, required: true},
    bio: String,
})

bakerSchema.methods.getBakedBy = function(){
    return `${this.name} was baked with love by ${this.baker}`
}

// model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
