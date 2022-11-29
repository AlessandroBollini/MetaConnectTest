const express=require("express");
const app=express();
const port=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/homePage.html");
})

app.listen(port,()=>{
    console.log("App is running.");
})