const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const router=require("./Router/router");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers","Content-Type");
    res.setHeader("Access-Control-Allow-Credentials",true);
    next();
})

app.use("/",router);

app.listen(3002,function(){
    console.log("3002 port is allocated to the server");
})

module.exports=app;