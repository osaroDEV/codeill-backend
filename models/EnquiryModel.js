// import mongoose
const mongoose = require('mongoose');

// create Schema class 
const Schema = mongoose.Schema

// create model from class
const enquiryModel = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {timestamps: true})

module.exports = mongoose.model('Enquiry', enquiryModel)
