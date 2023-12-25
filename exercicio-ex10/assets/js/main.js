const form = document.querySelector('#formulario')

form.addEventListener('submit', function (event){  // parei o evento de submit, enviar
    event.preventDefault()
    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura') // vai me mostrar qual elemento que ta recebendo o evento(target), to pegando os dados das caixas

    const peso = Number(inputPeso.value) //to pegando os valores, convertendo em numeros
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso inválido', false) // se digitarem uma letra ou outra coisa vai dar invalido, pq o peso ou altura vai dar invalido
        return
    }
    if (!altura) {
        setResultado('Altura inválida', false)
        return 
    }
    const imc = getImc(peso, altura) 
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc})`
    setResultado(msg, true)

})

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if(imc >= 39.9) return nivel[5]
    if(imc >= 34.9) return nivel[4]
    if(imc >= 29.9) return nivel[3]
    if(imc >= 24.9) return nivel[2]
    if(imc >= 18.5) return nivel[1]
    if(imc < 18.5) return nivel[0]
 }

function getImc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2    )
}

function criaP () {
    const p = document.createElement('p') // criei um elemeto(paragrafo)
    return p;
}


function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
   
    const p = criaP()
    
    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    resultado.appendChild(p) //vai adicionar o resultado dentro de p na div
    p.innerHTML = msg
}