function mostrarData() {
    let data = new Date()

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    })
    
    
}
console.log(mostrarData())
const timer = setInterval(function() {
    console.log(mostrarData())
})