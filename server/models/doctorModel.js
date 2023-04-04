const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    // HospitalName,MetaAccount,MetaPrivateKey
    HospitalName : {
        type : String,
        // required : [true,'HospitalName Is Required']
    },
    MetaAccount : {
        type : String,
        // required : [true,'MetaAccount Is Required']
    },
    MetaPrivateKey : {
        type : String,
        // required : [true,'MetaPrivateKey Is Required']
    },
    
    isGrant : []
},{timeStamps : true})

module.exports = mongoose.model('Doctor',doctorSchema);