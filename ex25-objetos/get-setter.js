function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    //this.estoque = estoque
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {  // aqui eu to pegando o estoque, esse metodo faz varias funções
        enumerable: true, // aqui eu so vou exibir o estoque sem valor
        configurable: true, // controla se o método pode ou não ser configuravel, no caso cria outro metodo igual a esse com outras configurações e tb se for false eu nem posso apagar.
        get: function() { // so pegar o valor do momento e exibir ele, essa a função do get 
            return estoquePrivado
        },

        set: function(valor) { // ele serve para setar o valor, voce consegue fazer tudo, modificar o valor, fazer como se fosse uma validação pra aceitar so numeros.
            if(typeof valor !== 'number') {
                console.log('digite um numero')
                return

                
            }
            estoquePrivado = valor 

            
            

        }

    })  

    
        

    
}

const p1 = new Produto('camiseta', 30, 3)
p1.estoque = 10
//console.log(p1) // mostrar as chaves do objeto enumeraveis(object.keys(p1))
console.log(p1.estoque)