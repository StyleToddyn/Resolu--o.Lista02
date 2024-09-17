//Questão 14
let qntAtualEstoque = 980;
let qntMaxEstoque = 2000;
let qntMinEstoque = 200;
let qntmediaEstoque = (qntMaxEstoque+qntMinEstoque)/2
if(qntAtualEstoque > qntmediaEstoque){
    console.log(`Estoque:${qntAtualEstoque}`)
    console.log("Não efutuar acompra")
}
else{
    console.log(`Estoque:${qntAtualEstoque}`)
    console.log("Efetuar compra")
}