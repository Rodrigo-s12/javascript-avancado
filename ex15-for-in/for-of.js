const nome = ['luiz', 'rodrigo', 'vinicios']

// for classico => Geralmente com iteraveis (array ou strings)
// for in => retorna o indice ou chave(array, string ou abject)
// for of => retorna valor em si (iteraveis, arrays e strings)


for (let valor of nome) { // pega o valor, usado quando voce precisar pegar precisamente o valor
    console.log(valor) // aqui eu so preciso colocar o valor pra pegar cada nome
}
console.log('---------------') // os dois conseguimos pegar o valor e o indice
for(let indice in nome) {   // pega o indice , usado quando voce precisar pegar precisamente o indice
    console.log(nome[indice])  // valor mais o indice para poder pegar cada nome
}