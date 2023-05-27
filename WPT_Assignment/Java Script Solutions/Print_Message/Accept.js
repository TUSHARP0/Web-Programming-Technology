function Accept(){
    var a=parseInt(document.getElementById("num").value);
    var b=document.getElementById("msg").value;

    for(var i=0;i<=a;i++){
        document.getElementById("mydiv").innerHTML+=b+"<br>";
    }
}
