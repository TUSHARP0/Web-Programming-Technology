const express=require("express");
const app=express();
const cors=require("cors")
const bodyparser=require("body-parser");
const router=require("./router/router");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers","Content-Type");
    res.setHeader("Access-Control-Allow-Credentials",true);
    next();
})

app.use("/",router);

app.options("*",cors());

app.listen(3002,function(){
    console.log("3002 post is allocated to the server");
})

module.exports=app;