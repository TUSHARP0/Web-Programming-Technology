function EvenNumber(){
    var a= parseInt(document.getElementById("num").value);
    while(a>0){
        console.log("in while",a)
        if(a%2==0){
            document.getElementById("mydiv").innerHTML+=a; 
        }
        a=a-1;
    }
}
