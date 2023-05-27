function Operation(){
    var a= parseInt(document.getElementById("num").value);
    for(var i=1;i<=10;i++){
        var c=a*i;
        document.getElementById("mydiv").innerHTML+=a+"*"+i+"="+c+"<br>";
    }
}
