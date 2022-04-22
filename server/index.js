require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser= require("body-parser");


//database Connection
connection();
// middleware
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({
    extended:true,
}));

//routes
app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
console.log(process.env.HOST);
const port = process.env.PORT||8080;
app.listen(port,() =>console.log(`Listening on port ${port}...`));

mongoose.connect("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false", {useNewUrlParser: true});
//mongoose.set("useCreateIndex",true);

const adminSchema = new mongoose.Schema({
   email : String,
   password : String,
});

// axios.get("http://localhost:8080/api/auth",{
    
// });