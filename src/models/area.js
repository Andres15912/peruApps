var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')
var hidden = require('mongoose-hidden')

var Schema = mongoose.Schema
var hidden = new hidden()

var AreaSchema = new Schema({
    name: {
        type: String,
        require: [ true, 'the name is required.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

AreaSchema.plugin(uniqueValidator, {message: '{PATH} need unique.'})
AreaSchema.plugin(hidden,{
    hidden:{ _id: false, createdAt: true, updatedAt: true }
})

var Area = module.exports = mongoose.model('area', AreaSchema);
module.exports.get = function (callback, limit) {
    Area.find(callback).limit(limit);
}