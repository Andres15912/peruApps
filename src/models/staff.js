var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')
var hidden = require('mongoose-hidden')

var Schema = mongoose.Schema
var hidden = new hidden()

var StaffSchema = Schema({
    name : {
        type: String,
        require: [ true, 'the name is required.']
    },
    lastName: {
        type: String,
        require: [ true, 'the  last name is required.']
    },
    email: {
        type: String,
        unique: true,
        require: [ true, 'the email is required.']
    },
    commissar: {
        type: Boolean,
    },
    judget :{
        type: Boolean,
    },
    event: [{
        type: Schema.Types.ObjectId,
        ref: 'event',
        // required: true
    }],
    boss: {
        type:Boolean
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }

})
StaffSchema.plugin(uniqueValidator, {message: '{PATH} need unique.'})
StaffSchema.plugin(hidden, {
    hidden:{ _id: false, createdAt: true, updatedAt: true }
})

var StaffSchema = module.exports = mongoose.model('staff', StaffSchema);
module.exports.get = function (callback, limit) {
    StaffSchema.find(callback).limit(limit);
}