const mysql=require("mysql");

const connection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"admin123",
    database:"test",
    port:3306
})

connection.connect(function(err){
    if(err){
        console.log("Can't establish Database Connection"+JSON.stringify(err))
    }else{
        console.log("Database Connection Established")
    }
})

module.exports=connection;