

const h1 = document.querySelector('.container h1');
const data = new Date()
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}



h1.innerHTML = data.toLocaleString('pt-BR', opcoes)



/*const h1 = document.querySelector('.container h1')
const data = new Date()

function diaSemanaTexto(diaSemana) {
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
    return diasSemana[diaSemana]
}
function getNomeMes(NumeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho','julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[NumeroMes]
}
function zeroAEsquerda(num) {
    return num >= 10 ? num: `0${num}`
}

function criarData(data) {
    const diaSemana = data.getDay()
    const NumeroMes = data.getMonth()
    
    const nomeDia = diaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(NumeroMes)

    
    return `${nomeDia}, ${data.getDate()} de ${nomeMes} ${data.getFullYear()}  ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    
}
h1.innerHTML = criarData(data)*/






