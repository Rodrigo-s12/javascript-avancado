// defineProperty = 


function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    //this.estoque = estoque
 
    Object.defineProperty(this, 'estoque', {  // aqui eu to pegando o estoque, esse metodo faz varias funções
        enumerable: true, // aqui eu so vou exibir o estoque sem valor
        value: estoque, // eu to pegando o valor que eu to recebendo que no caso e 3 
        writable: false, // controla se o valor pode ou não ser alterado
        configurable: true // controla se o método pode ou não ser configuravel, no caso cria outro metodo igual a esse com outras configurações e tb se for false eu nem posso apagar.

    })  

    Object.defineProperties(this, { // aqui pode colocar mais de um
        nome: {
            enumerable: true, // aqui eu so vou exibir o estoque sem valor
            value: nome, // eu to pegando o valor que eu to recebendo que no caso e 3 
            writable: false, // controla se o valor pode ou não ser alterado
            configurable: false // controla se o método pode ou não ser configuravel, no caso cria outro metodo igual a esse com outras configurações e tb se for false eu nem posso apagar. 
        },
        preco: {
            enumerable: true, // aqui eu so vou exibir o estoque sem valor
            value: preco, // eu to pegando o valor que eu to recebendo que no caso e 3 
            writable: false, // controla se o valor pode ou não ser alterado
            configurable: true // controla se o método pode ou não ser configuravel, no caso cria outro metodo igual a esse com outras configurações e tb se for false eu nem posso apagar.
        }
    })
        

    
}

const p1 = new Produto('camiseta', 30, 3)

console.log(p1) // mostrar as chaves do objeto enumeraveis(object.keys(p1))