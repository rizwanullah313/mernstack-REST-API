const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please Add a Name']
    },
    email:{
        type: String,
        required: [true, 'Please Add a Email']
    },
    password:{
        type: String,
        required: [true, 'Please Add a Password']
    },

},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)

// time stamp after schema add hoga