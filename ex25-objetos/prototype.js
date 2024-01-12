/* construtrora -> molde(class)
 JavaScript é baseado  em prototipos para passar  propriedades e métodos de um objeto para o outro

definição de prototipo
prototipo  é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

todos os obejetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade prototype da função contrutora que foi usada para criá-lo.Quando tentamos acessar um membro de um obejto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada ate o topo(null) até encontrar (ou não) tal membro.

*/


function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome 

}

Pessoa.prototype.nomeCompleto = function() { // essa função vai ser para todas new pessoa que for envocada, para não cria uma nova toda vez que criar uma nova pessoa
    return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('luiz', 'o.')
const pessoa2 = new Pessoa('maria', 'a.')
console.log(pessoa2)