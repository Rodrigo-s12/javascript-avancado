class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome 
    }
// get e set é mais usado quando queremos privar algum metodo para não ser alterado
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(valor) { // o set sempre recebe um valor
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join()
    }
}
const p1 = new Pessoa('Rodrigo', 'silva')
p1.nomeCompleto = 'Rodrigo silva santos' // set
console.log(p1)