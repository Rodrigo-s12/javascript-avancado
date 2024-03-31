function rand(min, max) { // fiz uma função para pegar um número aleatorio em minuto
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')  // quando der um erro ele vai rejeitar
        
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })    


}   

esperaAi('Conexão com o BD', rand(1, 3)).then((resposta) => {
    console.log(resposta)
    return esperaAi('Buscando dados da BASE', rand(1, 3)) // a frase2 so sera executada depois que a frase 1 for executada

})
.then(resposta => {
    console.log(resposta)
    return esperaAi(22222, rand(1, 3))
})
.then(resposta => {
    console.log(resposta)
}).then(() => {
    console.log('Exibe dados na tela')
}).catch(e => {
    console.log('ERRO:', e)
})
 // sempre que chamar resolve o método then(), será executado, ele recebe uma função, dentro posso retornar outra promisse de dentro do then, para pegar o dado dessa promisse que eu fiz, eu preciso fazer outro then.

 // o reject e usa do quando tem um erro vai direto para o catch

 // todo resolve cai no then()

 // todo reject cai no cacth()

 // é usado quando não temos certeza de  quando vai terminar