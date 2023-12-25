function criaPessoa(nome, sobrenome, altura, peso) {
    return { // obejto
        nome , sobrenome,
        fala(assunto) { // quando a função e criada dentro do objeto ela é chamada de método.
            return `${this.nome} está ${assunto}` 

        },

        get nomeCompleto() { // to pegando o nome completo, e transformando método em atributo
            return `${this.nome} ${this.sobrenome}`
        },

        //SETTER
        set nomeCompleto(valor) { // ele pega o valor por completo
            valor = valor.split(' ') // vai dividir os valores do nome em cada espaço, separar por silaba
            this.nome = valor.shift() // ele vai retonar o primeiro valor e vai remover
            this.sobrenome = valor.join(' ') // eu to pegando o restante do nome e separando por espaço
        },

        altura: altura, // tem que separar todos os métodos por virgulas
        peso: peso,
        //GETTER, transformei o função em um atributo igual a nome, sobrenome
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Rodrigo', 'Silva', 1.80, 80) // o this sempre vai se referir a pessoa que chamou oque vc esta executando, que no caso é o p1, transforma em um array
console.log(p1.imc)
p1.nomeCompleto = 'jose da silva'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala('falando sobre JS')) // p1 está chamando fala, ele sera o this 