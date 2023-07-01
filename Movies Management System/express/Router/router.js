const express=require("express");
const router=express.Router();
const connection=require("../db/dbconnection");

router.get("/movies",(req,resp)=>{
    connection.query("select * from movie",(err,data)=>{
        if(err){
            resp.status(500).send("Can't Fetch Data"+JSON.stringify(err))
        }else{
            resp.send(data);
        }
    })
})

router.get("/movies/movie/:mid",(req,resp)=>{
    connection.query("select * from movie where mid=?",[req.params.mid],(err,data)=>{
        if(err){
            resp.status(500).send("Can't Fetch Data"+JSON.stringify(err))
        }else{
            resp.send(data[0]);
        }
    })
})

router.post("/movies/movie/:mid",(req,resp)=>{
    var mid=req.body.mid;
    var mname=req.body.mname;
    var price=req.body.price;
    connection.query("insert into movie values(?,?,?)",[mid,mname,price],(err,data)=>{
        if(err){
            resp.status(500).send("Can't Fetch Data"+JSON.stringify(err))
        }else{
            if(data.affectedRows>0){
                resp.send("{'msg':'Inserted Succesfully'}");
            }else{
                resp.send("{'msg':'Insertion Failed'}");
            }
        }
    })
})

router.put("/movies/movie/:mid",(req,resp)=>{
    var mid=req.body.mid;
    var mname=req.body.mname;
    var price=req.body.price;
    connection.query("update movie set mname=?,price=? where mid=?",[mname,price,mid],(err,data)=>{
        if(err){
            resp.status(500).send("Can't Fetch Data"+JSON.stringify(err))
        }else{
            if(data.affectedRows>0){
                resp.send("{'msg':'Updated Succesfully'}");
            }else{
                resp.send("{'msg':'Updation Failed'}");
            }
        }
    })
})

router.delete("/movies/movie/:mid",(req,resp)=>{
    connection.query("delete from movie where mid=?",[req.params.mid],(err,data)=>{
        if(err){
            resp.status(500).send("Can't Fetch Data"+JSON.stringify(err))
        }else{
            if(data.affectedRows>0){
                resp.send("{'msg':'Deleted Succesfully'}");
            }else{
                resp.send("{'msg':'Deletion Failed'}");
            }
        }
    })
})

module.exports=router;