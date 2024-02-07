class Pessoa { 
    constructor(nome, sobrenome) { // usar constructor se precisar passar parametros para a sua class
        this.nome = nome
        this.sobrenome = sobrenome
    }
 // a class ja manda os metódos automaticamente para os prototype
    falar() {
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }

    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const p1 = new Pessoa('Rodrigo', 'silva')
const p2 = new Pessoa('Vitoria', 'silva')


console.log(p1)