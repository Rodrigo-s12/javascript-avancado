// função construtora  -> constroi objetos, cria e retorna
// função factory -> fabrica objetos
// função contrutura -> sempre inicia a função com letra MAIUSCULA.Sempre vai ter que usar a palavra (new)

function Pessoa(nome, sobrenome) {
    // atributos ou metodos privados, usados so aqui dentro
    const ID = 1232434
    const metodo = function() {}
    
    // atributos ou métodos publicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ' ' + this.sobrenome)
    }
}

const p1 = new Pessoa('rodrigo', 'silva')
const p2 = new Pessoa('vitoria', 'cristina')
p1.metodo()

