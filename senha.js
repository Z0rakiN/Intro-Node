let entrada = require('prompt-sync')();

let senha = '12345'

for (let i = 1; i < 4; i++) {
    let senhaDigitada = entrada("Digite sua senha:")
    if (senha === senhaDigitada) {
        console.log("Acesso autorizado!")
        break
    } else {
        console.log("Senha inválida")
    }

    if(i === 3) console.log("Você atingiu o número máximo de tentativas!")
}

