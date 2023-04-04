const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const {v4 : uuidv4} = require('uuid')
const HospitalDoctor = require("../models/DoctorModal");

//doctor registeration
router.post("/RegisterDoctor", async (req, res) => {
  const { HospitalID, DoctorPubliceKey } = req.body;
   
  try {
     const userId = uuidv4()
     console.log("userid",userId)
     const salt = await bcrypt.genSalt(10);
     const Doctorkey=DoctorPubliceKey+userId
     const DoctorHashkey = await bcrypt.hash(Doctorkey, salt);
     console.log(DoctorHashkey);
     const newHospitalDoctor = new HospitalDoctor({
      HospitalID,
      DoctorPubliceKey,
      DoctorHashkey
     });
    newHospitalDoctor.save();
    res.status(200).json({
      success: true,
      message: "HospitalDoctor Register Success",
      userId
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

//for docotor
router.post("/Doctorlogin", async (req, res) => {
  const { userId, DoctorPubliceKey } = req.body;

  // console.log("hu",MetaPrivateKey)

  try {
    const doctor = await HospitalDoctor.find({ DoctorPubliceKey });
    console.log(doctor);
   const DoctorKey=DoctorPubliceKey+userId
    const verifyPassword = await bcrypt.compare(
      DoctorKey,
      doctor[0].DoctorHashkey
    );
    console.log(doctor, verifyPassword);
    if (!verifyPassword) {
      res.status(400).json({
        message: "Doctor Login Auth Failed",
      });
    }
    if (doctor.length > 0) {
      const currentDoctor = {
         DoctorPubliceKey: doctor[0].DoctorPubliceKey,
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


module.exports = router;
