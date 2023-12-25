function Calculadora() {
  this.display = document.querySelector('.display') 
    
      
    this.inicia = () => {
        this.cliqueBotoes()
        this.pressionaEnter()
    }

   this.btnParaDisplay = (valor) => this.display.value += valor

   this.ClearDisplay = () => this.display.value = ''

   this.del = () => this.display.value = this.display.value.slice(0, -1)

   this.realizaConta = () => {
    try {
        const conta = eval(this.display.value)

       if(!conta) {
        alert('conta invalida')
        return
       } 

       this.display.value = conta
    } catch (error) {
        alert('conta invalida')
        return   
    }
   }
   
   this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) this.realizaConta()
    
        })
   }

   this.cliqueBotoes = () => {
    document.addEventListener('click', event => {
        const el = event.target

        if(el.classList.contains('btn-num'))  this.btnParaDisplay(el.innerText)
        
        if(el.classList.contains('btn-clear')) this.ClearDisplay()
                
        if(el.classList.contains('btn-del')) this.del()
        
        if(el.classList.contains('btn-eq')) this.realizaConta()

        this.display.focus()
        
    })
   }

}

const calc = new Calculadora()
calc.inicia()





















/*function criaCalculadora() {
    return {
    display: document.querySelector('.display'),


    inicia() {
        this.cliqueBotoes()
        this.apertaEnter()
    },


    btnParaDisplay(valor) {
        this.display.value += valor
    },
    clearDisplay() {
        this.display.value = ''
    },
    apagaUm() {
        this.display.value = this.display.value.slice(0, -1)
    },
    realizaConta() {
        let conta = this.display.value
        conta = eval(conta)

        try {
        if(!conta) {
            alert('conta invalida')
            return
        }
        } catch (error) {
            alert('conta invalida!')
            return
        
        }
        this.display.value = conta
    },
    apertaEnter() {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta()
            }
        })
    },

    cliqueBotoes() {
        document.addEventListener('click', function(e) {
            el = e.target

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText)
            }
            if(el.classList.contains('btn-clear')) {
                this.clearDisplay()
            }
            if(el.classList.contains('btn-del')) {
                this.apagaUm()
            }
            if(el.classList.contains('btn-eq')) {
                this.realizaConta()
            }
            this.display.focus()
        }.bind(this))
    }
    }
}
const calculadora = criaCalculadora()
calculadora.inicia()*/