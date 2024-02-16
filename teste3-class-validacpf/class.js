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


class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            configurable: false,
            writable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    gerarNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = this.gerarDigito(cpfSemDigitos)
        const digito2 = this.gerarDigito(cpfSemDigitos + digito1)
        
        this.novoCPF = cpfSemDigitos + digito1 + digito2
        
        
    }

    gerarDigito(cpfSemDigitos) {
        let total = 0
        let regressivo = cpfSemDigitos.length + 1

        for(let stringNumerica of cpfSemDigitos) {
            console.log(total)
            total += regressivo * Number(stringNumerica)
            
            regressivo--
            
        }
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito): '0'
    }

    sequencia() {
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.sequencia()) return false
        this.gerarNovoCpf()
        return this.novoCPF === this.cpfLimpo
    }
}

const validacpf = new ValidaCPF('611.338.863.88')
//console.log(validacpf.valida())

if(validacpf.valida()) {
    console.log('cpf válido')
} else {
    console.log('cpf Inválido')
}