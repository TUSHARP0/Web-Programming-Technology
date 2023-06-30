display=()=>{
    var id=parseInt(document.getElementById("oid").value)
    var name=document.getElementById("nm").value;
    var total=parseInt(document.getElementById("total").value)
    // if(name.length<5){
    //     document.getElementById("err1").innerHTML="Must be greater than 5";
    //     return false;
    // }else{
    //     document.getElementById("err1").innerHTML="";
    //     var bdate=document.getElementById("bd").value;
    // var sdate=document.getElementById("sd").value;
    // bdate1=new Date(bdate);
    // sdate1=new Date(sdate);
    // var diff=(bdate1-sdate1);
    // var diff1=(diff/(1000*60*60*24));
    // if(bdate1 < sdate1){
    //     alert("1")
    //     documentdocument.getElementById("err2").innerHTML="Billing date must be less than shipping date";
    // }else{
    //     alert("2")
    //     documentdocument.getElementById("err2").innerHTML="";
    //     document.getElementById("mydiv").innerHTML="Order Id: "+id;
    // }
    
    // }
    var bdate=document.getElementById("bd").value;
    var sdate=document.getElementById("sd").value;
    bdate1=new Date(bdate);
    sdate1=new Date(sdate);
    var diff=(bdate1-sdate1);
    var diff1=(diff/(1000*60*60*24));
    if(name.length>5 && diff1>180 &&diff1<0){
        document.getElementById("mydiv").innerHTML="Invalid Data";
    }else{
        document.getElementById("mydiv").innerHTML="Order Id: "+id+"<br>Customer Name: "+name+"<br>Billing Date : "+bdate+"<br>Shipping Date : "+sdate+"<br>Order Total : "+total;
    }
}