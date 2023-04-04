const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Doctor = require("../models/doctorModel");
const Patient = require("../models/patientModel");

//hospital registeration
router.post("/register", async (req, res) => {
  const { HospitalName, MetaAccount, MetaPrivateKey } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedMetaPrivateKey = await bcrypt.hash(MetaPrivateKey, salt);
  console.log(hashedMetaPrivateKey);
  const newDoctor = new Doctor({
    HospitalName,
    MetaAccount,
    MetaPrivateKey: hashedMetaPrivateKey,
  });
  try {
    newDoctor.save();
    res.status(200).json({
      success: true,
      message: "Register Success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

// router.post('/register',(req,res) => {
//      const {fname,lname,email,phonenumber,age,bloodgroup,dob,specialization,workplace,qualification,graduate,aadhaar,workplacecontact,password} = req.body;
//      const newDoctor = new Doctor({fname,lname,email,phonenumber,age,bloodgroup,dob,specialization,workplace,qualification,graduate,aadhaar,workplacecontact,password});
//      try {
//         newDoctor.save();
//         res.status(200).json({
//             success : true,
//             message : 'Register Success'
//         });
//      } catch (error) {
//         res.status(400).json({
//              message : error
//         });
//      }
// });
//for hospital
router.post("/login", async (req, res) => {
  const { MetaAccount, MetaPrivateKey } = req.body;
  // console.log("hu",MetaPrivateKey)

  try {
    const doctor = await Doctor.find({ MetaAccount });
    console.log(doctor);

    const verifyPassword = await bcrypt.compare(
      MetaPrivateKey,
      doctor[0].MetaPrivateKey
    );
    console.log(doctor, verifyPassword);
    if (!verifyPassword) {
      res.status(400).json({
        message: "Login Auth Failed",
      });
    }
    if (doctor.length > 0) {
      const currentDoctor = {
        fname: doctor[0].fname,
        lname: doctor[0].lname,
        email: doctor[0].email,
        _id: doctor[0]._id,
      };
      res.status(200).send(currentDoctor);
    } else {
      res.status(400).json({
        message: "Login Failed",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Something Went Wrong",
    });
  }
});

router.get("/getalldoctors", async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).send(doctors);
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

router.post("/deletedoctor", async (req, res) => {
  const doctorid = req.body.doctorid;
  try {
    await Doctor.findOneAndDelete({ _id: doctorid });
    res.status(200).send("Doctor Deleted Successfully");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

router.post("/doctorgrant", async (req, res) => {
  const doctorid = req.body.doctorid;
  const patientid = req.body.patientid;
  try {
    const doctor = await Doctor.findOne({ _id: doctorid });
    const patient = await Patient.findOne({ _id: patientid });
    let present = true;
    for (let i = 0; i < doctor.isGrant.length; i++) {
      if (doctor.isGrant[i] === patientid) {
        present = false;
        res.status(200).send("Doctor Already Granted Successfully");
        break;
      }
    }
    if (present === true) {
      doctor.isGrant.push(patientid);
      patient.isGrant.push(doctorid);
      res.status(200).send("Doctor Granted Successfully");
    }

    await doctor.save();
    await patient.save();
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wrong",
      error: error.stack,
    });
  }
});

router.post("/doctorrevoke", async (req, res) => {
  const doctorid = req.body.doctorid;
  const patientid = req.body.patientid;
  try {
    const doctor = await Doctor.findOne({ _id: doctorid });
    const patient = await Patient.findOne({ _id: patientid });
    let indexdoctor = doctor.isGrant.indexOf(patientid);
    let indexpatient = patient.isGrant.indexOf(doctorid);
    if (indexdoctor > -1 && indexpatient > -1) {
      doctor.isGrant.splice(indexdoctor, 1);
      patient.isGrant.splice(indexpatient, 1);
      res.status(200).send("Doctor Revoked Successfully");
    } else {
      res.status(200).send("Doctor Already Revoked Successfully");
    }
    await doctor.save();
    await patient.save();
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wrong",
      error: error.stack,
    });
  }
});

module.exports = router;
