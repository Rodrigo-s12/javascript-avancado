function mostrarHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    })
    
    
}

const timer = setInterval(function() {
    console.log(mostrarHora())}, 1000)

    setTimeout(function() {
        console.log(timer)}, 3000)




