const mongoose = require('mongoose');

const DoctorSchema = mongoose.Schema({
    // HospitalName,MetaAccount,MetaPrivateKey
    HospitalID : {
        type : String,
        // required : [true,'HospitalName Is Required']
    },
    DoctorPubliceKey : {
        type : String,
        // required : [true,'MetaAccount Is Required']
    },
    DoctorHashkey : {
        type : String,
        // required : [true,'MetaPrivateKey Is Required']
    },
    
    isGrant : []
},{timeStamps : true})

module.exports = mongoose.model('HospitalDoctor',DoctorSchema);