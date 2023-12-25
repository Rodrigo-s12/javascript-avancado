function relogio() {
    function criarHoraDosSegundos(segundos) {  // aqui eu formatei os segundos
        const data = new Date(segundos * 1000) // o js esta recebendo em segundos, multiplicar por mil para ele receber em milesemos de segundo
        return data.toLocaleTimeString('pt-br', { // to formatando a hora em 00:00:00, toda vez que eu passar os segundos, vai formatar no formato de hora
            hour12: false,
            timeZone: 'GMT' // esta considerando esse timezone, não o meu
        })
    }
    
    const relogio = document.querySelector('.relogio') // liguei com Html
    let segundos = 0
    let timer;
    
    function iniciaRelogio() { // função para iniciar o relogio
        timer = setInterval(function() {
            segundos++ // a cada 1 segundo vai somar +1, no caso quando parar o relogio, vai continuar a contagem, quando clicar em retornar(iniciar)
            relogio.innerHTML = criarHoraDosSegundos(segundos) // vai atualizar o html, e vai iniciar o relogio na tela
        }, 1000)
    }
    
    document.addEventListener('click' ,function(e) {  // criei um evento no document, no corpo todo da pagina
        const el = e.target // vai pegar o click que eu der na pagina
        
        if(el.classList.contains('zerar')) {
            relogio.classList.remove('pausado') // estou removendo a class pausado
            clearInterval(timer) // vai parar
            relogio.innerHTML = '00:00:00' // e aqui vai zerar
            segundos = 0 // quando eu clicar em zerar minha variavel voltou a ser zero
        }
    
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)  // vou dar clear para não criar dois times na mesma pagina, para nao dar conflito na pagina
            iniciaRelogio()  // to iniciando o relogio
        }
    
        if(el.classList.contains('pausar')) {
            relogio.classList.add('pausado')
            clearInterval(timer) // vai parar o interval
        }
        
    
      })
      
}

relogio()





//Se usa mais quando tem menos butao
/*const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let segundos = 0 // segundos vai iniciar no zero, como essa variavel e vizinha da funçao eu posso usar ela dentro da função
let timer;

function iniciaRelogio() { // função para iniciar o relogio
    timer = setInterval(function() {
        segundos++ // a cada 1 segundo vai somar +1, no caso quando parar o relogio, vai continuar a contagem, quando clicar em retornar(iniciar)
        relogio.innerHTML = criarHoraDosSegundos(segundos) // vai atualizar o html, e vai iniciar o relogio na tela
    }, 1000)
}

iniciar.addEventListener('click', function(event) {  // aqui eu to pegando o evento de click no botao
    clearInterval(timer)  // vou dar clear para não criar dois times na mesma pagina, para nao dar conflito na pagina
    iniciaRelogio()  // to iniciando o relogio
})

pausar.addEventListener('click', function(event) {
    clearInterval(timer) // vai parar o interval
    
})

zerar.addEventListener('click', function(event) {
    clearInterval(timer) // vai parar
    relogio.innerHTML = '00:00:00' // e aqui vai zerar
    segundos = 0 // quando eu clicar em zerar minha variavel voltou a ser zero
})*/
    


