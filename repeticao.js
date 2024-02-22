let entrada = require('prompt-sync')();  

// let idade = entrada('Digite sua idade: ')
// if(idade < 18){
//     console.log("Menor de idade")
// } else if(idade == 18){
//     console.log("Tem 18")
// } else {
//     console.log("Maior")
// }

let num = parseInt(entrada("Digite um número para visualizar a sua tabuada!"))

function tabuada(value, index){
    if(index > 10) return
    console.log(`${value} x ${index} = ${value*index}`)
    tabuada(value, index+1)
}

tabuada(num, 0);