const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}

const jogar = {
    jogar() {
        console.log(`${this.nome} está jogando`)
    }
}

const pessoaPrototype = Object.assign({}, falar, comer, jogar) // criei um obejto e peguei todas as variaveis e to usando como prototype

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Boy', 'Silva')
const p2 = criaPessoa('gael', 'lindo')
console.log(p1, p2)