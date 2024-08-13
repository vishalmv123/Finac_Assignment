
const bodyParser = require('body-parser');
const user = require('./routes/UserRoutes') 
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1' , user)

module.exports = app;