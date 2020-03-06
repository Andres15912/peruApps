var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')
var hidden = require('mongoose-hidden')

var Schema = mongoose.Schema
var hidden = new hidden()

var SportSchema = Schema({
    name: {
        type: String,
        unique:true,
        required: [ true, 'the name is required.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

SportSchema.plugin(uniqueValidator,{ message: '{PATH} need unique.' })
SportSchema.plugin(hidden, {
    hidden: { _id: false, createdAt: true, updatedAt: true }
})



var Sport = module.exports = mongoose.model('sport', SportSchema);
module.exports.get = function (callback, limit) {
    Sport.find(callback).limit(limit);
}