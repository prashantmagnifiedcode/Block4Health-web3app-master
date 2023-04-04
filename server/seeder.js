const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('colors');
const connectDB = require('./config/config');
const Admin = require('./models/AdminModel');
const Admins = require('./data/admin-data');

//config dotenv and mongodb conn file
dotenv.config();
connectDB();

//import data
const importData = async () => {
     try {
        await Admin.deleteMany();
        const sampleData = Admins.map(admin => {return{...admin}});
        await Admin.insertMany(sampleData);
        console.log('Data Imported Of Admin'.bgGreen.white);
        process.exit();
     } catch (error) {
        console.log(`${error}`.bgRed.white);
        process.exit(1);
     }
}

const dataDestroy = () => {};

if(process.argv[2] === '-d'){
    dataDestroy();
}else{
    importData();
}