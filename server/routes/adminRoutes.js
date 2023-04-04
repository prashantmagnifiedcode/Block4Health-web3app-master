const express = require('express');
const router = express.Router();
const Admin = require('../models/adminModel');

router.post('/login', async (req,res) => {
    const {officialname,password,organization,organizationnumber,officialemail,city,domain} = req.body;
    try {
        const admin = await Admin.find({officialname,password,organization,organizationnumber,officialemail,city,domain});
        if(admin.length > 0){
           const currentAdmin = {
            officialname : admin[0].officialname,
            password : admin[0].password,
            organization : admin[0].organization,
            organizationnumber : admin[0].organizationnumber,
            officialemail : admin[0].officialemail,
            city : admin[0].city,
            domain : admin[0].domain,
             _id : admin[0]._id
           }
           res.status(200).send(currentAdmin);
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
 });

 module.exports = router;