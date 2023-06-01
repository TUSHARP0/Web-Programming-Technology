const http=require("http");
const url=require("url");
const fs=require("fs");
const m1=require("./function");

var server= http.createServer(function(req,resp){
    var u=url.parse(req.url,true);
    var amt=parseInt(u.query.prn);
    resp.writeHeader(200,{"content-type":"text/html"});
    switch(u.pathname){
        case "/disp":
            var rs= fs.createReadStream("./display.html");
            rs.pipe(resp);
            break;
        
        case "/show_amount":
            if(u.query.btn==="tax"){
                var v=m1.taxCalculation(amt);
                resp.write("Tax Amount: "+v);
                
            }
            resp.end();
            break; 

        default:
            resp.write("Enter /disp");
            resp.end();
    }
})
server.listen(3002,function(){
    console.log("server started at port 3002");
})