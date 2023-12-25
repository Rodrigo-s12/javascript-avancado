function mostrarHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-br', { // aqui eu mudei o formato da hora para 24 hrs
        hour12: false
    })
    
    
}

const timer = setInterval(function() {  // vai ficar mostrando a hora de 1 em 1 segundo
    console.log(mostrarHora())}, 1000)

    setTimeout(function() {  // quando der 3 segundo vai para de contar, to usando ua função anônima tb
        clearInterval(timer)}, 3000)
    
    setTimeout(function() { // também posso usar para aparecer uma mensagem quando a contagem for encerrada, quando der 5 segundos vai aparecer a mensagem.
        console.log('ola mundo')
    }, 4000)





