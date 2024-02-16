// 705.484.450-52  070.987.720-03

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''), // to limpando qualquer coisa que não seja numero
            writable: false,
            configurable: false,
            enumerable: true
        })
    }

    sequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo // to repetindo o primeiro numero 11 vezes, se for igual ao cpfLimpo ta vai dar uma sequencia do mesmo numero
    }

    gerarNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2) // vou pegar os 9 digitos do cpf
        const digito1 = this.gerarDigito(cpfSemDigitos)
        const digito2 = this.gerarDigito(cpfSemDigitos + digito1)

       this.novoCPF = cpfSemDigitos + digito1 + digito2
    }

    gerarDigito(cpfSemDigitos) { // quando eu não uso this no metódo eu posso usar o método static, no lugdar do this eu uso a class
       let total = 0
       let regressivo = cpfSemDigitos.length + 1 // peguei os 9 digitos + 1
        
       for(let stringNumerica of cpfSemDigitos) {
            total += regressivo * Number(stringNumerica)
            regressivo --
        }

        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'

    }


    valida() {
        if(!this.cpfLimpo) return false // se for diferente de cpfLimpo retorna falso
        if(typeof this.cpfLimpo !== 'string') return false // se cpfLImpo for diferente de uma string retorna falso
        if(this.cpfLimpo.length !== 11) return false // se a quantidade do cpfLimpo for diferente de 11 return false
        if(this.sequencia()) return false // se for uma sequencia return false
        this.gerarNovoCpf() // to so executando a função
        
        return this.novoCPF === this.cpfLimpo
    }

}

/*let validacpf = new ValidaCPF('070.987.720-03')
//Validacpf = new ValidaCPF('jhkhkhkhkhkhkhkhkh')
//console.log(Validacpf.valida())

if(validacpf.valida()) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}*/