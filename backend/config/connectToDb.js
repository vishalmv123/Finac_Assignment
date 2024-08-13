const mongoose = require('mongoose');
require('dotenv').config();


const connectToDb = () => {
  mongoose
    .connect( "mongodb+srv://pradeepbr:CND7KiAn5T42CtUb@cluster0.m0gzd.mongodb.net/finacAssignment?retryWrites=true&w=majority&appName=Cluster0", {

   
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};


module.exports = connectToDb;