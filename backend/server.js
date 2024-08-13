const app = require('./app');
const connectToDb = require('./config/connectToDb');
require('dotenv').config();

connectToDb();
const PORT =  5000
app.listen(PORT , (req , res)=>{
    console.log("Server is running");
})