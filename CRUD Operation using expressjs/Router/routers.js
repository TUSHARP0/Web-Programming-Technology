const express=require("express");
const router=express.Router();
const connection=require("../db/dbconnect")

router.get("/employees",function(req,resp){
    connection.query("select * from employee",function(err,data,fields){
        if(err){
            resp.status(500).send("Can't fetch employee data"+JSON.stringify(err));
        }else{
            resp.render("index",{empdata:data});

        }
    })
})

router.get("/displayaddform",function(req,resp){
    resp.render("addemp");
})

router.post("/insertEmp",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;
    connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,data)=>{
        if(err){
            resp.status(500).send("Can't insert Employee"+JSON.stringify(err));
        }else{
            resp.redirect("/employees");
        }
    })
})

router.get("/edit/:eid",(req,resp)=>{
    connection.query("select * from employee where empid=?",[req.params.eid],(err,data)=>{
        if(err){
            resp.status(500).send("Can't Fetch Employee Data"+JSON.stringify(err));
        }else{
            resp.render("updateemp",{emp:data[0]});
        }
    })
})

router.post("/updateEmp",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal=req.body.sal;
    connection.query("update employee set ename=?,sal=? where empid=?",[ename,sal,empid],(err,data)=>{
        if(err){
            resp.status(500).send("Can't Update Employee Data"+JSON.stringify(err));            
        }else{
            resp.redirect("/employees");
        }
    })
})

router.get("/delete/:eid",(req,resp)=>{
    connection.query("delete from employee where empid=?",[req.params.eid],(err,data)=>{
        if(err){
            resp.status(500).send("Can't Delete Data"+JSON.stringify(err));
        }else{
            resp.redirect("/employees");
        }
    })
})

router.get("/sort",function(req,resp){
    connection.query("select * from employee order by sal",function(err,data,fields){
        if(err){
            resp.status(500).send("Can't fetch employee data"+JSON.stringify(err));
        }else{
            resp.render("e",{empdata:data});

        }
    })
})

module.exports=router;