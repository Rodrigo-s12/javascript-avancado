function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) { // fiz uma função de desconto
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) { // fiz uma função de aumento
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('camiseta', 50)

const p2 = {
    nome: 'caneca',
    preco: 20
}

//             oque quer mudar,   de quem vc quer usar
Object.setPrototypeOf(p2, Produto.prototype) // quero que meu p2 use o prototype de produto
//aqui eu aproveitei as duas função de prototype de produto para o mey outro objeto
p2.aumento(10)

const p3 = Object.create(Produto.prototype) // criei objeto e ja setei o prototype do produto
p3.nome = 'eliabin'
p3.preco = 50


p3.aumento(10)
console.log(p3)

//p1.desconto(100)
//p1.aumento(100)
console.log(p1)
console.log(p2)


















/*const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

const objC = {
    chaveC: 'C'
}

Object.setPrototypeOf(objB, objA) // eu to colocando o prototype do objeto A, no objB, set e o que configura o prototype
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveC, objC.chaveC)*/