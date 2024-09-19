const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB_url = process.env.MONGO_URL;


const connectDB=async()=>{
    try {
       const con = await mongoose.connect(mongoDB_url,); 
       console.log(`Connection successful at host ${con.connection.host}`) 
    } catch (error) {
        console.log(error,"###########################")
    }
}
 module.exports = connectDB;
