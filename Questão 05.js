//Questão 05
let nota1 = Math.floor(Math.random()*(10-0))
let nota2 = Math.floor(Math.random()*(10-0))

console.log(`Sua média é ${(nota1 + nota2)/2} `)
if(((nota1 + nota2)/2) >=7){
    console.log("Você foi aprovado ")
}
else{
    console.log("Você foi reprovado")
}