operation=()=>{
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var op=document.getElementById("operation");
    var pos=op.selectedIndex;
    var calc=op.options[pos].value;
    var c;
    switch(calc){
        case "add":
            c=0;
            console.log("in add");
            c=a+b;
            
            break;
        
        case "sub":
            c=0;

            console.log("in sub");
            c=a-b;
          
            break;

        case "mul":
            c=0;

            console.log("in mul");
            c=a*b;
   
            break;

        case "div":
            c=0;

            console.log("in div");
            c=a/b;
           
            break;
    }
document.getElementById("mydiv").innerHTML+=c+"<br>"
}
