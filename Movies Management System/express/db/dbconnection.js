const mysql = require("mysql");

const mysqlconnection=mysql.createConnection({
 host:"127.0.0.1",
 user:"root",
 password:"admin123",
 database:"test",
 port:3306   
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log("Can't estaslish Connection "+JSON.stringify(err))
    }else{
        console.log("Connection Established");
    }
})

module.exports=mysqlconnection;