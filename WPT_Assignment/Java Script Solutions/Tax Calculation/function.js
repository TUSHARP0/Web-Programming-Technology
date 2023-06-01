exports.taxCalculation=function(a){
var tax=0;
if(a>50000 && a<100000){
    tax=a*2/100;
}
else if(a>100000  && a<200000){
    tax=a*5/100;
}
else{
    tax=a*8/100;
}
return tax;
}