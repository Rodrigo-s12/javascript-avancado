//705.484.450-52 070.987.720-03

/*

7x  0x  5x  4x  8x  4x  4x  5x   0x
10  9   8   7   6   5   4   3    2
70  0   40  28  48  20  16  15   0 = 237

11 - (237 % 11) = 5


7x  0x  5x  4x  8x  4x  4x  5x   0x  5x
11  10   9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15   0 = 284

11 - (284 % 11) = 2
SE O NUMERO DIGITO FOR MAIOR QUE 9, CONSIDERAMOS 0.
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', { // criei esse metodo so para tirar os pontos do cpf
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')// so vai mostrar numeros e tirar os pontos
        }
    })
}

ValidaCPF.prototype.valida = function() { // função de validação
    if(typeof this.cpfLimpo === 'undefined') return false // se o cpf não for enviado retorne false
    if(this.cpfLimpo.length !== 11) return false// se não tiver 11 numeros retorne false
    if(this.sequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2) // aqui peguei o cpf com 9 digitos
    const digito1 = this.criaDigito(cpfParcial) 
    const digito2 = this.criaDigito(cpfParcial + digito1)
    
    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial) // transformei em um array
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--
        return ac
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)

    

}   

ValidaCPF.prototype.sequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}
const cpf = new ValidaCPF('611.338.863.88') 

if(cpf.valida()) {
    console.log('cpf valido') 

} else {
    console.log('cpf invalido')
}