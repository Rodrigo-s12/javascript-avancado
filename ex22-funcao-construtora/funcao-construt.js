// função construtora  -> constroi objetos, cria e retorna
// função factory -> fabrica objetos
// função contrutura -> sempre inicia a função ocm letra MAIUSCULA.Sempre vai ter que usar a palavra (new)

function Pessoa(nome, sobrenome) {
    // atributos ou metodos privdos, usados so aqui dentro
    const ID = 1232434
    const metodo = function() {}
    
    // atributos oumétodos publicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ' : sou um método')
    }
}

const p1 = new Pessoa('rodrigo', 'silva')
const p2 = new Pessoa('vitoria', 'cristina')
p1.metodo()

