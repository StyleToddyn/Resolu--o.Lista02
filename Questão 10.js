let horas = Math.floor(Math.random()*(220 - 0))
if(horas > 160){
    let horasExtras = horas - 160
    let salarioRegular  = 5.50 * (160)

    let salarioExtra = (5.50 + (5.50*50)/100) * horasExtras
    let salarioFinal = salarioRegular + salarioExtra
    console.log(salarioFinal)
}
else{
    let salarioRegular  = 5.50 * (160)
    console.log(salarioRegular)


    

}
























