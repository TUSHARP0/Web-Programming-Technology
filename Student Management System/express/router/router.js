const express=require("express");
const router=express.Router();
const connection=require("../db/dbconnect");

router.get("/students",(req,resp)=>{
    connection.query("select * from students",(err,data)=>{
        if(err){
            resp.status(500).send("Can't Fetch Data"+JSON.stringify(err));
        }else{
            resp.send(data);
        }
    })
})

router.get("/students/student/:stid",(req,resp)=>{
    connection.query("select * from students where stid=?",[req.params.stid],(err,data)=>{
        if(err){
            resp.status(500).send("Can't fetch data"+JSON.stringify(err));
        }else{
            resp.send(data[0]);
        }
    })
})

router.post("/students/student/:stid",(req,resp)=>{
    var stid=req.body.stid;
    var stname=req.body.stname;
    var stlocation=req.body.stlocation;
    var stcourse=req.body.stcourse;

    connection.query("insert into students values(?,?,?,?)",[stid,stname,stlocation,stcourse],(err,data)=>{
        if(err){
            resp.status(500).send("Can't Insert"+JSON.stringify(err))
        }else{
            if(data.affectedRows>0){
                resp.send("{'msg':'Inserted Successfully'}");
            }else{
                resp.send("{'msg':'Insertion Failed'}");
            }
        }
    })
})

router.put("/students/student/:stid",(req,resp)=>{
    var stid=req.body.stid;
    var stname=req.body.stname;
    var stloc=req.body.stlocation;
    var course=req.body.stcourse;
    connection.query("update students set stname=?,stlocation=?,stcourse=? where stid=?",[stname,stloc,course,stid],(err,data)=>{
        if(err){
            resp.status(500).send("Can't Update"+JSON.stringify(err));
        }else{
            if(data.affectedRows>0){
                resp.send("{'msg':'Updated Successfully'}");
            }else{
                resp.send("{'msg':'Updation Failed'}");
            }
        }
    })
})

router.delete("/students/student/:stid",(req,resp)=>{
    connection.query("delete from students where stid=?",[req.params.stid],(err,data)=>{
        if(err){
            resp.status(500).send("Can't Delete"+JSON.stringify(err));
        }else{
            if(data.affectedRows>0){
                resp.send("{'msg':'Deleted Successfully'}");
            }else{
                resp.send("{'msg':'Deletion Failed'}");
            }
        }
    })
})

module.exports=router;