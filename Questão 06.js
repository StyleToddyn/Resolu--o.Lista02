//Questão 06
const now = new Date()
const anoAtual = now.getFullYear();

let nasc = Math.floor(Math.random()*(2024-1900)+1900 )
console.log(nasc)

if(nasc>=16){
    console.log(`De acordo com sua idade, ${anoAtual - nasc} anos, vc já pode votar`)
}
else{
    console.log(`Você não pode votar, pois sua idade é ${anoAtual - nasc} anos `)
}
