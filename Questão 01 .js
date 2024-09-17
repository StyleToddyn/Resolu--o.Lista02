//Questão 01
//a)
var A = new Boolean(true)
var B = new Boolean(true)
var C = new Boolean(false)

if((A ==true && B==true) || (A==true || B==true)){
    console.log(1)
}
else{
    console.log(2)
}
//b)
if((A==true || B==true) && (A==true && C==true)){
    console.log(1)
}
else{
    console.log(2)
}
//c)
if(A==true || C==true && B==true || A==true && B!=true){
    console.log(1)
}
else{
    console.log(2)
}