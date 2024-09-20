//Questão 06
const now = new Date()
const anoAtual = now.getFullYear();

let nasc = 2007
let idade = anoAtual - nasc
console.log(nasc)

if(idade>=16){
    console.log(`De acordo com sua idade, ${idade} anos, vc já pode votar`)
}
else{
    console.log(`Você não pode votar, pois sua idade é ${idade} anos `)
}
