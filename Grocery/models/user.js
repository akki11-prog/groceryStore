const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [2, 'Name cannt be less than 2 characters'],
        maxlength: [64, 'Name cannt be less than 2 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],        
        maxlength: [128, 'Name cannt be less than 2 characters'],
        index: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],        
    },
    phoneNumber:{
        type: Number,
        minlength: [2, 'Name cannt be less than 2 characters'],
        maxlength: [10, 'Name cannt be less than 2 characters'],
    },
    age:{
      type: Number  
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default:false
    },
    
})

const user = mongoose.model('user', userSchema)

 module.exports = user