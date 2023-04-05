const express = require('express');
const router = express.Router();
const bcrypt=require("bcrypt")
const Patient = require('../models/patientModel');

router.post('/register',async(req,res) => {
   
     const {fname,email,phonenumber,age,bloodgroup,dob,address,country,state,city,aadhaar,MetaAccount,Signature} = req.body;
     const salt = await bcrypt.genSalt(10);
     const hashedMetaPrivateKey = await bcrypt.hash(Signature, salt);
     console.log(hashedMetaPrivateKey)

     const patient1 = await Patient.find({MetaAccount});
     if(patient1.length){
      res.status(400).json({
         success : true,
         message : "Already Register"
    });
     }

     const newPatient = new Patient({fname,email,phonenumber,age,bloodgroup,dob,address,country,state,city,aadhaar,Signature:hashedMetaPrivateKey,MetaAccount});
   console.log(newPatient)
      try {
        newPatient.save();
        res.status(200).json({
            success : true,
            message : 'Register Success'
        });
     } catch (error) {
        res.status(400).json({
             message : error
        });
     }
});

router.post('/login', async (req,res) => {
   const {MetaAccount,Signature} = req.body;
   console.log(req.body)
   // const result = await Patient.validateAsync(req.body);/

   try {
       const patient1 = await Patient.find({MetaAccount});
       console.log(patient1)
       const verifyPassword = await bcrypt.compare(Signature,patient1[0].Signature);
       if(!verifyPassword){
         res.status(400).json({
            message : 'Login Auth Failed'
         })
       }
      

       if(patient1.length > 0){

          const currentPatient = {
            fname : patient1[0].fname,
            email : patient1[0].email,
            _id : patient1[0]._id
          }
          res.status(200).send(currentPatient);
       }else{
         res.status(400).json({
            message : 'Login Failed'
         })
       }
   } catch (error) {
      res.status(404).json({
         message : 'Something Went Wrong'
      })
   }
   // const {email,password} = req.body;
   // try {
   //     const patient = await Patient.find({email,password});
   //     if(patient.length > 0){
   //        const currentPatient = {
   //          fname : patient[0].fname,
   //          lname : patient[0].lname,
   //          email : patient[0].email,
   //          _id : patient[0]._id
   //        }
   //        res.status(200).send(currentPatient);
   //     }else{
   //       res.status(400).json({
   //          message : 'Login Failed'
   //       })
   //     }
   // } catch (error) {
   //    res.status(404).json({
   //       message : 'Something Went Wrong'
   //    })
   // }
});

router.get('/getallpatients', async (req,res) => {
   try {
    const patients = await Patient.find({});
   res.status(200).send(patients);
   } catch (error) {
    res.status(404).json({message : error.stack});
   }
});

router.post('/deletepatient', async (req,res) => {
 const patientid = req.body.patientid;
 try {
    await Patient.findOneAndDelete({_id : patientid});
    res.status(200).send('Patient Deleted Successfully');
 } catch (error) {
    res.status(404).json({message : error.stack});
 }
});


module.exports = router;