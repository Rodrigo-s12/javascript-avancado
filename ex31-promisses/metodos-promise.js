function rand(min, max) { // fiz uma função para pegar um número aleatorio em minuto
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') { 
            reject('CAI NO ERRO')
            return
        }  // quando der um erro ele vai rejeitar
        
        
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })    

} 

const promise = [
    //'primeiro valor',
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 1000),
    //esperaAi(2000, 2000),
    //'outro valor'
]

function baixaPagina() {
    const emCache = false

    if(emCache) {
        return Promise.resolve('Página em cache') // pode retornar uma promesa resolvida de cara, ou um reject
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
.then(valor => {
    console.log(valor)
})
.catch(e => console.log(e))






/*Promise.race(promise) // vai sempre entregar o primeiro valor resolvido
.then(valor => {
    console.log(valor)
}).catch(error => {
    console.log(error)
})*/





/*Promise.all(promise) // resolve todas as promises, quando vc quer executar algo especifico
.then(valor => {
    console.log(valor)
}).catch(error => {
    console.log(error)
})*/