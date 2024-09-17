//Questão 04
let qntMaça = Math.floor(Math.random()*(20-0))
qntMaça
if(qntMaça>=12){
    console.log(`Você pediu ${qntMaça} e cada maça vai sair por 1,90, então o total vai ficar ${Math.round(qntMaça * 1.90)} reais`)
}
else{
    console.log(`Você pediu ${qntMaça} e cada maça vai sari por 2,50, então o total vai ficar ${Math.round(qntMaça * 2.50)} reais`)
}