/*function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

   // Object.freeze(this) // eu nao vou conseguir alterar nada no objeto abaixo do freeza aqui, funciona com array tb
}
  
//{} <- this -> this = a palavra new cria o objeto pega o this e coloca nesse objeto e ainda retorna o this, que no caso retorna dentro do objeto.
const p1 = new Pessoa('Rodrigo', 'Silva') // o this varia de acordo com quem esteja criando ele, no caso aqui o this sera o p1.
p1.nome = 'jubileu' // eu posso alterar o valor, so não posso alterar a variavel em si, valor que no caso foi nome.
//Object.freeze(p1) // usa-se para nimguem conseguir alterar o objeto
const p2 = new Pessoa('Vitoria', 'Cristina') //  aqui o this sera o p2

console.log(p1)
console.log(p2)*/








/*const pessoa = {  // objeto literal
    nome: 'Rodrigo',
    sobrenome: 'Silva'
}

const pessoa1 = new Object() // abjeto construtor
pessoa1.nome = 'rodrigo'
pessoa1.sobrenome = 'silva'
pessoa1.idade = 26

pessoa1.falarNome = function() { // quando tem função dentro de objeto se chama de método.
    return (`${this.nome} esta falando seu nome. `)
}

pessoa1.getDataNascimento = function() {
    const data = new Date()
    return data.getFullYear() - this.idade
}

console.log(pessoa1.getDataNascimento())*/

















//const chave = 'nome'
/*console.log(pessoa.nome) // anotação de ponto
console.log(pessoa1['nome']) // anotação de colchete
console.log(pessoa1[chave]) // anotação de colchete, tb posso pegar de uma variavel*/
