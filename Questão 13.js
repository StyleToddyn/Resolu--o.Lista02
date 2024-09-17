//Questão 13
let numeroConta  = '119.223';
let saldo = 15000;
let debito = 650000;
let credito = 0;
let saldoFinal = saldo-debito+credito;

if(saldoFinal > 0){
    console.log(`Saldo positivo`)
    console.log(`Saldo de ${saldoFinal}`)
}
else{
    console.log("Saldo negativo")
    console.log(`Saldo de ${saldoFinal}`)
}

