const express = require('express')

const app = express()

const porta = 3333

app.listen(porta, ()=>{
    console.log('Servidor Inciado com sucesso na porta', porta)
})

app.get('/', (request, response) => {
    response.send('Hello World!')
})