// produto -> aumento, desconto
// camiseta = cor, caneca = material

function Produto(nome, preco) { // criei essa função pata todos os produtos
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia 
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome,preco, cor) {
    Produto.call(this, nome, preco) // aqui eu to ligando a função produto na função camiseta, vão ter a mesma funcionalidade as duas
    this.cor = cor // vai erdar tudo do produto, mais pode ter algo especifico, vai ter algo a mais que a propriedade original
}


Camiseta.prototype = Object.create(Produto.prototype) // aqui eu to pegando o prototype de produto
Camiseta.prototype.constructor = Camiseta // to transformando o construtor do prototype, como eu setei o o prototype de produto para camiseta, o construtor ficou sendo o produto, mas tem que ser camiseta

Camiseta.prototype.aumento = function(percentual) { // aqui eu sobreescrevendo o valor de aumento para camiseta, agora esta em porcentagem
    this.preco = this.preco + (this.preco * (percentual / 100)) 
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco) // to herdando tudo do produto
    this.material = material
    

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if(valor !== 'number') return
            estoque = valor
        }
    }) 
        
    
}

Caneca.prototype = Object.create(Produto.prototype) // to linkando os prototype
Caneca.prototype.constructor = Caneca // to colocando como construtor a caneca se não fica o produto, pq estamos herdando tudo dele



const produto = new Produto('gen', 111)
const camiseta = new Camiseta('regata', 50, 'preta')
const caneca = new Caneca('caneca', 20, 'plastico', 8)

console.log(produto)
console.log(camiseta)
console.log(caneca)