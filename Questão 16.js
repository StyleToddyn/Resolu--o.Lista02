//Questão 16
let idadeHomem1 =20;
let idadeHomem2 =22;
let idadeMulher1 = 24;
let idadeMulher2 = 22;

if(idadeHomem1 > idadeHomem2 && idadeMulher1<idadeMulher2){
    console.log(idadeHomem1+idadeMulher1)
    console.log(idadeHomem2*idadeMulher2)
}
else if(idadeHomem1 > idadeHomem2 && idadeMulher1>idadeMulher2){
    console.log(idadeHomem1+idadeMulher2)
    console.log(idadeHomem2*idadeMulher1)

}
else if(idadeHomem1 < idadeHomem2 && idadeMulher1>idadeMulher2){
    console.log(idadeHomem2+idadeMulher2)
    console.log(idadeHomem1*idadeMulher1)

}
else{
    console.log(idadeHomem1+idadeMulher2)
    console.log(idadeHomem2*idadeMulher1)
}

