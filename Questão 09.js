//Questão 09
let start = Math.floor(Math.random()*(24-0))
let end   = Math.floor(Math.random()*(24-0))
start
end

if(end< start){
    console.log(`${(24 - start) + end} horas jogadas;O jogo acabou no dia seguinte`)
}
else{
    console.log(` ${end - start} horas jogadas;O jogo acabou no mesmo dia `)
}