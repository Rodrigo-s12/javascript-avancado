function criaCalculadora() {
    return {
         display: document.querySelector('.display'),
         
         
        inicia() {
            this.cliqueBotoes()// toda vez que eu quiser refenciar uma chave do meu objeto dentro do objeto eu preciso usar this
            this.pressionaEnter() // quando pressionar enter vai fazer a conta
        }, 
        
        pressionaEnter() {
            this.display.addEventListener('keyup', e => { //usando arrow function para nao perder o this
                if(e.keyCode === 13) {
                    this.realizaConta()
                }

            }) 
        },
        
        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta) // o eval vai fazer a conta que a no display

                if(!conta) { // se for diferente de conta, vai dar o alerta
                    alert('conta invalida')
                    return // e sair
                }
                this.display.value = String(conta)
            } catch(e) {
                alert('conta invalida')  
                return
            }
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1) // aqui eu so vou apagar um de cada vez
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target // oque eu to clicando na pagina
                // aqui o this ta sendo o document.
                
                if(el.classList.contains('btn-num')) { //se o elemento contem class de numero
                    this.btnParaDisplay(el.innerText) }// vou pegar o texto do botão
                    
                    // como ele vai ser chamado de dentro de outro metodo precisa do this, esse evento vai para dentro de display.
                    
                if(el.classList.contains('btn-clear')) { // se o botao clicado for btn-clear, vai chamar a função
                    this.clearDisplay()
                }
                
                if(el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
                
                this.display.focus() // mandei o foco para o display a cada botão clicado
            }.bind(this)) // bind, eu to falando pra pegar o this da calculadora, e não o do document
        },

        btnParaDisplay(valor) {
            this.display.value += valor // to pegando o valor e jogando para o display mais o botao que ta sendo clicado(el.innerText)
        }
    }
}
const calculadora = criaCalculadora()
calculadora.inicia()