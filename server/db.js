const moongoose = require("mongoose");

module.exports = () =>{
    const connectionParms = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try{
        moongoose.connect(process.env.DB,connectionParms);
        console.log("Connected to Database Successfully")
    }catch (error) {
        console.log(error);
        console.log("Could not Connect to Database");

    }
};