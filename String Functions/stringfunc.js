// String_Manipulation.js

display=()=>{
    // alert("1")
    str=document.getElementById("string").value;
    // alert(str)
    sub=document.getElementById("substring").value;
    // alert(sub)
    replace=document.getElementById("replace").value;
    // alert(replace)
    var po=0;
    // alert(po)
    var arr=document.getElementsByName("rad");
    // alert(arr)
    for(var i=0;i<arr.length;i++){
        if(arr[i].checked){
            // alert(arr[i].value)
            po=arr[i].value;
        }
    }
    // alert(po)
    switch(po){
        case "search":
            if(str.includes(sub)){
                document.getElementById("mydiv").innerHTML="Sub-String Found";
            }else{
                document.getElementById("mydiv").innerHTML="Sub-String Not Found";
            }
            break;

        case "upper":
            ans=str.toUpperCase();
            document.getElementById("mydiv").innerHTML=ans;
            break;      

        case "lower":
            ans=str.toLowerCase();
            document.getElementById("mydiv").innerHTML=ans;
            break;

        case "trim":
            ans=str.trim();
            document.getElementById("mydiv").innerHTML=ans;
        break;

        case "concat":
            ans=str.concat(sub);
            document.getElementById("mydiv").innerHTML=ans;
            break;

        case "rep":
            text=str;
            ans=text.replace(str,replace)
            document.getElementById("mydiv").innerHTML=ans;
        break;
    }
}