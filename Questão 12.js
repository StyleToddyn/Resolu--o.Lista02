//Questão 12
let salarioFixo = 1440;
let qntVendas = Math.floor(Math.random()*(2000-0))
qntVendas
if(qntVendas < 1500){
    salarioFinal = salarioFixo + (qntVendas *3)/100
    console.log(salarioFinal)
}
else{
    salarioFinal = salarioFixo + (((qntVendas-1500) * 5)/100) + (1500 *3)/100
    console.log(salarioFinal)
}