const express=require("express");
const app=express();
const port=process.env.PORT || 8080;

app.get('/',(req,res)=>{
    console.log(req.rawHeaders[15]);
    res.sendFile(__dirname+"/homePage.html");
})

app.listen(port,()=>{
    console.log("App is running.");
})