const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    officialname : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    organization: {
        type : String,
        required : true
    },
    organizationnumber: {
        type : Number,
        required : true
    },
    officialemail: {
        type : String,
        required : true
    },
    city: {
        type : String,
        required : true
    },
    domain: {
        type : String,
        required : true
    },
},{timestamps : true});

const adminModel = mongoose.model('admin',adminSchema);
module.exports = adminModel;