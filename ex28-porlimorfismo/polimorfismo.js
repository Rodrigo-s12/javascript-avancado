// vou criar uma conta poupança e uma corrente e criar metodos genericos que as duas vão usar

// superclass, class mãe, class pai
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

// métodos genereicos
Conta.prototype.sacar = function(valor) { // no sacar eu preciso de um valor pra min saber quanto vou sacar
    if(valor > this.saldo) { //se o valor for mais que o saldo, vai dar valor insuficiente
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return 
    }
    this.saldo -= valor // se o valor for menor que o saldo, ela vai sacar e vai mostrar o saldo
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor // vai acrescentar o valor depositado com o saldo
    this.verSaldo() // para ver quanto depositou
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`)
    
}
// conta corrente
function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo) // herdei tudo da funçaõ principal menos o limite, se chama herança
    this.limite = limite
}

// copiando o prototype de Conta()
CC.prototype = Object.create(Conta.prototype) // posso usar todos os prototypes de Conta
CC.prototype.constructor = CC

//sobreescrevendo o sacar, porque agora pode valor negativo por causa do limite
CC.prototype.sacar = function(valor) { // no sacar eu preciso de um valor pra min saber quanto vou sacar
    if(valor > (this.saldo + this.limite)) { //se o valor for mais que o saldo + limite, ele vai poder sacar ate o valor do limite, depois vai dar saldo insuficiente
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return 
    }
    this.saldo -= valor // se o valor for menor que o saldo, ela vai sacar e vai mostrar o saldo
    this.verSaldo()
}   
// conta poupança
function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo) // herdei tudo da funçaõ principal menos o limite, se chama herança
}

CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP


const cc = new CC(11, 22, 0, 100)
cc.depositar(10)
cc.sacar(110)
cc.sacar(1)

console.log()

const cp = new CP(11, 22, 0)
cp.depositar(10)
cp.sacar(10)
cp.sacar(1)

// você fazer um método se comportar de forma diferente em classes filha de um mesmo pai, se chama polimofirsmo, o método se comportar de forma diferente mesmo sendo o mesmo método sacar()