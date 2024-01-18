function ValidaCPF(CpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return CpfEnviado.replace(/\D+/g, '')
        }
    })  // criei um objeto com o o nome cpflimpo que vai retornar o cpfEnviado, sem ponto entre os numeros.
       
}

ValidaCPF.prototype.valida = function() { // função de validação e chamagem da função
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2) // to pegando 9 digitos do cpf
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    
    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial) // to jogando dentro de um array
    let regressivo = cpfArray.length + 1 // agora ficou com 10 digitos pra poder fazer a primeira conta
    const total = cpfArray.reduce((ac, valor) => {
        ac += (regressivo * Number(valor))
        regressivo--
        return ac
    }, 0) // acumulador começa do 0
    const digito = 11 - (total % 11)
    
   
    return digito > 9 ? '0' : String(digito)// se o digito for maior que 9 retorna 0 senão retorna o valor do digito, retonando uma string
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}
const cpf = new ValidaCPF('705.484.450-52')

if(cpf.valida()) {
    console.log('cpf válido')
} else {
    console.log('cpf invalido')
}