function meuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []


    function receberEventoForm (evento) {
        evento.preventDefault()
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const altura = form.querySelector('.altura')
        const peso = form.querySelector('.peso')
        
        pessoas.push({
            nome: nome.value,
            sobrenome:sobrenome.value,
            altura: altura.value,
            peso: peso.value    
        })
        console.log(pessoas)
        resultado.innerHTML += `<p>nome: ${nome.value} ${sobrenome.value}  altura: ${altura.value} peso: ${peso.value}Kg</p>`
    } 

    
    form.addEventListener('submit', receberEventoForm)

}
meuEscopo()