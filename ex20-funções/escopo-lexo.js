const nome = 'rodrigo' // aqui eu posso acessar a variavel de fora da função, pq ela e prima da função

function falaNome() {
    console.log(nome)
}


function usaFalaNome() { // mesmo eu criando outra variavel, ele vai lembrar aonde ela foi declarada antes e quais são os vizinhos dela
    const nome = 'luiz'
    falaNome()
}
usaFalaNome()
