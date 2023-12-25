const pessoa = {
        nome: 'luiz',
    sobrenome: 'santos',
    idade: 25,
    endereço: {
        rua: 'Av Brasil',
        numero: 10
    }
}
// atribuição via desestruração com objeto
const {nome = 'rodrigo', sobrenome, idade, endereço} = pessoa // eu posso atribuir um valor para a variavel, ele vai aparecer caso a variavel n funcione
console.log(nome, sobrenome, idade, endereço)
