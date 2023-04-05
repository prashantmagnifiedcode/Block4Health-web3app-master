const express = require("express");
const connectDB = require('./config/config');
const dotenv = require('dotenv');
const morgan = require('morgan');

require("colors");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
 
app.use('/api/patients', require('./routes/patientRoutes'));
app.use('/api/doctors', require('./routes/HospitalsRoutes'));
app.use('/api/Doctors', require('./routes/HospitalDoctorRouter'));
app.use('/api/admin', require('./routes/adminRoutes'));


// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'));
//     const path = require('path');
//     app.get("*",(req,res) => {
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//     })
// }else{
//     app.get('/',(req,res) => {
//         res.send('<h1>Hello From Node Server Via Nodemon</h1>');
//     });
// }

app.get('/',(req,res) => {
    res.send('<h1>Hello From Node Server Via Nodemon</h1>');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server Running On ${process.env.NODE_ENV} Mode And On Port ${port}`.bgMagenta.white);
});