function rand(min = 1000, max = 3000) { // aqui to criando um numero aleatorio entre 1000 e 3000, que no caso é entre 1 e 3min.
    const num = Math.random() * (max - min) + min
    return Math.floor(num   )
}


function f1(callback) {  // aqui to chamando a função com uma função anônima.
    setTimeout(function() {  
        console.log('f1')
        if(callback) callback() // se for recebida alguma função de callback aqui, eu executo ela.
    }, rand())
    
}

function f2(callback) {
    setTimeout(function() { // eu to simulando como se tivesse buscando algo no servidor na web, por isso fiz o settimeout.
        console.log('f2')
        if(callback) callback()
    }, rand())
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3')
        if(callback) callback()
    }, rand())
    
}

f1(f1callback) // callback e uma função que pode ou não ser executada, ela server pra ditar oque vc quer executar em sequência.
function f1callback() {
    f2(f2callback) // depois do f1 quero executar o f2, fiz uma função pra cada.
}

function f2callback() {
    f3(f3callback)
}

function f3callback() {
    console.log('ola mundo')
}