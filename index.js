require('dotenv').config();
const express = require('express');
const app = express();


app.get("/", (req, res) =>{
    res.send("Yo whats up i am talking from server what do you need");
})

app.listen(process.env.PORT,()=>{
    console.log("Yo whats up i am in the logs same talking from the server");
})