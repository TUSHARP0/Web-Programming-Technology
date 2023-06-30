function validate(){
    var name=document.getElementById("nm").value;
    var date=document.getElementById("dt").value;
    var lno=parseInt(document.getElementById("lu").value);
    var email=document.getElementById("mail").value;
    var gender=document.getElementsByName("rd");
    // alert(gender)
    for(i=0;i<gender.length;i++){
        if(gender[i].checked){
            op=gender[i].value;
        }
    }
    // alert(op);
    var food=[];
    var ff=document.getElementsByName("chk");
    // alert(ff);
    for(i=0;i<ff.length;i++){
        if(ff[i].checked){
            food.push(ff[i].value);
        }
    }
    // alert(food);
    // document.getElementById("mydiv").innerHTML="Name : "+name+"<br>Birth Date : "+date+"<br>Email : "+email+"<br>Gender : "+op+"<br>Lucky Number : "+lno+"<br>Favourite Food : "+food;
   patt=/^(?=.*[A-Za-z])$/;
   if(name.length<10 && lno.toString().length<4){
    document.getElementById("mydiv").innerHTML="Name : "+name+"<br>Birth Date : "+date+"<br>Email : "+email+"<br>Gender : "+op+"<br>Lucky Number : "+lno+"<br>Favourite Food : "+food;
   }else{
    document.getElementById("mydiv").innerHTML="Invalid Data"
    
   }

}