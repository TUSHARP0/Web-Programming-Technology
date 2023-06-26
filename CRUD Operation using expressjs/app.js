const express=require("express")
var app=express();
const path=require("path")
const bodyparser=require("body-parser");
const routerapp=require("./Router/routers")

app.use(bodyparser.urlencoded({extended:false}));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"public")))

app.use("/css",express.static(path.resolve(__dirname,"/public/css")));
app.use("/js",express.static(path.resolve(__dirname,"/public/js")));
app.use("/images",express.static(path.resolve(__dirname,"/public/images")));

app.use("/",routerapp);  

app.listen(3003,function(){
    console.log("3003 port is allocated to server");
})

module.exports=app;