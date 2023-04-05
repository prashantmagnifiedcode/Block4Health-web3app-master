const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    fname : {
        type : String,
        // required : [true,'First Name Is Required']
    },
    email : {
        type : String,
        // required : [true,'Email Is Required']
    },
    phonenumber : {
        type : Number,
        // required : [true,'Phone Number Is Required']
    },
    age : {
        type : Number,
        // required : [true,'Age Is Required']
    },
    bloodgroup : {
        type : String,
        // required : [true,'Blood Group Is Required']
    },
    dob : {
        type : Number,
        // required : [true,'Date Of Birth Is Required']
    },
    address : {
        type : String,
        // required : [true,'Address Is Required']
    },
    country : {
        type : String,
        // required : [true,'Country Is Required']
    },
    state : {
        type : String,
        // required : [true,'State Is Required']
    },
    city : {
        type : String,
        // required : [true,'City Is Required']
    },
    aadhaar : {
        type : Number,
        // required : [true,'Aadhaar Number Is Required']
    },
    MetaAccount : {
        type : String,
        // required : [true,'Meta Account Is Required']
    },
    MetaPrivateKey: {
        type : String,
        // required : [true,'MetaPrivateKey Is Required']
    },
    Signature: {
        type : String,
        // required : [true,'MetaPrivateKey Is Required']
    },
    isGrant : []
},{timeStamps : true})

patientSchema.methods.generateHash = function (MetaPrivateKey) {
    return bcrypt.hashSync(MetaPrivateKey, bcrypt.genSaltSync(8), null);
  };
  
  patientSchema.methods.validPassword = function (MetaPrivateKey) {
    console.log(MetaPrivateKey);
    return bcrypt.compareSync(MetaPrivateKey, this.MetaPrivateKey);
  };
module.exports = mongoose.model('Patient',patientSchema);